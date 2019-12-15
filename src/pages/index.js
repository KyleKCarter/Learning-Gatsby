import React from "react"
import './styles/index.scss'


//pages
// import Blog from './blog';
// import About from './about';
// import Contact from './contact';
// import Projects from './projects';

//components
import Layout from "../components/layout/layout"
// import Menu from '../components/menu/menu';
// import Footer from '../components/footer/footer';

const IndexPage = () => {
  return (
    <Layout>
        {/* <Menu /> */}
      <div className='landing_container'>
        <h1>Learning Gatsby</h1>
        <h2>I am new to gatsby and excited to learn.</h2>
      </div>
      {/* <div className='blog_container'>
          <Blog />
      </div>
      <div className='about_container'>
          <About />
      </div>
      <div className='projects_container'>
          <Projects />
      </div>
      <div className='contact_container'>
          <Contact />
      </div>
      <Footer /> */}
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
