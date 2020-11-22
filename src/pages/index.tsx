import * as React from 'react'
import styled from 'styled-components'

import imgIconEscape from '../assets/images/icon-escape.svg'
import imgIconTwitter from '../assets/images/icon-twitter.svg'
import imgIconWave from '../assets/images/icon-wave.svg'
import imgIconRails from '../assets/images/icon-rails.svg'
import imgIconInfo from '../assets/images/icon-info.svg'

import { Shell } from '../layout/Shell'
import { SEO } from '../components/seo'
import { Bucket } from '../components/bucket'

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

const BucketsContainer = styled.div`
  margin: var(--grid-gutter-width) 0;
  --grid-column-count: 5;

  @media(max-width: 947px) and (min-width: 499px) {
    --grid-column-count: 3;
    grid-template-rows: repeat(2, auto);
    
    *:nth-child(1) { grid-column: span 2; }
  }

  @media(max-width: 500px) {
    --grid-column-count: 1;
    grid-template-rows: repeat(5, 64px);
    overflow: hidden;s
  }
`

export default function IndexPage() {
  return (
    <Shell>
      <SEO title="Gray Pegg" />
      <LogoContainer>
        <h1>Gray Pegg</h1>
        <h2>web developer & consultant</h2>
      </LogoContainer>
      
      <BucketsContainer className="grid">
        <Bucket
          title="Latest"
          description="Fuck framework versioning with web components"
          icon={imgIconEscape}
          to="posts" />
        <Bucket
          title="Tweet"
          description="Loving this new graphic I can use. Always loved heraldry so having my own..."
          icon={imgIconTwitter}
          to="posts" />
        <Bucket
          title="Myself"
          description="Web developer based in Toronto available for side TS/JS consulting work."
          icon={imgIconWave}
          to="posts" />
        <Bucket
          title="Big Projects"
          description="This site. Moving."
          icon={imgIconRails}
          to="posts" />
        <Bucket
          title="Email Me"
          description="Ask me anything!"
          icon={imgIconInfo}
          to="posts" />
      </BucketsContainer>
    </Shell>
  )
}