import * as React from 'react'
import styled from 'styled-components'

import { Shell } from '../layout/Shell'

const LogoContainer = styled.div`
  h1 {
    font-size: 5rem;
    margin: 0;
    color: var(--colour-teal-blue);
    line-height: 4rem;
  }
  
  h2 {
    font-size: 1.875rem;
    font-weight: 500;
    color: var(--colour-blue-munsell);
    margin-top: 20px;
  }
`

export default function IndexPage() {
  return (
    <Shell>
      <LogoContainer>
        <h1>Gray Pegg</h1>
        <h2>web developer & consultant</h2>
      </LogoContainer>
    </Shell>
  )
}