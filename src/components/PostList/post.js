import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Post = ({ data }) => {
  const {
    id,
    frontmatter: { title, date, thumbnail },
    fields: { slug },
  } = data
  return (
    <li className={`post`} key={id}>
      <Link to={`/blog/${slug}`} className={`content_wrapper`}>
        {thumbnail ? <Img fluid={thumbnail.childImageSharp.fluid} alt="Icon logo"/> : null}
        <div className={`content`}>
          <h3>{title}</h3>
          <p>
            <span className={`date`}>{date}</span>
          </p>
        </div>
      </Link>
    </li>
  )
}
export default Post
