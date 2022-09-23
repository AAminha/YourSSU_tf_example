import React from 'react'
import Navigation from './Navigation'

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}

export default Layout
