const { resolve } = require("path")

const { draftFormatter: draftQuery } = require("../src/utils/draft-formatter")
const dev = require("../src/utils/nodeEnv")

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions
  const tagTemplate = resolve(`src/templates/tags.js`)
  const blogTemplate = resolve(`src/templates/page.js`)

  const draftGeneratedQuery = draftQuery(dev)
  const res = await graphql(`
      query {
        ${draftGeneratedQuery}
      }
    `)

  tagSet = new Set()
  imgSet = new Set()
  const posts = res.data.allMarkdownRemark.edges
  posts.forEach(post => {
    const {
      node: {
        fields: { slug },
        frontmatter: { tags },
      },
    } = post
    // const { slug } = post.node.fields
    // const { tags } = post.node.frontmatter
    createPage({
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: {
        slug,
      },
    })
    if (tags) {
      tags.forEach(tag => {
        tagSet.add(tag)
      })
    }
  })

  tagArray = Array.from(tagSet)
  const devContext = dev ? { draft: {} } : { draft: { eq: false } }
  tagArray.forEach(tag => {
    createPage({
      component: tagTemplate,
      path: `/tags/${tag}`,
      context: {
        tag,
        dev: devContext,
      },
    })
  })
}
