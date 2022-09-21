import React from 'react'
import Navigation from './Navigation'

const Layout = ({ children }: any) => {
  return (
    <body>
      <Navigation />
      {children}
    </body>
  )
}

export default Layout
