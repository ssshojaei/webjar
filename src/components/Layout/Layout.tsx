import React from 'react'
import Header from './Header'

type TLayout = {
  children: React.ReactNode
}

const Layout = ({ children }: TLayout) => {
  return (
    <>
      <Header />
      <main className="container py-6">{children}</main>
    </>
  )
}

export default Layout
