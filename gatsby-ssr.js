import React from 'react'
import NetlifyIdentityContext from 'react-netlify-identity-gotrue'

export const wrapRootElement = ({ element }, { url }) =>
  React.createElement(
    NetlifyIdentityContext,
    {
      url: url,
    },
    element
  )
