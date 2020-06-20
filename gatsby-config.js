/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = require("./data/siteConfig")
const [github, twitter, linkedin] = config.userLinks
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: config.title,
    author: config.author,
    Email: config.userEmail,
    githubUsername: github.username,
    twitterUsername: twitter.username,
    linkedInUsername: linkedin.username,
    siteTitle: config.siteTitle,
    description: config.description,
    siteUrl: config.siteUrl,
    defaultImage: config.siteLogo,
    keywords: config.keywords,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-draft",
    "gatsby-plugin-sharp",
    "gatsby-plugin-catch-links",
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
