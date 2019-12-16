import React from "react"
import "./styles/index.scss"

//components
import Layout from "../components/layout/layout"

const IndexPage = () => {
  return (
    <Layout>
      <div className="landing_container">
        <h1>Learning Gatsby</h1>
        <h2>I am new to gatsby and excited to learn.</h2>
      </div>
    </Layout>
  )
}

export default IndexPage

// Goal #1: Create an about page and a contact page

// 1. Create an about page. Include a page title and bio.
// 2. Create a contact page. Include a page title and contact details.
// 3. Test your work.

// Goal #2: Add a couple of links to the site

// 1. On contact page, link to twitter profile or any other social media
// 2. On about page, link to contact page
// 3. Test your work.

// Goal #3: Run another GraphQL query

// 1. Use GraphiQL to fetch the author
// 2. Update the footer component to display the dynamic author value
// 3. Test your work.

// Goal #4: Show list of posts on blog page

// 1. Query the title and date for each post in blog component
// 2. Render an ol on the page
// 3. Render a li with a newsted h2 (title) and p (date) for each post
// - "render array of objects"
// 4. Test your work.
