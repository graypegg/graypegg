import * as React from 'react'
import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

const Container = styled.em`
  --delay: 1000ms;
  --duration: 1750ms;

  font-style: normal;
  display: inline-block;
  position: relative;
  
  :after {
    content: '';
    display: block;
    height: 1.5ch;
    width: 0;
    background-color: var(--colour-green-yellow-crayola);
    position: absolute;
    top: 50%;
    left: -0.5em;
    mix-blend-mode: overlay;
    opacity: 0.6;
    z-index: 999;
    transform: translate(${(Math.random() * 10) - 5}px, -50%) rotate(${(Math.random() * 10) - 5}deg) skew(-${(Math.random() * 10) + 5}deg);
    transform-origin: 0 100%;
  }
  
  &.showing {
    animation: calc(var(--duration) - 750ms) var(--delay) ease-out 1 normal forwards callout;
    
    :after {
      animation: 750ms calc(var(--delay) + var(--duration) - 750ms) var(--ease-out-expo) 1 normal forwards highlight;
    }
  }
  
  @keyframes callout {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.2);
    }
    30% { transform: scale(1.2) rotate(5deg); }
    37% { transform: scale(1.2) rotate(-5deg); }
    44% { transform: scale(1.2) rotate(5deg); }
    51% { transform: scale(1.2) rotate(-5deg); }
    58% { transform: scale(1.2) rotate(0); }
    100% {
      transform: scale(1);
    }
  }
  
  @keyframes highlight {
    0% {
      width: 0
    }
    100% {
      width: calc(100% + 1em);
    }
  }
`

export function CallOut (props: PropsWithChildren<{triggerOnce?: boolean}>) {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: props.triggerOnce ?? false
  });
  return <span>
    <Container ref={ref} className={inView ? 'showing' : 'hidden'}>
      {props.children}
    </Container>
  </span>
}