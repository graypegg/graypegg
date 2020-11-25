import * as React from 'react'

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
}

export function isValidIcon (string: string): string is IconRef {
  return string in icons;
}

export function Icon (props: React.PropsWithChildren<AnnotatedProps>) {
  return <img role="presentation" alt={props.icon} src={icons[props.icon]} />
}