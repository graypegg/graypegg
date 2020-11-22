import * as React from 'react'
import styled from 'styled-components'
import { MarkdownRemarkFrontmatter, MarkdownRemark } from '../../graphql-types'

const Container = styled.article`
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

type PostProps =
  Required<
    Pick<MarkdownRemarkFrontmatter, 'title' | 'date'>
    & Pick<MarkdownRemark, 'html'>
  >

export function Post (props: PostProps) {
  return (
    <Container>
      <header>
        <h2>{props.title}</h2>
        <h3><time>{props.date}</time></h3>
      </header>
      <div dangerouslySetInnerHTML={{ __html: props.html }}></div>
    </Container>
  )
}