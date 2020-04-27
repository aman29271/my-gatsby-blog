const { resolve } = require('path');

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions
  const tagTemplate = resolve(`src/templates/tags.js`)
  const blogTemplate = resolve(`src/templates/page.js`)
  const imgTemplate = resolve(`src/templates/img.js`)
  const imgFulltemplate = resolve(`src/templates/img-template.js`)
  const res = await graphql(`
      query {
        allFile(filter: { fields: { slug: { ne: null } } }) {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
        allMarkdownRemark(filter: { fields: { draft: { eq: false } } }) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `)

  tagSet = new Set()
  imgSet = new Set()
  const posts = res.data.allMarkdownRemark.edges
  posts.forEach(post => {
    const { node: { fields: { slug }, frontmatter: { tags } } } = post
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
    // }
  })

  tagArray = Array.from(tagSet)
  tagArray.forEach(tag => {
    createPage({
      component: tagTemplate,
      path: `/tags/${tag}`,
      context: {
        tag,
      },
    })
  })
  const imgSlug = res.data.allFile.edges
  imgSlug.forEach(edge => {
    const { node: { fields: { slug }, id } } = edge
    imgSet.add(slug)
    createPage({
      component: imgFulltemplate,
      path: `/gallery/${slug}/${id}`,
      context: {
        id,
      },
    })
  })
  imgSlugArray = Array.from(imgSet)
  imgSlugArray.forEach(slug => {
    createPage({
      component: imgTemplate,
      path: `/gallery/${slug}`,
      context: {
        imgslug: slug,
      },
    })
  })
}