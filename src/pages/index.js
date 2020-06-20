import React from "react"
import Layout from "../components/layout"
import "../styles/index.scss"
import SEO from "../components/SEO"
const Indexpage = () => {
  return (
    <Layout>
      <SEO title="Home | Aman" />
      <div>
        <h1>Hi, I am Aman</h1>
        <p>
          I'm web developer specializing in modern javascript. I like to
          <br /> make things from scratch, contribute to open source, and write <br />
          about latest development in web technology.
        </p>
      </div>
    </Layout>
  )
}

export default Indexpage
