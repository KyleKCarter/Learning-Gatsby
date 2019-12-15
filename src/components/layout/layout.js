import React from "react"
import layoutStyles from "./layout.module.scss"

//components
import Menu from "./../menu/menu"
import Footer from "./../footer/footer"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Menu />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
