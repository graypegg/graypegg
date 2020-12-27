import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { SEO } from '../components/seo'
import { Jumping } from '../components/fun/jumping'
import { Rainbow } from '../components/fun/rainbow'
import { CallOut } from '../components/fun/call-out'
import { Shell } from '../layout/Shell'

import { FourOhFourPageQuery } from '../../graphql-types'

const BigH1 = styled.h1`
  text-align: right;
  font-size: 5rem;
`
const BigH2 = styled.h2`
  text-align: right;
  font-size: 2rem;
  
  small {
    color: var(--colour-secondary);
    font-weight: normal;
    font-size: 0.5em;
    margin-top: 4ch;
    display: inline-block;
    line-height: 1.5ch;
    border: 1px solid currentColor;
    padding: 1ch;
    
    a { color: currentColor; }
  }
`

interface FourOhFourPageProps {
  data: FourOhFourPageQuery
}

export default function FourOhFourPage({data}: FourOhFourPageProps) {
  const accessed = `://${data?.site?.host}:${data?.site?.port}`
  return (
    <Shell>
      <SEO title="Error: Missing page" meta={ [{name: 'robots', content: 'noindex'}] } />
      <BigH1><Rainbow>Sorry.</Rainbow></BigH1>
      <BigH2>
        This URL does not exist <Jumping>yet.</Jumping>
        <br/>
        <small>
          Error 404<br/>
          site built <time dateTime={data?.site?.exactBuildTime}>{ data?.site?.buildTime }</time><br/>
          accessed from <a href={accessed}>{accessed}</a>
        </small>
      </BigH2>
    </Shell>
  )
}

export const query = graphql`
  query FourOhFourPage {
    site {
      buildTime(fromNow: true)
      exactBuildTime: buildTime(fromNow: false)
      host
      port
    }
  }
`
