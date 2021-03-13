import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'
import { IconFilesQuery } from '../../graphql-types'

interface AnnotatedProps {
  icon: string;
  itemProp?: string;
}

const Container = styled.svg`
  width: 40px;
  height: 40px;
  
  use {
    color: var(--colour-primary);
  }
`

function getIcon (iconName: string, fileResponse: IconFilesQuery): string {
  const fileNode = fileResponse.allFile.edges.find(edge => edge.node.name === `icon-${iconName}`)
  
  if (fileNode) return fileNode.node.publicURL
}

export function Icon (props: React.PropsWithChildren<AnnotatedProps>) {
  return (
    <StaticQuery
      query={
        graphql`
          query IconFiles {
            allFile(filter: {relativeDirectory: {eq: "icons"}}) {
              edges {
                node {
                  id
                  name
                  publicURL
                }
              }
            }
            site {
              siteMetadata {
                siteUrl
              }
            }
          }
        `
      }
      render={(data: IconFilesQuery) => (
        <Container role="presentation">
          { props.itemProp
            ? <meta
              itemProp={props.itemProp}
              content={
                (data?.site?.siteMetadata?.siteUrl ?? '') +
                getIcon(props.icon, data)
              } />
            : null
          }
          <use href={getIcon(props.icon, data) + '#Layer_1'} />
        </Container>
      )}/>
  )
}