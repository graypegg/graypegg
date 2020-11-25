import * as React from 'react'
import styled from 'styled-components'

import { Icon } from '../icon'

const Container = styled.strong`
  display: inline-block;
  position: relative;
  margin-left: 0.2em;
  margin-right: 0.2em;
  
  svg {
    display: inline;
    height: 0.75em;
    width: 0.75em;
    margin-right: 0.1em;
    
    ${ (props: AnnotatedProps) => {
      switch(props.icon) {
        case 'hi': return `use { color: var(--colour-teal-blue); }`
        case 'info': return `
          margin-right: 0.3em;
          use { color: var(--colour-blue-munsell); }
        `
        default: return ''
      }
    }}
  }
`

interface AnnotatedProps {
  icon: string;
}

export function Annotated (props: React.PropsWithChildren<AnnotatedProps>) {
  return <Container {...props}>
    <Icon icon={props.icon} />
    {props.children}
  </Container>;
}