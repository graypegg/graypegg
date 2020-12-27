import * as React from 'react'
import styled from 'styled-components'

const Container = styled.em`
  --speed: 1.5s;

  font-style: normal;
  
  & > span {
    display: inline-block;
    
    &.space { width: 0.4ch; }
  }

  & > span:nth-child(5n) { animation: var(--speed) linear 0s infinite running jump; }
  & > span:nth-child(5n + 1) { animation: var(--speed) linear calc(var(--speed) * 0.2) infinite running jump; }
  & > span:nth-child(5n + 2) { animation: var(--speed) linear calc(var(--speed) * 0.4) infinite running jump; }
  & > span:nth-child(5n + 3) { animation: var(--speed) linear calc(var(--speed) * 0.6) infinite running jump; }
  & > span:nth-child(5n + 4) { animation: var(--speed) linear calc(var(--speed) * 0.8) infinite running jump; }
  & > span:nth-child(5n + 5) { animation: var(--speed) linear var(--speed) infinite running jump; }
  
  @keyframes jump {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(4%);
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(-4%);
    }
    100% {
      transform: translateY(0);
    }
  }
`

interface JumpingProps {
  children: string
}

export function Jumping (props: JumpingProps) {
  const chars = props.children.split('')

  return <Container>
    {chars.map((char, index) => (
      <span key={`${char}${index}`} className={char === ' ' ? 'space' : ''}>{char}</span>
    ))}
  </Container>
}