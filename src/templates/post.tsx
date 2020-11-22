import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, Link } from "gatsby"

import { Shell } from '../layout/Shell'
import { Post } from '../components/post'

const shortcodes = { Link }

export default function PageTemplate(props) {
  return (
    <Shell>
      <Post
        title={props.data.mdx.frontmatter.title}
        date={props.data.mdx.frontmatter.date}
        body={
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
          </MDXProvider>
        }
      />
    </Shell>
  )
}

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
      }
    }
  }
`