import React from "react"
import menuStyles from './menu.module.scss';
import { Link, graphql, useStaticQuery } from "gatsby"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <nav>
      <ul className={menuStyles.menu}>
        <Link className={menuStyles.nav} activeClassName={menuStyles.activeMenuItem} to="/">
          <li>{data.site.siteMetadata.title}</li>
        </Link>
        <Link className={menuStyles.nav} activeClassName={menuStyles.activeMenuItem} to="/blog">
          <li>Blog</li>
        </Link>
        <Link className={menuStyles.nav} activeClassName={menuStyles.activeMenuItem} to="/about">
          <li>About</li>
        </Link>
        <Link className={menuStyles.nav} activeClassName={menuStyles.activeMenuItem} to="/career">
          <li>Career</li>
        </Link>
        <Link className={menuStyles.nav} activeClassName={menuStyles.activeMenuItem} to="/projects">
          <li>Projects</li>
        </Link>
        <Link className={menuStyles.nav} activeClassName={menuStyles.activeMenuItem} to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Menu
