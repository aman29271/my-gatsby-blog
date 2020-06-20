import React from "react"
import Post from "./post"

const PostList = ({ posts, mainListing }) => {
  return (
    <div>
      {mainListing && <h2>Articles</h2>}
      {/* <p>Post will appear Here later on.</p> */}
      <ul className={`posts`}>
        {posts.map(({ node },index) => (
          <Post data={node} key={index}/>
        ))}
      </ul>
    </div>
  )
}
export default PostList
