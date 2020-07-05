function draftFormatter(dev) {
  let draftQuery = draft(dev)
  const query = `allMarkdownRemark(filter: ${draftQuery}) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          tags
          categories
        }
      }
    }
  }`
  return query
}
function draft(isDev) {
  return isDev ? `{ fields: { draft: {} } }` : `{ fields: { draft: { eq: false } } }`
}
module.exports = { draftFormatter, draft }
