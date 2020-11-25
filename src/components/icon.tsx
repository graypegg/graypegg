import * as React from 'react'

import OFCheckIcon from '../assets/images/icons/icon-omnifocus.svg'
import HiIcon from '../assets/images/icons/icon-hi.svg'
import CoffeeIcon from '../assets/images/icons/icon-coffee.svg'
import BikeIcon from '../assets/images/icons/icon-bike.svg'
import TrainIcon from '../assets/images/icons/icon-train.svg'

const icons = {
  omnifocus: OFCheckIcon,
  hi: HiIcon,
  coffee: CoffeeIcon,
  bike: BikeIcon,
  train: TrainIcon
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