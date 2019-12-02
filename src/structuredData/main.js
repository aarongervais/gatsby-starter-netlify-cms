export const companySchema = ({url, image, origin}) => ({
  "@context": "http://schema.org/",
  "@type": "Brewery",
  "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
  },
  "@id": "#schemaOtherwiseBrewing",
  "name": "Otherwise Brewing",
  "legalName": "Otherwise Brewing LLC",
  "employee": "#schemaAaron",
  "alternateName": "OtherwiseBrewing",
  "url": origin,
  "logo": {
    "@id": "#schemaLogo"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1598 Carroll Aveenue",
    "addressLocality": "San Francisco",
    "addressRegion": "Calfornia",
    "postalCode": 94124,
    "addressCountry": "United States"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "37.7250736",
    "longitude": "-122.3930434"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "info@otherwisebrewing.com",
    "availableLanguage": [
      "English",
    ]
  },
  "email": "info@otherwisebrewing.com",
  "hasMap": "https://www.google.com/maps/place/1598+Carroll+Ave,+San+Francisco,+CA+94124/@37.7251018,-122.3950669,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7f185633e699:0x39139f794850c157!8m2!3d37.7251018!4d-122.3928782",
  "sameAs": [
    "https://www.facebook.com/Otherwise-Brewing-118282092901721",
    "https://twitter.com/otherwisebrewing",
    "https://www.instagram.com/otherwisebrewing"
  ],
  "image": { 
    "@context": "http://schema.org/",
    "@type": "ImageObject",
    "url": image.url,
    "height": image.height,
    "width": image.width
  }
})

export const aaronSchema = {
  "@context": "http://schema.org",
  "@type": "Person",
  "@id": "#schemaAaron",
  "familyName": "Gervais",
  "givenName": "Aaron",
  "jobTitle": [
    "Chief Executive Officer"
  ],
  "worksFor": "#schemaOtherwiseBrewing"
}

export const logoSchema = (origin) => ({
  "@context": "http://schema.org/",
  "@type": "ImageObject",
  "@id": "#schemaLogo",
  "url": origin + "/img/otherwise-logo.svg",
  "height": 240,
  "width": 104
})