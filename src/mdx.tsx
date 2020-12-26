import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { Emphasis } from './components/fun/emphasis'
import { Annotated } from './components/fun/annotated'
import { Rainbow } from './components/fun/rainbow'
import { Jumping } from './components/fun/jumping'
import { CallOut } from './components/fun/call-out'

export const shortcodes = {
  Link,
  OutboundLink,
  Emphasis,
  Annotated,
  Rainbow,
  Jumping,
  CallOut
}

export const MDXProviderWithShortcodes: React.FC = ({children}) => (
  <MDXProvider components={shortcodes}>
    {children}
  </MDXProvider>
)
