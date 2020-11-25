import * as React from 'react'
import styled from 'styled-components'

import OFCheckIcon from '../../assets/images/icons/icon-omnifocus.svg'
import HiIcon from '../../assets/images/icons/icon-hi.svg'
import CoffeeIcon from '../../assets/images/icons/icon-coffee.svg'
import BikeIcon from '../../assets/images/icons/icon-bike.svg'
import TrainIcon from '../../assets/images/icons/icon-train.svg'

const Container = styled.strong`
  display: inline-block;
  position: relative;
  margin-left: 0.2em;
  margin-right: 0.2em;
  
  img {
    display: inline;
    height: 0.75em;
    margin-right: 0.1em;
  }
`

const icons = {
  omnifocus: OFCheckIcon,
  hi: HiIcon,
  coffee: CoffeeIcon,
  bike: BikeIcon,
  train: TrainIcon
}

interface AnnotatedProps {
  icon: keyof typeof icons;
}

export function Annotated (props: React.PropsWithChildren<AnnotatedProps>) {
  return <Container>
    <img role="presentation" alt={props.icon} src={icons[props.icon]} />
    {props.children}
  </Container>;
}