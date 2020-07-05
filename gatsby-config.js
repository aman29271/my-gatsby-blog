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
    googleSiteVerificationId: config.googleSiteVerification,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-draft",
    "gatsby-plugin-sharp",
    "gatsby-plugin-catch-links",
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-133905360-2",
      },
    },
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
          "gatsby-remark-header-custom-ids",
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
