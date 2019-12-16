import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              path
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  const mappedData = data.allMarkdownRemark.edges.map(post => {
    return (
      <Link style={{
        textDecoration: "none",
        color: "#666666"
      }} to={post.node.frontmatter.path}>
        <div
          style={{
            marginBottom: "2%",
          }}
        >
          <h4>{post.node.frontmatter.title}</h4>
          <p>{post.node.frontmatter.date}</p>
          <hr />
        </div>
      </Link>
    )
  })

  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        <div>{mappedData}</div>
      </div>
    </Layout>
  )
}

export default BlogPage
