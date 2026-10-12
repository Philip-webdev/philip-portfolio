import { next } from '@vercel/functions'

const SITE = 'https://philip-portfolio-ruddy.vercel.app'
const API = 'https://philip-blog-api.onrender.com/api'
const SITE_OPTS = { signal: AbortSignal.timeout(6000) }
const API_OPTS = { signal: AbortSignal.timeout(12000) }

export const config = {
  matcher: '/blog/:slug',
  runtime: 'nodejs',
}

const stripMarkdown = (content = '') =>
  content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#*_>`|[\]-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const esc = (value = '') => String(value).replace(/"/g, '&quot;').replace(/</g, '&lt;')

const buildTags = (post) => {
  const title = esc(post.title)
  const desc = esc(post.excerpt || stripMarkdown(post.content || '').slice(0, 200))
  const image = post.cover_image?.startsWith('http') ? post.cover_image : `${SITE}/philip.jpeg`
  const url = `${SITE}/blog/${post.slug}`

  const meta = (attr, key, value) => `<meta ${attr}="${key}" content="${value}" />\n    `

  return (
    meta('property', 'og:site_name', 'Philip Bankole') +
    meta('property', 'og:type', 'article') +
    meta('property', 'og:url', url) +
    meta('property', 'og:title', title) +
    meta('property', 'og:description', desc) +
    meta('property', 'og:image', image) +
    meta('property', 'og:image:alt', title) +
    meta('name', 'twitter:card', 'summary_large_image') +
    meta('name', 'twitter:site', '@PhilipOfAfrica') +
    meta('name', 'twitter:title', title) +
    meta('name', 'twitter:description', desc) +
    meta('name', 'twitter:image', image)
  )
}

export default async function middleware(request) {
  try {
    // Guard against self-fetch re-entry (fetching our own index.html)
    if (request.headers.get('x-og-middleware')) return next({ headers: { 'x-og-dbg': 'reentry' } })

    const slug = decodeURIComponent(
      new URL(request.url).pathname.replace(/^\/blog\//, '').replace(/\/+$/, '')
    )
    if (!slug || slug.includes('/')) return next({ headers: { 'x-og-dbg': 'no-slug:' + slug.slice(0, 20) } })

    const [siteResult, postResult] = await Promise.allSettled([
      fetch(`${SITE}/index.html`, {
        ...SITE_OPTS,
        headers: { 'user-agent': 'og-middleware', 'x-og-middleware': '1' },
      }),
      fetch(`${API}/posts/slug/${encodeURIComponent(slug)}`, API_OPTS),
    ])

    if (siteResult.status === 'rejected' || postResult.status === 'rejected') {
      const which = [
        siteResult.status === 'rejected' ? `site:${siteResult.reason && siteResult.reason.name}` : null,
        postResult.status === 'rejected' ? `api:${postResult.reason && postResult.reason.name}` : null,
      ].filter(Boolean).join(',')
      return next({ headers: { 'x-og-dbg': 'rej:' + which } })
    }

    const htmlRes = siteResult.value
    const postRes = postResult.value

    if (!htmlRes.ok || !postRes.ok)
      return next({ headers: { 'x-og-dbg': `fetch:${htmlRes.status}/${postRes.status}` } })

    const post = await postRes.json()
    if (!post || !post.slug) return next({ headers: { 'x-og-dbg': 'no-post' } })

    let html = await htmlRes.text()

    html = html
      .replace(/<meta[^>]+(?:property|name)="(?:og:[^"]*|twitter:[^"]*)"[^>]*>\s*/gi, '')
      .replace(/<title>[^<]*<\/title>/, `<title>${esc(post.title)} | Philip Bankole — Developer & Founder</title>`)
      .replace(
        /<meta[^>]+name="description"[^>]*>/,
        `<meta name="description" content="${esc(post.excerpt || stripMarkdown(post.content || '').slice(0, 200))}" />`
      )
      .replace(
        /<link[^>]+rel="canonical"[^>]*>/,
        `<link rel="canonical" href="${SITE}/blog/${post.slug}" />`
      )

    if (!html.includes('rel="canonical"')) {
      html = html.replace('</head>', `    <link rel="canonical" href="${SITE}/blog/${post.slug}" />\n    </head>`)
    }

    html = html.replace('</head>', `    ${buildTags(post)}</head>`)

    return new Response(html, {
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'public, max-age=0, s-maxage=60, stale-while-revalidate=300',
        'x-og-dbg': 'injected',
      },
    })
  } catch (err) {
    console.error('og middleware failed:', err)
    return next({ headers: { 'x-og-dbg': 'err:' + (err && err.name) } })
  }
}
