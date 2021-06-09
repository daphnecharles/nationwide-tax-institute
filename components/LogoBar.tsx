import React from 'react'
import Link from 'next/link'
/** @jsx jsx */
import { jsx, css } from '@emotion/react'


const containerStyles = css`
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 10rem;

img {
  width: 30rem;
}

h1 {
  font-size: 24px;
  color: 	#cf9f61;
  font-weight: bold;
}

`
const LogoBar = () => {
return (
    <div css={containerStyles}>
      <img src="/logo.jpg" alt="Business Logo for Nationwide Tax Institute"/>
      <a href="tel:973-313-7404"><h1>Call Us: 973-313-7404</h1></a>
    </div>
)
}

export default LogoBar;