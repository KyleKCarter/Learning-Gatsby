import React from "react";
import {Link} from 'gatsby';

import Layout from "../components/layout/layout"

const AboutPage = () => {
  return (
    <Layout>
      <div>
        <h1>About Me</h1>
        <p>Full Stack Web Developer</p>
        <Link to='/contact'><p>Contact Me</p></Link>
      </div>
    </Layout>
  )
}

export default AboutPage
