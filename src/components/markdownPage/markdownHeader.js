import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import SEO from "../SEO"
import {repository} from '../../../data/siteConfig'

const MarkdownHeader = ({ data, slug }) => {
  const { title, date, tags, thumbnail } = data
  const gitlink = `${repository}/blob/master/content/posts/`
  return (
    <>
      <SEO title={title} />
      <div className="head_container">
        {thumbnail ? <Img fluid={thumbnail.childImageSharp.fluid} alt="Icon Logo" /> : null}
        <div className={`head_wrapper`}>
          <h2 className={`head_title`}>{title}</h2>
          <p>
            <span className={`date`}>{date}</span>
            <span className="gitlink">
              <a
                className="link"
                rel="noopener noreferrer"
                target="_blank"
                href={`${gitlink}/${slug}.md`}
              >
                Edit on Github
              </a>
            </span>
            {tags.map((tag, index) => {
              return (
                <Link className={`link`} to={`/tags/${tag}`} key={index}>
                  <span className={`tag`}>{tag}</span>
                </Link>
              )
            })}
          </p>
        </div>
      </div>
    </>
  )
}
export default MarkdownHeader
