import * as React from 'react'
import styled from 'styled-components'
import differenceInDays from 'date-fns/differenceInDays'

import imgArms from '../assets/images/arms.svg'

const Container = styled.footer`
  display: flex;
  grid-area: footer;
  margin-top: calc(var(--grid-gutter-width) * 2);
  
  img {
    flex: 0 0 75px;
    margin-right: var(--grid-gutter-width);
  }
  
  small {
    display: block;

    p {
      font-size: 0.7rem;
    }

    a {
      color: var(--colour-secondary);
      text-decoration: none;
    }
    
    a:hover {
      color: var(--colour-secondary-dark);
      text-decoration: underline;
    }
  }
`

export function Footer () {
  return (
    <Container>
      <img role="presentation" alt="A red panda drawn in a heraldric style." width="75" height="110" src={imgArms}/>
      <small>
        <p>
          I’m a <strong><a target="_blank" href="https://www.typescriptlang.org">Typescript</a></strong> developer based out of <strong><a target="_blank" href="https://www.google.com/maps/place/Toronto,+ON/@43.7184038,-79.5181387,11z/data=!3m1!4b1!4m5!3m4!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843">Toronto,</a></strong> and soon to be <strong><a target="_blank" href="https://www.google.com/maps/place/Montréal,+QC/@45.5581968,-73.870383,11z/data=!3m1!4b1!4m5!3m4!1s0x4cc91a541c64b70d:0x654e3138211fefef!8m2!3d45.5016889!4d-73.567256">Montréal.</a></strong> I work for <strong><a target="_blank" href="https://www.landr.com/fr/">Landr</a></strong> as a developer; Typescript and Javascript consulting is my side-hustle, and doodling in illustrator is a hobby. <strong><a target="_blank" href="https://www.redpandanetwork.org/get-involved/international-red-panda-day/">International Red Panda Day</a></strong> is in {differenceInDays(new Date(2021, 8, 19), new Date())} days.
        </p>
        <p>
          Built with <strong><a target="_blank" href="https://www.gatsbyjs.com">Gatsby.</a></strong><br/>
          <em>© {new Date().getFullYear()} Graham Pegg</em>
        </p>
      </small>
    </Container>
  )
}