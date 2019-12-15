import React from "react";

import Layout from "../components/layout/layout"

const ContactPage = () => {
  return (
    <Layout>
      <div>
        <h1>Contact Information</h1>
        <p>Phone: 1234567890</p>
        <p>Email: example@gmail.com</p>
        <p><a href='https://twitter.com/KyleKCarter' target='_tab'>Twitter</a></p>
        <p><a href='https://www.linkedin.com/in/kyle-carter-909075129/' target='_tab'>LinkedIn</a></p>
        <p><a href='https://github.com/KyleKCarter' target='_tab'>GitHub</a></p>
      </div>
    </Layout>
  )
}

export default ContactPage
