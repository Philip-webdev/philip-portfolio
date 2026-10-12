import { next } from '@vercel/functions'
import { OG_TEMPLATE } from './og-template.js'

const SITE = 'https://philip-portfolio-ruddy.vercel.app'
const API = 'https://philip-blog-api.onrender.com/api'
const API_OPTS = { signal: AbortSignal.timeout(12000) }

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
    const url = new URL(request.url)
    const slug = decodeURIComponent(url.pathname.replace(/^\/blog\//, '').replace(/\/+$/, ''))

    if (!slug || slug.includes('/') || url.pathname === '/blog')
      return next({ headers: { 'x-og-dbg': 'skip:' + slug.slice(0, 20) } })

    const postRes = await fetch(`${API}/posts/slug/${encodeURIComponent(slug)}`, API_OPTS)
    if (!postRes.ok) return next({ headers: { 'x-og-dbg': 'api:' + postRes.status } })

    const post = await postRes.json()
    if (!post || !post.slug) return next({ headers: { 'x-og-dbg': 'no-post' } })

    const canonical = `${SITE}/blog/${post.slug}`
    let html = OG_TEMPLATE

    html = html
      .replace(/<meta[^>]+(?:property|name)="(?:og:[^"]*|twitter:[^"]*)"[^>]*>\s*/gi, '')
      .replace(/<title>[^<]*<\/title>/, `<title>${esc(post.title)} | Philip Bankole — Developer & Founder</title>`)
      .replace(
        /<meta[^>]+name="description"[^>]*>/,
        `<meta name="description" content="${esc(post.excerpt || stripMarkdown(post.content || '').slice(0, 200))}" />`
      )
      .replace(/<link[^>]+rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`)

    if (!html.includes('rel="canonical"')) {
      html = html.replace('</head>', `    <link rel="canonical" href="${canonical}" />\n    </head>`)
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
