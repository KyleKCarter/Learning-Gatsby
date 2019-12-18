import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
  `)
  return (
    <footer
      style={{
        padding: ".5%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      className={footerStyles.footer}
    >
      <p>
        Need a flex player? <Link to="/contact">Contact me.</Link>
      </p>
      <p>Created by {data.site.siteMetadata.author}, © 2019</p>
    </footer>
  )
}

export default Footer