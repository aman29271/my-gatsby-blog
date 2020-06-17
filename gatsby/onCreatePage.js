const dev = require("../src/utils/nodeEnv")

module.exports = ({ page, actions }) => {
  const devContext = dev ? { draft: {} } : { draft: { eq: false } }
  const { createPage, deletePage } = actions
  if (page.path === "/blog/") {
    console.log(devContext)
    deletePage(page)
    createPage({
      ...page,
      context: {
        ...page.context,
        dev: devContext,
      },
    })
  }
}
