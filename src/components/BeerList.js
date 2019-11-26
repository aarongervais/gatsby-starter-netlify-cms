import React from 'react'
import uniqid from 'uniqid'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import useBeerList from '../hooks/useBeerList'

const BeerSummaryCard = ({
  abv,
  ibu,
  beerImage,
  excerpt,
  fermentables,
  styles,
  name,
  slug
}) => {

  const basename = 'beer-summary-card'

  return ( 
    <div className={`${basename} column`}>
      <Img 
        className={`${basename}-image`} 
        fluid={beerImage.childImageSharp.fluid}
        alt={`product image for beer ${name}`}
      />
      <h3 className={`${basename}-title`}>{name}</h3>
      <p className={`${basename}-styles`}>{styles.join(', ')}</p>
      <ul className={`${basename}-metadata`}>
        <li className={`${basename}-metadata-entry`}><strong>ABV</strong>: {abv}</li>
        <li className={`${basename}-metadata-entry`}><strong>IBUs</strong>: {ibu}</li>
        <li className={`${basename}-metadata-entry`}><strong>Fermentables</strong>: {fermentables.join(', ')}</li>
      </ul>
      <p className={`${basename}-excerpt`}>{excerpt}</p>
      <Link to={slug} className={`${basename}-link has-color-ow-red`}>More Info &rsaquo;</Link>
    </div>
  )
}


const BeerList = (maxItems) => {

    const beerList = useBeerList()

    return (
      <div className="columns is-multiline">
        
        { beerList.map( ({node}, index) => {
          
          if ( maxItems && index === maxItems - 1 ) {
            return null;
          }

          const { 
            frontmatter: { 
              abv,
              ibu,
              beerImage,
              excerpt,
              fermentables,
              styles,
              name
            }, 
            fields: { 
              slug 
            } 
          } = node

          const props = { key: uniqid(), abv, ibu, beerImage, excerpt, fermentables, styles, name, slug }

          return <BeerSummaryCard {...props} />

        })}

      </div>
    )
}

export default BeerList