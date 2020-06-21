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
  const { tag } = pageContext
  const tagHeader = `Post${totalCount === 1 ? "" : "s"} tagged with `
  return (
    <Layout>
      <SEO title={`Post${totalCount === 1 ? "" : "s"} tagged with ${tag}`}></SEO>
      <h2 className={`title`}>
        {tagHeader}
        <u>{`${tag}`}</u>
      </h2>
      <ul className={`posts`}>
        <PostList posts={edges} mainListing={false} />
      </ul>
    </Layout>
  )
}
export default tagPage
export const query = graphql`
  query($tag: String, $dev: MarkdownRemarkFieldsFilterInput) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } }, fields: $dev }
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
export const frontmatterfragment = graphql`
  fragment FrontmatterFragmentBlog on MarkdownRemark {
    frontmatter {
      title
      date(formatString: "ddd, Do MMMM YYYY")
      tags
      thumbnail {
        childImageSharp {
          fluid(maxWidth: 150, srcSetBreakpoints: [50,100,150]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
