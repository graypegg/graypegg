import * as React from 'react'
import { MDXProvider } from "@mdx-js/react"
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { Emphasis } from './components/fun/emphasis'
import { Annotated } from './components/fun/annotated'

export const shortcodes = { Link, OutboundLink, Emphasis, Annotated }

export const MDXProviderWithShortcodes: React.FC = ({children}) => (
  <MDXProvider components={shortcodes}>
    {children}
  </MDXProvider>
)
