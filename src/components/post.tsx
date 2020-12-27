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
  icon?: string,
  fullPost?: boolean
}

export function Post (props: PostProps) {
  const dateTime = React.useMemo(() => {
    return new Date(props.date).toISOString()
  }, [props.date])
  if (props.fullPost) {
    return <Container itemScope itemType="https://schema.org/BlogPosting">
      { props.icon
        ? <Icon itemProp="image" icon={props.icon} /> : null }
      <header>
        <h2 itemProp="headline">{props.title}</h2>
        <h3><time dateTime={dateTime} itemProp="datePublished">{props.date}</time></h3>
      </header>
      <div itemProp="articleBody">
        { props.body }
      </div>
      
      <small itemProp="author" itemScope itemType="https://schema.org/Person">
        <span itemProp="name">Gray Pegg</span> - <a itemProp="sameAs" href="https://graypegg.com">graypegg.com</a>
      </small>
    </Container>
  }

  return (
    <Container>
      { props.icon ? <Icon icon={props.icon} /> : null }
      <header>
        <h2>{props.title}</h2>
        <h3><time dateTime={dateTime}>{props.date}</time></h3>
      </header>
      <div>
        { props.body }
      </div>
    </Container>
  )
}