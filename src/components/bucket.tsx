import { Link } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'
import { Icon, IconRef } from './icon'

interface BucketProps {
  title: string
  description: string
  to: string
  icon?: IconRef
}

const Container = styled(Link)`
  --line-height: 1.15rem;

  display: block;
  text-decoration: none;
  color: #FFFFFF;
  padding: 8px 7px;
  line-height: var(--line-height);
  mix-blend-mode: multiply;
  cursor: pointer;
  transition: transform 0.1s ease-out;
  user-select: none;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(0.96);
    color: #fff;
  }

  &:active {
    transform: scale(0.94);
  }

  &>img {
    width: 60px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    mix-blend-mode: multiply;
    z-index: -1;
    margin-bottom: 0;
    opacity: 0.4;
    
    @media (max-width: 500px) {
      transform: translateY(50%);
      right: -10px;
      width: 60%;
    }
  }

  h3 {
    font-size: 0.8rem;
    margin: 0;
    font-weight: 500;
  }
  
  p {
    font-size: 0.8rem;
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
  return (
    <Container to={props.to}>
      <h3>{ props.title }:</h3>
      <p>{ props.description }</p>
      <Icon icon={props.icon} normalize={true} />
    </Container>
  )
}