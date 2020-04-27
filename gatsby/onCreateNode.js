const { basename } = require('path')

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
    if (
        /image\/*/.test(node.internal.mediaType) &&
        /thumbnails/.test(node.relativeDirectory)
    ) {
        const imgSlug = node.relativeDirectory
        createNodeField({
            node,
            name: "slug",
            value: imgSlug,
        })
    }
}