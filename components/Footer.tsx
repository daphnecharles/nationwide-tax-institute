import React from 'react'
import Link from 'next/link'
/** @jsx jsx */
import { jsx, css } from '@emotion/react'


const containerStyles = css`
color: white;
.section-1{
background-color: #005184;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    padding: 2rem;
}
.section-2 {
    background-color: #282a2b;
    padding: 1rem;
}

    h3 {
        font-size: 18px;
        text-transform: uppercase;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }


`
const Footer = () => {
return (
    <footer css={containerStyles}>
        <section className="section-1">
            <div>
            <h3>Contact Information</h3>
            <p>
            Call Us: 973-313-7404
<br/>
<br/>
Address:
*New Jersey
51 John F. Kennedy Parkway
<br/>
Short Hills, NJ 07078
            </p>
            </div>
            <div>
        <h3>We Specialize In</h3>
        <p>
        Tax Preparation Classes
        <br/>
Tax Return Courses
<br/>
Tax Training Services
<br/>
Tax Marketing
<br/>
<br/>
Learn to Become an Accomplished Tax preparer in 12 hours or Less
        </p>
        </div>
        <div>
        <h3>Hours of Operation</h3>
        <p>Monday - Saturday 9 a.m. - 9 p.m.</p>
        <h3>Produly Serving</h3>
        <p>Nationwide</p>
        </div>
        </section>
        <section className="section-2">
        <p>Copyright 2021 Nationwide Tax Institute | All Rights Reserved</p>
        </section>
    </footer>
)
}

export default Footer;