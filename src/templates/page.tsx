import * as React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import { Shell } from '../layout/Shell'
import { SEO } from '../components/seo'
import { Post } from '../components/post'

export default function PageTemplate(props) {
  return (
    <Shell>
      <SEO title={props.data.mdx.title} />
      <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
    </Shell>
  )
}

export const query = graphql`
  query Page($id: String) {
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