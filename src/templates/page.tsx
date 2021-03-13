import * as React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import { Shell } from '../layout/Shell'
import { SEO } from '../components/seo'
import { Post } from '../components/post'
import { PageQuery } from "../../graphql-types"

interface PageProps {
  data: PageQuery
}

export default function PageTemplate(props: PageProps) {
  return (
    <Shell easyToRead={true}>
      <SEO title={props.data.mdx.frontmatter.title} description={props.data.mdx.excerpt} />
      <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
    </Shell>
  )
}

export const query = graphql`
  query Page($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt(pruneLength: 240)
      frontmatter {
        title
        date
      }
    }
  }
`