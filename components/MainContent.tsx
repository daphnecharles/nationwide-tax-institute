import React from 'react'
import Link from 'next/link'
/** @jsx jsx */
import { jsx, css } from '@emotion/react'


const containerStyles = css`

.section-2 {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-column-gap: 2rem;
    margin: 2rem;

}

h2 {
    font-size: 28px;
    color: #002965;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 1rem;
}

.hero-image {
    width: 100vw;
  height: 70vh;
}

`
const MainContent = () => {
return (
    <main css={containerStyles}>
        <img className="hero-image" src="/homeslider-2-1024x680.jpeg" alt="Calculator and Pen"/>
      <section className="section-2">
          <div>
          <h2>12 Hour Training Course</h2>
          <p>We can help you learn to become a tax preparer in only 12 hours. Start your tax business for as little as $399.00. Classes available to start every week!
            <br/>
            <br/>
Besides specializing in Tax Preparation Courses we also offer additional courses in the following subjects: Tax Returns, Tax Training Services and Tax Marketing. We look forward to introducing you to our team and providing the Tax Preparation Classes solution you need across the USA. We make sure all of our employees and staff are well trained and adept at quality customer service.
<br/>
<br/>
Contact our Tax Preparation Institute at (973) 313-0404 to enroll in our Tax Preparation, Tax Return, Tax Training Services or Tax Marketing Course today!</p>
</div>
<div>
    <h2>Buy The Book</h2>
    <a href="https://www.amazon.com/Tax-Preparation-Made-Easy-Software/dp/1622175018">
    <img src="/tax-preparation-made-easy.jpg" alt="Tax Preparation Book" />
    </a>
</div>
      </section>
    </main>
)
}

export default MainContent;