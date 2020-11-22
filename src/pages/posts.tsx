import * as React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'

import { PostsPageQuery } from '../../graphql-types'

import { Shell } from '../layout/Shell'
import { SEO } from '../components/seo'
import { Post } from '../components/post'

interface PostsPageProps {
  data: PostsPageQuery
}

export default function PostsPage({ data }: PostsPageProps) {
  const posts = data.allMdx.edges.map(post => post.node)

  return (
    <Shell>
      <SEO title="Blog Posts" />
      
      <h1>Posts</h1>
      
      {
        posts.map(post => (
          <Link to={post.frontmatter.path}>
            <Post title={post.frontmatter.title} date={post.frontmatter.date} body={
              <p>
                {post.excerpt}
              </p>
            } />
          </Link>
        ))
      }
    </Shell>
  )
}

export const query = graphql`
  query PostsPage {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {fileAbsolutePath: {regex: "\\/posts/"}}) {
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