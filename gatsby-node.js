const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("./src/templates/blog.posts.js")
  return graphql(`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
            path: node.frontmatter.path,
            component: postTemplate
        })            
    })
  })
}

// module.exports.onCreateNode = ({node, actions}) => {
//     const { createNodeField } = actions

//     if(node.internal.type === 'MarkDownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md')

//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }

// }
