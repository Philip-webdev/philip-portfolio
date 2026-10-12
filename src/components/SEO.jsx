import { useEffect } from 'react'

export default function SEO({ title, description, url, image }) {
  useEffect(() => {
    const baseTitle = 'Philip Bankole — Developer & Founder'
    const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle
    const baseDesc = 'Building the digital infrastructure for Africa\'s next economy. Developer & founder shipping EdTech, FinTech, and FoodTech solutions.'
    const desc = description || baseDesc
    const origin = window.location.origin
    const full_url = url ? `${origin}${url}` : origin
    const isArticle = Boolean(url && url.startsWith('/blog/'))
    const full_image = image || `${origin}/philip.jpeg`

    document.title = fullTitle

    const setMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', desc)
    setMeta('og:site_name', 'Philip Bankole', 'property')
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', desc, 'property')
    setMeta('og:url', full_url, 'property')
    setMeta('og:type', isArticle ? 'article' : 'website', 'property')
    setMeta('og:image', full_image, 'property')
    setMeta('og:image:alt', title || 'Philip Bankole', 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', desc)
    setMeta('twitter:image', full_image)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', full_url)
  }, [title, description, url, image])

  return null
}
