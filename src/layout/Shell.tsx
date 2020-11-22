import * as React from 'react'
import 'normalize.css'
import '../styles/variables.css'
import '../styles/grid.css'
import styled from 'styled-components'
import { Sidebar } from './Sidebar'

const Container = styled.div`
  min-height: 100vh;
  padding: 40px 20px;
  
  main {
    grid-area: content;
  }
`

export function Shell (props: React.PropsWithChildren<{}>) {
  return (
    <Container className="grid">
      <Sidebar />
      <main>
        {props.children}
      </main>
    </Container>
  )
}