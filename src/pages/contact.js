import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import contactStyle from "../components/modules/contact.module.scss"
import SEO from "../components/SEO"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          Email
          githubUsername
          twitterUsername
          linkedInUsername
        }
      }
    }
  `)
  const { Email, githubUsername, twitterUsername, linkedInUsername } = data.site.siteMetadata
  return (
    <Layout>
      <SEO title={`Contact Me`} />
      <div>
        <h2 className={contactStyle.title}>Stay in touch</h2>
        <p>I write about stuff related to Javascript, React, Node.JS.</p>
        <p className={contactStyle.subtitle}>
          You can contact me via email or find me around the web.
        </p>
        <ul className={contactStyle.list}>
          <li>
            Email:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={contactStyle.link}
              href={`mailto:${data.site.siteMetadata.Email}`}
            >
              {Email}
            </a>
          </li>
          <li>
            Github:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={contactStyle.link}
              href={`https://github.com/${githubUsername}`}
            >
              {githubUsername}
            </a>
          </li>
          <li>
            Twitter:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={contactStyle.link}
              href={`https://twitter.com/${twitterUsername}`}
            >
              {twitterUsername}
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={contactStyle.link}
              href={`https://linkedin.com/in/${linkedInUsername}`}
            >
              {linkedInUsername}
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
export default Contact
