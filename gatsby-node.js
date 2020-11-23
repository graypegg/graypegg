/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    query {
      posts: allMdx(filter: {fileAbsolutePath: {regex: "\\/posts/"}}) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
      pages: allMdx(filter: {fileAbsolutePath: {regex: "\\/pages/"}}) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Create blog post pages.
  const posts = result.data.posts.edges
  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.frontmatter.path,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/post.tsx`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
  
  // Create blog post pages.
  const pages = result.data.pages.edges
  // you'll call `createPage` for each result
  pages.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.frontmatter.path,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/page.tsx`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}