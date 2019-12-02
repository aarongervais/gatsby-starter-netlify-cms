import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset, widgetsFor }) => (
  <IndexPageTemplate
    hero={{
      header: entry.getIn(['data', 'hero']),
      subheader_MD: entry.getIn(['data', 'hero', 'subheader_MD'])
    }}
    featuredImage={{
      src: {
        desktop: getAsset(entry.getIn(['data', 'featuredImage', 'src', 'desktop'])),
        mobile: getAsset(entry.getIn(['data', 'featuredImage', 'src', 'mobile']))
      },
      alt: entry.getIn(['data', 'featuredImage', 'alt'])
    }}
    missionStatement_MD={ entry.getIn(['data', 'missionStatement_MD'])}
    valueProps={ widgetsFor('valueProps').map( item => ({
      image: item.getIn(['data', 'image']),
      alt: item.getIn(['data', 'alt']),
      alignment: item.getIn(['data', 'alignment']),
      text_MD: item.getIn(['data', 'text_MD']),
    })) }
    isPreview={true}
  />
)

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetsFor: PropTypes.func,
}

export default IndexPagePreview
