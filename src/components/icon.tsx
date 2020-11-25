import * as React from 'react'
import styled from 'styled-components'

import OFCheckIcon from '../assets/images/icons/icon-omnifocus.svg'
import HiIcon from '../assets/images/icons/icon-hi.svg'
import CoffeeIcon from '../assets/images/icons/icon-coffee.svg'
import BikeIcon from '../assets/images/icons/icon-bike.svg'
import TrainIcon from '../assets/images/icons/icon-train.svg'

import EscapeIcon from '../assets/images/icons/icon-escape.svg'
import InfoIcon from '../assets/images/icons/icon-info.svg'
import RailsIcon from '../assets/images/icons/icon-rails.svg'
import TwitterIcon from '../assets/images/icons/icon-twitter.svg'

const icons = {
  omnifocus: OFCheckIcon,
  hi: HiIcon,
  coffee: CoffeeIcon,
  bike: BikeIcon,
  train: TrainIcon,
  escape: EscapeIcon,
  info: InfoIcon,
  rails: RailsIcon,
  twitter: TwitterIcon
}

export type IconRef = keyof typeof icons;

interface AnnotatedProps {
  icon: IconRef;
  normalize?: boolean;
}

export function isValidIcon (string: string): string is IconRef {
  return string in icons;
}

const Container = styled.img`
  ${ (props: AnnotatedProps) => (
    props.normalize
      ? `filter: grayscale(1) brightness(0);`
      : null
    )
  }
`

export function Icon (props: React.PropsWithChildren<AnnotatedProps>) {
  return <Container role="presentation" alt={props.icon} src={icons[props.icon]} {...props} />
}