import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import { PostsPageQuery } from '../../graphql-types'

import { Shell } from '../layout/Shell'
import { SEO } from '../components/seo'

interface PostsPageProps {
  data: PostsPageQuery
}

export default function PostsPage(props: PostsPageProps) {
  return (
    <Shell>
      <SEO title="Blog Posts" />
    </Shell>
  )
}

export const query = graphql`
  query PostsPage {
    allMarkdownRemark(sort: {fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
          excerpt
        }
      }
    }
  }
`