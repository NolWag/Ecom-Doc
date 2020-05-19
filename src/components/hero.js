import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from '@emotion/styled';

import Button from './button'

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
      <div style={{alignSelf: 'center', marginLeft: '5rem', zIndex: '10'}}>
      <h1 style={{fontSize: '4vw'}}>Shopify development, <br /> repair and maintenance.</h1>
      <ButtonGroup>
          <Button name="Our Services" />
          <Button type="primary" name="Get Help Now" />
      </ButtonGroup>
      </div>
  )
}

export default Hero
