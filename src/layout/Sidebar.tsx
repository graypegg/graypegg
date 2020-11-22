import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import imgLogo from '../assets/images/logo.svg'

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
`

export function Sidebar (props: React.PropsWithChildren<{}>) {
  return (
    <Container>
      <Link to="/">
        <img width="78" height="60" src={imgLogo} />
      </Link>
      <nav>
        <ul>
          <li><Link to="posts">/posts</Link></li>
          <li><Link to="me">/me</Link></li>
          <li><Link to="projects">/projects</Link></li>
          <li><Link to="posts">github</Link></li>
        </ul>
      </nav>
    </Container>
  )
}