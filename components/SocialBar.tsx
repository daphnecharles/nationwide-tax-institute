import React from 'react'
import Link from 'next/link'
import socialBarData from '../data/social-bar.json'
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { IconButton } from "@chakra-ui/react"
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

const containerStyles = css`
display: flex;
justify-content: space-between;
align-items: baseline;
width: 100%;
border-bottom: 1px solid lightgrey;
padding: 1rem;

`
const SocialBar = () => {
  const data = socialBarData[0];
return (
    <div css={containerStyles}>
        <span>
          <a href="https://www.facebook.com/NationwideTaxInstitute/" target="_blank" 
rel="noopener noreferrer">
          <IconButton
          className="social-buttons"
        colorScheme="blue"
        aria-label={data['facebook-text']}
        size="sm"
        icon={<FaFacebookF />}
      />
      </a>
      {/* <a href={data['twitter-link']} target="_blank" 
rel="noopener noreferrer">
      <IconButton
      className="social-buttons"
        colorScheme="teal"
        aria-label={data['twitter-text']}
        size="sm"
        icon={<FaTwitter />}
      />
      </a>
      <a href={data['instagram-link']} target="_blank" 
rel="noopener noreferrer">
      <IconButton
      className="social-buttons"
        colorScheme="purple"
        aria-label={data['instagram-text']}
        size="sm"
        icon={<FaInstagram />}
      />
      </a> */}
      </span>
      <span className='social-links-container'>
              <a href={data['book-link']} target="_blank" 
rel="noopener noreferrer" className="social-links">{data['book-text']}</a>
              {/* <Link href={data['testimonials-link']}>{data['testimonials-text']}</Link> */}
              </span>
    </div>
)
}

export default SocialBar;