import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, Link } from "gatsby"

import { Shell } from '../layout/Shell'
import { SEO } from '../components/seo'
import { Post } from '../components/post'
import { Emphasis } from '../components/fun/emphasis'
import { Annotated } from '../components/fun/annotated'

const shortcodes = { Link, Emphasis, Annotated }

export default function PageTemplate(props) {
  return (
    <Shell>
      <SEO title={props.data.mdx.title} />
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </MDXProvider>
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