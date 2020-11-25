import * as React from 'react'
import styled from 'styled-components'

import { Icon, IconRef } from '../icon'

const Container = styled.strong`
  display: inline-block;
  position: relative;
  margin-left: 0.2em;
  margin-right: 0.2em;
  
  img {
    display: inline;
    height: 0.75em;
    margin-right: 0.1em;
  }
`

interface AnnotatedProps {
  icon: IconRef;
}

export function Annotated (props: React.PropsWithChildren<AnnotatedProps>) {
  return <Container>
    <Icon icon={props.icon} />
    {props.children}
  </Container>;
}