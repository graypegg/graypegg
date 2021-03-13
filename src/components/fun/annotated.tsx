import * as React from 'react'
import styled from 'styled-components'

import { SIZE } from '../../types'

import { Icon } from '../icon'

const Container = styled.strong`
  display: inline-block;
  position: relative;
  margin-left: 0.2em;
  margin-right: 0.2em;
  
  svg {
    display: inline;
    ${ (props: AnnotatedProps & { size: SIZE }) => {
      switch (props.size) {
        case SIZE.REGULAR: return `
          max-height: 1em;
          max-width: 1em;
          margin-right: 0.3em;
        `
        case SIZE.LARGE: return `
          height: 1.2em;
          width: 1em;
          margin-right: 0.2em;
        `
        case SIZE.EXTRALARGE: return `
          height: 2em;
          width: 2em;
          margin-right: 0.15em;
        `
      }
  }}
    margin-bottom: 0.2em;
    vertical-align: middle;
    
    ${ (props: AnnotatedProps & { size: SIZE }) => {
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
  size?: SIZE;
}

export function Annotated (props: React.PropsWithChildren<AnnotatedProps>) {
  const propsForContainer = {
    ...props,
    size: props.size ?? SIZE.REGULAR
  }
  return <Container className="icon" {...propsForContainer}>
    <Icon icon={props.icon} />
    {props.children}
  </Container>;
}