import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, Link } from "gatsby"

import { BlogPostQuery } from '../../graphql-types'

import { Shell } from '../layout/Shell'
import { SEO } from '../components/seo'
import { Post } from '../components/post'
import { Emphasis } from '../components/fun/emphasis'
import { Annotated } from '../components/fun/annotated'

const shortcodes = { Link, Emphasis, Annotated }

interface PageTemplateProps {
  data: BlogPostQuery
}

export default function PageTemplate(props: PageTemplateProps) {
  const iconSafe = props.data.mdx.frontmatter.icon ?? 'coffee'
  return (
    <Shell>
      <SEO title={props.data.mdx.frontmatter.title} description={props.data.mdx.excerpt} />
      <Post
        title={props.data.mdx.frontmatter.title}
        date={props.data.mdx.frontmatter.date}
        icon={iconSafe}
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
      excerpt
      frontmatter {
        title
        date
        icon
      }
    }
  }
`