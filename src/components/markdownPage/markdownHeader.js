import React from 'react'
import Img from "gatsby-image"
import { Link } from 'gatsby'

const MarkdownHeader = ({ data, slug }) => {
    const { title, date, tags, thumbnail } = data;
    const gitlink =
        "https://github.com/aman29271/gatsby-bootcamp-project/blob/master/content/posts/"
    return (
        <div className="head_container">
            {thumbnail ? <Img fixed={thumbnail.childImageSharp.fixed} /> : null}
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
    )
}
export default MarkdownHeader