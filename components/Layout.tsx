import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import SocialBar from './SocialBar'
import LogoBar from './LogoBar'
import NavBar from './NavBar'
import MainContent from './MainContent'
import Footer from './Footer'
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

type Props = {
  children: ReactNode
  title?: string
}

const Layout = ({
  children,
  title = 'Nationwide Tax Institute - Tax Training School',
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.png" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nationwidetaxinstitute" />
      <meta name="twitter:title" content="Nationwide Tax Institute - Tax Training School" />
      <meta
        name="twitter:description"
        content="Nationwide Tax Institute - Tax Training School"
      />
    </Head>
    <div className="container">
      <header>
        <SocialBar/>
        <LogoBar/>
      </header>
      <NavBar />
      <MainContent/>
      <Footer/>
      {children}
    </div>
  </>
)

export default Layout
