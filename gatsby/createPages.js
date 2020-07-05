const { resolve } = require("path")

const { draftFormatter: draftQuery } = require("../src/utils/draft-formatter")
const dev = require("../src/utils/nodeEnv")

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions
  const tagTemplate = resolve(`src/templates/tags.js`)
  const blogTemplate = resolve(`src/templates/page.js`)
  const categoryComponent = resolve(`src/templates/category.js`)

  const draftGeneratedQuery = draftQuery(dev)
  const res = await graphql(`
      query {
        ${draftGeneratedQuery}
      }
    `)

  tagSet = new Set()
  imgSet = new Set()
  categorySet = new Set()
  const posts = res.data.allMarkdownRemark.edges
  posts.forEach(post => {
    const {
      node: {
        fields: { slug },
        frontmatter: { tags, categories },
      },
    } = post
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
    if (categories) {
      categories.forEach(category => {
        categorySet.add(category)
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
  categoryArry = Array.from(categorySet)
  categoryArry.forEach(category => {
    createPage({
      component: categoryComponent,
      path: `/category/${category}`,
      context: {
        category,
        dev: devContext,
      },
    })
  })
}
