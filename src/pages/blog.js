import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "../components/modules/posts.scss"
import PostList from "../components/PostList"
import SEO from "../components/SEO"

export const data = graphql`
  query($dev: MarkdownRemarkFieldsFilterInput) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
      filter: { fields: $dev }
    ) {
      edges {
        node {
          id
          ...FrontmatterFragmentBlog
          fields {
            slug
          }
        }
      }
    }
  }
`
const BlogPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data
  return (
    <Layout>
      <SEO title={`My Articles `} />
      <PostList posts={edges} mainListing={true} />
    </Layout>
  )
}
export default BlogPage
