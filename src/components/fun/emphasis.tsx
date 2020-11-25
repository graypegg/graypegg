import * as React from 'react'
import styled from 'styled-components'

const Container = styled.em`
  font-style: normal;
  display: inline-block;
  position: relative;
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin-left: 0.2em;
  margin-right: 0.2em;
  
  &>div {
    position: absolute;
    top: 50%;
    height: 0.1em;
    width: 0.35em;
    background: currentColor;
    
    &:nth-child(1) { transform: translateY(-0.35em) rotate(45deg); }
    &:nth-child(3) { transform: translateY(0.35em) rotate(-45deg); }
    &:nth-child(1), &:nth-child(2), &:nth-child(3) { left: 0; }

    &:nth-child(5) { transform: translateY(-0.35em) rotate(135deg); }
    &:nth-child(7) { transform: translateY(0.35em) rotate(-135deg); }
    &:nth-child(5), &:nth-child(6), &:nth-child(7) { right: 0; }
  }
`

export function Emphasis (props: React.PropsWithChildren<{}>) {
  return <Container>
    <div role="presentation" />
    <div role="presentation" />
    <div role="presentation" />
    <span>{props.children}</span>
    <div role="presentation" />
    <div role="presentation" />
    <div role="presentation" />
  </Container>;
}