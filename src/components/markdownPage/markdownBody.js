import React from 'react'

const MarkdownBody = ({ html }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
    )
}
export default MarkdownBody