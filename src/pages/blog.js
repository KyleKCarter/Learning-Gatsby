import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout/layout"

import blogStyles from './styles/blog.module.scss'

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
      <Link className={blogStyles.posts} to={post.node.frontmatter.path}>
        <div className={blogStyles.post}>
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
