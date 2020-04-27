import React from 'react'
import MarkdownHeader from './markdownHeader'
import MarkdownBody from './markdownBody'

const MarkdownPage = ({ data }) => {
    const { data: { markdownRemark: { frontmatter, html, fields: { slug } } } } = data
    return (
        <>
            <MarkdownHeader data={frontmatter} slug={slug} />
            <MarkdownBody html={html} />
        </>)
}
export default MarkdownPage