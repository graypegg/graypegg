import * as React from 'react'
import '../styles/variables.css'
import '../styles/grid.css'
import '../styles/globals.css'
import styled from 'styled-components'

import imgBackground from '../assets/images/background.svg'

import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import { MDXProviderWithShortcodes } from '../mdx'

interface ShellProps {
  easyToRead?: boolean
}

const Container = styled.div`
  ${
    (props: ShellProps) =>
      props.easyToRead
      ? ''
      : `background: url(${imgBackground}) no-repeat right -25vw top 10vh / 100vw;`
  }
`

const Content = styled.div`
  min-height: 100vh;
  padding: 40px 20px;
  
  main {
    grid-area: content;
  }
  
  @media (max-width: 500px) {
    padding-top: 12px;
    padding-bottom: 5px;
  }
`

export function Shell (props: React.PropsWithChildren<ShellProps>) {
  return (
    <MDXProviderWithShortcodes>
      <Container {...props}>
        <Content
          className="grid grid--base"
          itemScope
          itemType="https://schema.org/Organization">
          <Sidebar />
          <main>
            {props.children}
          </main>
          <Footer />
        </Content>
      </Container>
    </MDXProviderWithShortcodes>
  )
}