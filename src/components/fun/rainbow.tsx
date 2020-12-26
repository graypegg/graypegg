import * as React from 'react'
import styled from 'styled-components'
import { Jumping } from './jumping'

const Container = styled.em`
  font-style: normal;
  display: inline-block;
  animation: 4s linear infinite running rainbow;
  color: transparent;
  background: var(--gradient-top-left-reversing);
  background-size: 200% 100%;
  background-clip: text;
  -webkit-background-clip: text; // Safari support.

  @keyframes rainbow {
    0%{background-position:0% 50%}
    100%{background-position:200% 50%}
  }
`

export function Rainbow (props: React.PropsWithChildren<{}>) {
  return <Container>
    {props.children}
  </Container>
}