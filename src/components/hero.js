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
const Container = styled('div')`
    align-self: center;
    margin-left: 5rem;
    z-index: 10;

    @media (max-width: 1200px) {
        align-self: unset;
        margin-top: calc(300px - 10vw) ; 
    }
    @media (max-width: 900px) {
        margin-top: calc(220px - 10vw) ; 
    }    
    @media (max-width: 800px) {
        margin-left: 0;
        display: flex;
        flex-direction: column;
  }

`

const Headline = styled('h1')`
    font-size: 4vw;
    font-family: 'Rubik';
    font-weight: 600;

    @media (max-width: 800px) {
        text-align: center;
        font-size: 6vw;
    }
`

const ButtonGroup = styled('div')`
    display: flex;
    width: 100%;

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`
const GreenText = styled('span')`
    color: #96BF48;
`

const Hero = () => {

  return (
      <Container>
      <Headline><GreenText>Shopify</GreenText> development, <br /> repair, and maintenance.</Headline>
      <ButtonGroup>
          <Button name="Our Services" />
          <Button type="primary" name="Get Help Now" />
      </ButtonGroup>
      </Container>
  )
}

export default Hero
