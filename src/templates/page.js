import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "../components/modules/post.scss"
import Helmet from "react-helmet"
import "../styles/page.scss"
import MarkdownPage from "../components/markdownPage/"

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...FrontmatterFragmentBlog
      html
      fields {
        slug
      }
    }
  }
`
const Blog = props => {
  return (
    <Layout>
      <Helmet title={props.title} />
      <MarkdownPage data={props} />
    </Layout>
  )
}
export default Blog
