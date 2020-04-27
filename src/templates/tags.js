import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import '../components/modules/posts.scss'
import { graphql } from 'gatsby'
import PostList from '../components/PostList'

const tagPage = ({ data, pageContext }) => {
    const { allMarkdownRemark: { edges, totalCount } } = data;
    const { tag } = pageContext
    const tagHeader = `Post${
        totalCount === 1 ? "" : "s"
        } tagged with `
    return (
        <Layout>
            <Helmet title={tagHeader}></Helmet>
            <h2 className={`title`}>{tagHeader}<u>{`${tag}`}</u></h2>
            <ul className={`posts`}>
                <PostList posts={edges} mainListing={false} />
            </ul>
        </Layout>
    )
}
export default tagPage
export const query = graphql`
query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fields: { draft: { eq: false } }
      }
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
fragment FrontmatterFragmentBlog on MarkdownRemark{
    frontmatter{
        title
        date(formatString:"ddd, Do MMMM YYYY")
        tags
        thumbnail{
            childImageSharp{
                fixed(height:150 , width:150){
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
}
`