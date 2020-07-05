import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/layout"
import "../components/modules/posts.scss"
import { graphql } from "gatsby"
import PostList from "../components/PostList"

const tagPage = ({ data, pageContext }) => {
  const {
    allMarkdownRemark: { edges, totalCount },
  } = data
  const { category } = pageContext
  const tagHeader = `Post${totalCount === 1 ? "" : "s"} categorized with `
  return (
    <Layout>
      <SEO title={`Post${totalCount === 1 ? "" : "s"} categorized with ${category}`}></SEO>
      <h2 className={`title`}>
        {tagHeader}
        <u>{`${category}`}</u>
      </h2>
      <ul className={`posts`}>
        <PostList posts={edges} mainListing={false} />
      </ul>
    </Layout>
  )
}
export default tagPage
export const query = graphql`
  query($category: String, $dev: MarkdownRemarkFieldsFilterInput) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } }, fields: $dev }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          ...FrontmatterFragmentBlog
        }
      }
    }
  }
`