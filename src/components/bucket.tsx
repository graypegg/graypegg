import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import * as React from 'react'
import styled from 'styled-components'
import { Icon } from './icon'

interface BucketProps {
  title: string
  description: string
  to: string
  icon?: string
  itemProp?: string
}

const Container = styled('div')`
  --line-height: 1.15rem;

  display: block;
  text-decoration: none;
  color: #FFFFFF;
  line-height: var(--line-height);
  mix-blend-mode: multiply;
  cursor: pointer;
  transition: transform 0.1s ease-out;
  user-select: none;
  position: relative;
  overflow: hidden;
  
  a {
    display: block;
    height: 100%;
    width: 100%;
    padding: 8px 7px;
    color: currentColor;
    text-decoration: none;
  }

  &:hover {
    transform: scale(0.96);
    color: #fff;
  }

  &:active {
    transform: scale(0.94);
  }

  svg {
    width: 60px;
    height: 60px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    mix-blend-mode: multiply;
    z-index: -1;
    margin-bottom: 0;
    opacity: 0.4;
    
    @media (max-width: 500px) {
      transform: translateY(40%);
      right: -10px;
      width: 30vw;
      height: 30vw;
    }
  }

  h3 {
    font-size: 0.8rem;
    margin: 0;
    font-weight: 500;
  }
  
  p {
    font-size: 0.75rem;
    font-weight: 200;
    margin-bottom: 0;
    overflow: hidden;
    max-height: calc(var(--line-height) * 5);
  }
  
  &:nth-child(1n) { background-color: var(--colour-teal-blue); }
  &:nth-child(2n) { background-color: var(--colour-blue-munsell); }
  &:nth-child(3n) { background-color: var(--colour-firebrick); }
  &:nth-child(4n) { background-color: var(--colour-sandy-brown); }
  &:nth-child(5n) {
    background-color: var(--colour-green-yellow-crayola);
    color: #333333;
  }
`

export function Bucket (props: BucketProps) {
  if (props.to[0] !== '/') {
    return (
      <Container>
        <OutboundLink target="_blank" href={props.to}>
          <h3>{ props.title }:</h3>
    
          { props.itemProp
            ? <p itemProp={props.itemProp}>{ props.description }</p>
            : <p>{ props.description }</p>
          }
          <Icon icon={props.icon} />
        </OutboundLink>
      </Container>
    )
  }

  return (
    <Container>
      <Link to={props.to}>
        <h3>{ props.title }:</h3>
  
        { props.itemProp
          ? <p itemProp={props.itemProp}>{ props.description }</p>
          : <p>{ props.description }</p>
        }
        <Icon icon={props.icon} />
      </Link>
    </Container>
  )
}