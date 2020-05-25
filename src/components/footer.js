import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from '@emotion/styled';

import FooterNav from "../components/footer-nav"
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
const Container = styled('div')`
    min-height: unset;


    @media (max-width: 800px) {
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const FlexContainer = styled('div')`
    display: flex;
    align-items: center;
    margin-top: 15vw;
    margin-left: 8vw;

    @media (max-width: 800px) {
        flex-direction: column-reverse;
        margin-top: 0;
        margin-bottom: 4rem;
        align-items: center;
        margin-left: 0;
    }
`

const GreenText = styled('span')`
    color: #96BF48;
`
const Headline = styled('h3')`
    font-size: 3vw;
    margin-left: 2rem;

    @media (max-width: 800px) {
        font-size: 6vw;
        text-align: left;
        margin-left: 0;
    }
`



const Footer = () => {

  return (
      <Container>
      <FlexContainer>
      <Button type="primary" name="Get Help Now" />
      <Headline><GreenText>Shopify</GreenText> development, <br /> repair and maintenance.</Headline>
      </FlexContainer>
      <FooterNav />
      </Container>
  )
}

export default Footer
