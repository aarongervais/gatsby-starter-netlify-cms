import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content, className, style }) => (
  <div className={className} style={style} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
