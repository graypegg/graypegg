import * as React from 'react'
import styled from 'styled-components'
import { graphql, Link, StaticQuery } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

import imgLogo from '../assets/images/logo.svg'
import { SidebarQuery } from '../../graphql-types'

const Container = styled.div`
  color: var(--color-primary);
  
  nav {
    font-family: var(--font-body);
    font-size: 1.25rem;

    ul {
      list-style-type: none;
      margin: 0;

      a {
        color: currentColor;
        text-decoration: none;
      }
    }
  }
  
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    
    &>a {
      order: 1;
      
      img {
        margin: 0;
      }
    }

    nav {
      margin: 0 -20px 25px;
      padding: 5px 20px;
      order: 0;

      ul {
        display: flex;
        justify-content: space-between;
        align-content: center;
        
        li {
          margin: 0;
          font-size: 1.1rem;
        }
      }
    }
  }
`

export function Sidebar (props: React.PropsWithChildren<{}>) {
  return (
    <StaticQuery
      query={
        graphql`
          query Sidebar {
            allFile(filter: {relativePath: {in: "logo.svg"}}) {
              edges {
                node {
                  publicURL
                }
              }
            }
            allMdx(sort: {fields: frontmatter___path, order: ASC}, filter: {frontmatter: {draft: {eq: false}, path: {regex: "/\\/[a-z]+\\/?$/"}}}) {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
            site {
              siteMetadata {
                siteUrl
                title
              }
            }
          }
        `
      }
      render={(data: SidebarQuery) => {
        const site = data?.site?.siteMetadata
        const logo =
          (site.siteUrl ?? '') +
          data.allFile.edges?.[0].node?.publicURL ?? ''
        const pages = data.allMdx.edges
        
        return (
          <Container>
            <Link to="/">
              <img width="78" height="60" src={imgLogo} alt="Gray Pegg Media" />
              <meta itemProp="logo" content={logo} />
              <meta itemProp="name" content={site.title ?? ''} />
              <meta itemProp="url" content={site.siteUrl ?? ''} />
            </Link>
            <nav>
              <ul>
                { pages.map(page => (
                  <li key={page.node?.frontmatter?.path}>
                    <Link to={page.node?.frontmatter?.path}>
                      {page.node?.frontmatter?.path?.replace(/\/$/, '')}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to='/posts'>
                    /posts
                  </Link>
                </li>
                <li><OutboundLink href="https://github.com/graypegg">github</OutboundLink></li>
              </ul>
            </nav>
          </Container>
        )
      }} />
  )
}