import Head from 'next/head'
import Link from 'next/link'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import Header from './Header'
type Props = {
  children: ReactNode
  headerBackground?: string
}
const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" href="./favicon.png" sizes="32x32" />
      </Head>
      <Header />
      {/*  Main Content */}
      <main>{children}</main>
    </div>
  )
}

export default Layout
