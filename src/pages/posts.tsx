import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import { PostsPageQuery } from '../../graphql-types'

import { Shell } from '../layout/Shell'
import { SEO } from '../components/seo'
import { Post } from '../components/post'

interface PostsPageProps {
  data: PostsPageQuery
}

export default function PostsPage({ data }: PostsPageProps) {
  const posts = data.allMarkdownRemark.edges.map(post => post.node)

  return (
    <Shell>
      <SEO title="Blog Posts" />
      
      <h1>Posts</h1>
      
      {
        posts.map(post => (
          <Post title={post.frontmatter.title} date={post.frontmatter.date} html={
            `<p>${post.excerpt}</p>`
          } />
        ))
      }
    </Shell>
  )
}

export const query = graphql`
  query PostsPage {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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