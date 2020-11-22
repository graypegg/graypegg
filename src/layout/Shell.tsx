import * as React from 'react'
import 'normalize.css'
import '../styles/variables.css'
import '../styles/grid.css'
import styled from 'styled-components'

import imgBackground from '../assets/images/background.svg'

import { Sidebar } from './Sidebar'

const Container = styled.div`
  background: url(${imgBackground}) no-repeat right -25vw top 10vh / 100vw;
`

const Content = styled.div`
  min-height: 100vh;
  padding: 40px 20px;
  
  main {
    grid-area: content;
  }
`

export function Shell (props: React.PropsWithChildren<{}>) {
  return (
    <Container>
      <Content className="grid">
        <Sidebar />
        <main>
          {props.children}
        </main>
      </Content>
    </Container>
  )
}