import React from 'react'
import Link from 'next/link'
import logoBarData from '../data/logo-bar.json'
/** @jsx jsx */
import { jsx, css } from '@emotion/react'


const containerStyles = css`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
border-top: 1px solid lightgrey;
border-bottom: 1px solid lightgrey;
color: #002965;

img {
  width: 30rem;
}

h1 {
  font-size: 2rem;
  color: 	#cf9f61;
  font-weight: bold;
}
a {
  padding: .5rem;
  border-top: 3px solid transparent;
}
a:hover {
  border-top: 3px solid #c78a2f;
}

`
const NavBar = () => {
return (
    <nav css={containerStyles}>
            <Link href="/">
            <a className="">
              Home
            </a>
          </Link>
            <a href="tel:973-313-7404">
              Contact Us
            </a>
        </nav>
)
}

export default NavBar;


