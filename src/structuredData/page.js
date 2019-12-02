import { companySchema, aaronSchema, logoSchema } from './main'


export const schemaPageTemplate = ({ 
  headline, 
  url, 
  origin,
  description, 
  image
}) => {

  const pageSchema = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "headline": headline,
    "url": url,
    "description": description,
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": image.url,
      "width": image.width,
      "height": image.height
    },
    "author": {
      "@id": "#schemaAaron"
    },
    "copyrightHolder": {
      "@id": "#schemaOtherwiseBrewing"
    }
  }

  return JSON.stringify([
    companySchema({url, image, origin}), 
    pageSchema, 
    aaronSchema, 
    logoSchema(origin)
  ])
  
}