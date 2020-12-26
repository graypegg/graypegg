import * as React from 'react'
import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

const Container = styled.em`
  --duration: 1750ms;

  font-style: normal;
  display: inline-block;
  position: relative;
  
  :after {
    content: '';
    display: block;
    height: 1.5ch;
    width: 0;
    background-color: var( --colour-green-yellow-crayola);
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
    animation: calc(var(--duration) - 750ms) ease-out 1 normal forwards callout;
    
    :after {
      animation: 750ms calc(var(--duration) - 750ms) var(--ease-out-expo) 1 normal forwards highlight;
    }
  }
  
  @keyframes callout {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.2);
    }
    30% { transform: scale(1.2) rotate(${(Math.random() * 10) + 2}deg); }
    35% { transform: scale(1.2) rotate(${(Math.random() * -10) - 2}deg); }
    40% { transform: scale(1.2) rotate(${(Math.random() * 10) + 2}deg); }
    45% { transform: scale(1.2) rotate(${(Math.random() * -10) - 2}deg); }
    50% { transform: scale(1.2) rotate(${(Math.random() * 10) + 2}deg); }
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
    rootMargin: '-90px',
    triggerOnce: props.triggerOnce ?? false
  });
  return <span>
    <Container ref={ref} className={inView ? 'showing' : 'hidden'}>
      {props.children}
    </Container>
  </span>
}