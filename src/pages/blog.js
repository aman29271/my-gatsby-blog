import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import "../components/modules/posts.scss"
import Helmet from "react-helmet"
import config from "../../data/siteConfig"
import PostList from "../components/PostList"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
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
  `)
  const {
    allMarkdownRemark: { edges },
  } = data
  return (
    <Layout>
      <Helmet title={`Articles - ${config.userName}`} />
      <PostList posts={edges} mainListing={true} />
    </Layout>
  )
}
export default BlogPage
