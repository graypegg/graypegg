import * as React from 'react'
import styled from 'styled-components'

interface BucketProps {
  title: string
  description: string
  to: string
  icon?: string
}

const Container = styled.a`
  --line-height: 1.15rem;

  display: block;
  text-decoration: none;
  color: #FFFFFF;
  padding: 8px 7px;
  line-height: var(--line-height);
  mix-blend-mode: multiply;
  ${ (props: Pick<BucketProps, 'icon'>) => `
    background-image: url(${ props.icon });
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    background-position: right 10px bottom 10px;
    background-size: 60px;
    
    @media (max-width: 500px) {
      background-position: right 10px top -20px;
      background-size: 40%;
    }
  ` }

  h3 {
    font-size: 0.8rem;
    font-family: var(--font-body);
    margin: 0;
    font-weight: 500;
  }
  
  p {
    font-size: 0.8rem;
    font-family: var(--font-body);
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
    <Container icon={props.icon}>
      <h3>{ props.title }:</h3>
      <p>{ props.description }</p>
    </Container>
  )
}