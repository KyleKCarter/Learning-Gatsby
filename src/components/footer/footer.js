import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer
      style={{
        padding: ".5%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <p>
        Need a flex player? <Link to="/contact">Contact me.</Link>
      </p>
      <p>Created by Kyle Carter, © 2019</p>
    </footer>
  )
}

export default Footer