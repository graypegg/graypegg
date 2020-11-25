import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import imgIconEscape from '../assets/images/icon-escape.svg'
import imgIconTwitter from '../assets/images/icon-twitter.svg'
import imgIconWave from '../assets/images/icon-wave.svg'
import imgIconRails from '../assets/images/icon-rails.svg'
import imgIconInfo from '../assets/images/icon-info.svg'

import { Shell } from '../layout/Shell'
import { SEO } from '../components/seo'
import { Bucket } from '../components/bucket'
import { Post } from '../components/post'
import { Emphasis } from '../components/fun/emphasis'

import { LandingPageQuery } from '../../graphql-types'

const LogoContainer = styled.div`
  h1 {
    font-size: 5rem;
    margin: 0;
    color: var(--colour-teal-blue);
    line-height: 4rem;
  }
  
  h2 {
    font-size: 1.875rem;
    font-weight: 500;
    color: var(--colour-blue-munsell);
    margin-top: 20px;
    
    em {
      font-size: 0.8rem;
      transform: translateY(-12px);
      color: var(--colour-primary);
      margin-left: 10px;
    }
  }
`

const BucketsContainer = styled.div`
  margin: var(--grid-gutter-width) 0;
  --grid-column-count: 5;

  @media(max-width: 947px) and (min-width: 499px) {
    --grid-column-count: 3;
    grid-template-rows: repeat(2, auto);
    
    &>*:nth-child(1) { grid-column: span 2; }
    
    &>* {
      min-height: calc(var(--grid-gutter-width) * 4);
    }
  }

  @media(max-width: 500px) {
    --grid-column-count: 1;
    grid-template-rows: repeat(5, 64px);
    overflow: hidden;s
  }
`

interface IndexPageProps {
  data: LandingPageQuery
}

export default function IndexPage({ data }: IndexPageProps) {
  const latestPost = data.allMdx.edges[0]
  const nowPost = data.mdx
  return (
    <Shell>
      <SEO title="Gray Pegg" />
      <LogoContainer>
        <h1>Gray Pegg</h1>
        <h2>web developer & consultant<Emphasis>hire me!</Emphasis></h2>
      </LogoContainer>
      
      <BucketsContainer className="grid">
        { latestPost && latestPost.node.frontmatter
          ? <Bucket
              title="Latest"
              description={
                latestPost.node.frontmatter.title
              }
              icon={imgIconEscape}
              to={latestPost.node.frontmatter.path} />
            : null
        }
        <Bucket
          title="Twitter"
          description="I've been known to use it."
          icon={imgIconTwitter}
          to="http://twitter.com/graypegg" />
        <Bucket
          title="Myself"
          description="Web developer based in Toronto available for side TS/JS consulting work."
          icon={imgIconWave}
          to="/me" />
        <Bucket
          title="Big Projects"
          description="This site. Moving."
          icon={imgIconRails}
          to="/projects" />
        <Bucket
          title="Email Me"
          description="Ask me anything!"
          icon={imgIconInfo}
          to="mailto://graham@toi.sh" />
      </BucketsContainer>
      
      <Post title='now!' date={nowPost?.frontmatter?.date} body={
        <MDXRenderer>{nowPost?.body}</MDXRenderer>
      } />
    </Shell>
  )
}

export const query = graphql`
  query LandingPage {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {fileAbsolutePath: {regex: "\\/posts/"}, frontmatter: {draft: {eq: false}}}, limit: 1) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
    mdx(fileAbsolutePath: {regex: "\\/snips/"}, frontmatter: {title: {eq: "now!"}}) {
      body
      frontmatter {
        date
      }
    }
  }
`