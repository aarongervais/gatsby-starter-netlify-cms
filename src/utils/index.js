const remark = require('remark');
const remarkHTML = require('remark-html')
const deepMap = require('deep-map')
const _ = require('lodash')


const makeHTMLNodes = (value, key) => ( 
  (
    _.isString(value) && 
    _.isString(key) &&
    key.slice(-3) === '_MD' // process any node with the _MD suffix as MarkDown
  ) 
    ? remark()
        .use(remarkHTML)
        .processSync(value)
        .toString()
    : value  
)

exports.transformFrontmatterMD = (node) => {
  if ( node.frontmatter ) {
    deepMap(node.frontmatter, makeHTMLNodes, { inPlace: true });
  }
}