import React, { Fragment }  from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import '../style/all.sass'
import { schemaPageTemplate } from '../structuredData'
import { useImageDimensions, useLocation } from '../hooks'

// <Helmet
//   bodyAttributes={{ class: 'has-navbar-fixed-top' }}
// >

const TemplateWrapper = ({ 
  seoTitle, 
  seoDescription,
  featuredImage,
  slug,
  templateKey,
  children 
}) => {

  const imageDimensions = useImageDimensions()
  const location = useLocation()
  const pageType =  templateKey && 
                    templateKey.indexOf('blog') !== -1
                      ? 'article'
                      : 'business.business'
  const src = featuredImage && featuredImage.src 
    ? location.origin + featuredImage.src.desktop.childImageSharp.fluid.src
    : null
  const schemaData = {
    headline: seoTitle, 
    description: seoDescription,
    url: location.origin + slug,
    origin: location.origin,
    image: {
      url: src,
      width: imageDimensions.hero.desktop.width,
      height: imageDimensions.hero.desktop.height
    },
    pageType
  }

  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <title>{seoTitle}</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content={seoDescription} />

        <link rel="apple-touch-icon" sizes="57x57" href={`/img/favicons/apple-icon-57x57.png`} />
        <link rel="apple-touch-icon" sizes="60x60" href={`/img/favicons/apple-icon-60x60.png`} />
        <link rel="apple-touch-icon" sizes="72x72" href={`/img/favicons/apple-icon-72x72.png`} />
        <link rel="apple-touch-icon" sizes="76x76" href={`/img/favicons/apple-icon-76x76.png`} />
        <link rel="apple-touch-icon" sizes="114x114" href={`/img/favicons/apple-icon-114x114.png`} />
        <link rel="apple-touch-icon" sizes="120x120" href={`/img/favicons/apple-icon-120x120.png`} />
        <link rel="apple-touch-icon" sizes="144x144" href={`/img/favicons/apple-icon-144x144.png`} />
        <link rel="apple-touch-icon" sizes="152x152" href={`/img/favicons/apple-icon-152x152.png`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`/img/favicons/apple-icon-180x180.png`} />
        <link rel="icon" type="image/png" sizes="192x192"  href={`/img/favicons/android-icon-192x192.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`/img/favicons/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="96x96" href={`/img/favicons/favicon-96x96.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`/img/favicons/favicon-16x16.png`} />
        <link rel="manifest" href={`/img/favicons/manifest.json`} />
        <meta name="msapplication-TileColor" content="#F1E8E1" />
        <meta name="msapplication-TileImage" content={`/img/favicons/ms-icon-144x144.png`} />
        <meta name="theme-color" content="#F1E8E1" />

        <meta property="og:type" content={pageType} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={schemaData.url} />
        <meta property="og:image" content={schemaData.image.url} />
        { pageType === 'article' && 
          <meta property="article:author" content="Aaron Gervais" />
        }
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@otherwisebrewing" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={schemaData.image.url} />
        <script type="application/ld+json">{schemaPageTemplate(schemaData)}</script>

      </Helmet>
      <Fragment>
        {children}
        <Footer />
      </Fragment>
    </Fragment>
  )
}

export default TemplateWrapper
