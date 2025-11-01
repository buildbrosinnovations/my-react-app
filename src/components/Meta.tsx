import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface MetaProps {
  title?: string
  description?: string
  image?: string
  type?: string
}

const Meta = ({
  title = 'BuildBros Innovations - Custom Software & Digital Solutions',
  description = 'Transform your business with cutting-edge software development, web and mobile applications, and digital innovation services from BuildBros Innovations.',
  image = 'https://buildbrosinnovations.com/og-image.jpg',
  type = 'website',
}: MetaProps) => {
  const location = useLocation()
  const url = `https://buildbrosinnovations.com${location.pathname}`

  useEffect(() => {
    // Update document title
    document.title = title

    // Update meta tags
    const updateMetaTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`)
      if (!element) {
        element = document.querySelector(`meta[name="${property}"]`)
      }
      if (element) {
        element.setAttribute('content', content)
      }
    }

    updateMetaTag('description', description)
    updateMetaTag('og:title', title)
    updateMetaTag('og:description', description)
    updateMetaTag('og:image', image)
    updateMetaTag('og:url', url)
    updateMetaTag('og:type', type)
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', image)

    // Update JSON-LD
    const script = document.querySelector('script[type="application/ld+json"]')
    if (script) {
      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'BuildBros Innovations',
        url: 'https://buildbrosinnovations.com',
        logo: 'https://buildbrosinnovations.com/logo.svg',
        description:
          'Custom software development and digital solutions company specializing in web, mobile, and enterprise applications.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 Innovation Drive',
          addressLocality: 'San Francisco',
          addressRegion: 'CA',
          postalCode: '94105',
          addressCountry: 'US',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-415-555-0100',
          contactType: 'customer service',
          email: 'hello@buildbrosinnovations.com',
        },
        sameAs: [
          'https://www.linkedin.com/company/buildbros',
          'https://twitter.com/buildbros',
          'https://github.com/buildbros',
        ],
      }
      script.textContent = JSON.stringify(jsonLd)
    }
  }, [title, description, image, url, type])

  return null
}

export default Meta