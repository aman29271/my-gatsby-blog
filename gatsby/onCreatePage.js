const dev = require("../src/utils/nodeEnv")

module.exports = ({ page, actions }) => {
  const devContext = dev ? { draft: {} } : { draft: { eq: false } }

  const { createPage, deletePage } = actions
  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      dev: devContext,
    },
  })
}
