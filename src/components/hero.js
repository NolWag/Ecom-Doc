import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from '@emotion/styled';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ButtonGroup = styled('div')`
    display: flex;
    width: 100%;
`

const Hero = () => {

  return (
      <div style={{alignSelf: 'center', marginLeft: '5rem'}}>
      <h1>Shopify development, <br /> repair and maintenance.</h1>
      <ButtonGroup>
          <button>Learn More</button>
          <button>Get Help Now</button>
      </ButtonGroup>
      </div>
  )
}

export default Hero
