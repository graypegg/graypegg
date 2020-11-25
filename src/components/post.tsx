import * as React from 'react'
import styled from 'styled-components'
import { MdxFrontmatter } from '../../graphql-types'
import { Icon } from '../components/icon'

const Container = styled.article`
  &>svg {
    width: 45px;
    height: 45px;
    margin-bottom: 0;
    
    use {
      fill: var(--colour-primary);
    }
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: calc(var(--grid-gutter-width) / 2);

    h2 {
      flex: 0 1.75 auto;
      margin-right: calc(var(--grid-gutter-width) / 2);
      margin-bottom: 0;
      position: relative;

      &::after {
        content: '';
        display: block;
        height: max(calc(100% - 25px), 25px);
        width: 4px;
        background: var(--colour-primary);
        position: absolute;
        top: 50%;
        right: calc(var(--grid-gutter-width) * -0.5);
        transform: translateY(-50%);
        z-index: 100;
      }
    }

    h3 {
      display: flex;
      flex: 1 1 100%;
      justify-content: flex-end;
      position: relative;
      margin-bottom: 0;

      &::before {
        content: '';
        display: block;
        height: 4px;
        width: 100%;
        background: var(--colour-primary);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 100;
      }

      time {
        display: inline-block;
        background: var(--colour-primary);
        padding: 5px 7px;
        color: #ffffff;
        font-family: var(--font-body);
        font-weight: 300;
        font-size: 1rem;
        z-index: 1000;
        margin-right: 20px;
      }
    }
  }
`

interface PostProps extends Required<Pick<MdxFrontmatter, 'title' | 'date'>> {
  body: React.ReactNode
  icon?: string
}

export function Post (props: PostProps) {
  const dateTime = React.useMemo(() => {
    return new Date(props.date).toISOString()
  }, [props.date])
  return (
    <Container>
      { props.icon ? <Icon icon={props.icon} /> : null }
      <header>
        <h2>{props.title}</h2>
        <h3><time dateTime={dateTime}>{props.date}</time></h3>
      </header>
      { props.body }
    </Container>
  )
}