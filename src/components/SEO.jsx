import { useEffect } from 'react'

export default function SEO({ title, description, url, image }) {
  useEffect(() => {
    const baseTitle = 'Philip Bankole — Developer & Founder'
    const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle
    const baseDesc = 'Building the digital infrastructure for Africa\'s next economy. Developer & founder shipping EdTech, FinTech, and FoodTech solutions.'
    const desc = description || baseDesc
    const base_url = 'https://philip-portfolio.vercel.app'
    const full_url = url ? `${base_url}${url}` : base_url

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
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', desc, 'property')
    setMeta('og:url', full_url, 'property')
    setMeta('og:type', url?.startsWith('/blog/') ? 'article' : 'website', 'property')
    setMeta('twitter:title', fullTitle, 'name')
    setMeta('twitter:description', desc, 'name')

    if (image) {
      setMeta('og:image', image, 'property')
      setMeta('twitter:image', image, 'name')
    }

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
