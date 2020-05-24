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
const FlexContainer = styled('div')`
    display: flex;
    flex-wrap: wrap;
    padding:  6rem 10rem;
  
  @media (max-width: 1400px) {
      padding: 3rem 5rem;
  }

  @media (max-width: 1000px) {
      flex-direction: column;
  }

`

const ContentContainer = styled('div')`
    max-width: 50%;
    padding: 2rem;

    h2 {
      font-family: 'Rubik';
      font-weight: 600;
    }

    p {
      font-family: 'Rubik';
      font-weight: 100;
    }

    @media (max-width: 1000px) {
      max-width: 100%;
    }

  
`

const FourUpText = () => {

  return (
      <FlexContainer>
          <ContentContainer>
              <h2>Theme Installation</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi
                enim ad minim veniam.</p>
                <Button type="primary" name="Learn More"></Button>
          </ContentContainer>
          <ContentContainer>
              <h2>Custom Development</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi
                enim ad minim veniam.</p>
                <Button type="primary" name="Learn More"></Button>
          </ContentContainer>
          <ContentContainer>
              <h2>Theme Changes & Edits</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi
                enim ad minim veniam.</p>
                <Button type="primary" name="Learn More"></Button>
          </ContentContainer>
          <ContentContainer>
              <h2>Consulting</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi
                enim ad minim veniam.</p>
                <Button type="primary" name="Learn More"></Button>
          </ContentContainer>
        </FlexContainer>
  )
}

export default FourUpText
