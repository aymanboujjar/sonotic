import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEOHead = ({ title, description, keywords }) => {
  const location = useLocation()

  useEffect(() => {
    // Update document title
    document.title = title || 'SONOTIC - Tuyaux Industriels | Solutions d\'Infrastructure au Maroc'

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', description || 'SONOTIC - Spécialiste marocain des tuyaux industriels (PVC, HDPE, acier, béton). Solutions fiables pour l\'infrastructure industrielle.')

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.setAttribute('name', 'keywords')
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.setAttribute('content', keywords || 'tuyaux industriels, PVC, HDPE, acier, béton, infrastructure, Maroc, SONOTIC')

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (!ogTitle) {
      ogTitle = document.createElement('meta')
      ogTitle.setAttribute('property', 'og:title')
      document.head.appendChild(ogTitle)
    }
    ogTitle.setAttribute('content', title)

    let ogDescription = document.querySelector('meta[property="og:description"]')
    if (!ogDescription) {
      ogDescription = document.createElement('meta')
      ogDescription.setAttribute('property', 'og:description')
      document.head.appendChild(ogDescription)
    }
    ogDescription.setAttribute('content', description)

    let ogUrl = document.querySelector('meta[property="og:url"]')
    if (!ogUrl) {
      ogUrl = document.createElement('meta')
      ogUrl.setAttribute('property', 'og:url')
      document.head.appendChild(ogUrl)
    }
    ogUrl.setAttribute('content', window.location.href)
  }, [location, title, description, keywords])

  return null
}

export default SEOHead




