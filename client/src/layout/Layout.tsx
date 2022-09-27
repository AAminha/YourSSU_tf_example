import React from 'react'
import Navigation from './Navigation'

const Layout = ({ children }: any) => {
  return (
    <div className="mt-10 ml-10 mr-10">
      <Navigation />
      <section className="mt-5 bg-white rounded-2xl border-cyan-600 border-2 pt-5 pb-5">
        {children}
      </section>
    </div>
  )
}

export default Layout
