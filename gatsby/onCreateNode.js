const { basename } = require("path")

module.exports = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type == "MarkdownRemark") {
    const slug = basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
