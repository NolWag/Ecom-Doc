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
    padding:  4rem 10rem;
  
  @media (max-width: 1400px) {
      padding: 3rem 5rem;
  }

  @media (max-width: 1000px) {
      flex-direction: column;
  }

  @media (max-width: 800px) {
    padding: 0;
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

const Headline = styled('h2')`
  text-align: center;
  font-size: 2rem;
  padding: 0 2rem;

  @media (max-width: 600px) {
    text-align: left;
  }
`




const FourUpText = () => {

  return (
      <div style={{minHeight: '100vh'}}>
      <div style={{ marginTop: '10rem'}}>
      <Headline>Most Popular Services</Headline>
      </div>
      <FlexContainer>
          <ContentContainer>
              <h2>Theme Installation</h2>
              <p>
              Purchase a new theme, but it doesn’t look exactly like it’s supposed to? We’ve installed and set up 100’s of the most popular Shopify themes. Whether it’s the config settings or product variations we can get your Shopify store looking the way you want it to.
              </p>
                <Button type="primary" name="Learn More" link="/theme-installation"></Button>
          </ContentContainer>
          <ContentContainer>
              <h2>Custom Development</h2>
              <p>
              We love building new themes! Have a discussion with our designers to create the perfect ecommerce experience for your customers. Our team has years of experience building Shopify stores from scratch, creating the perfect management platform for your employees and best ecommerce experience for your customers.
              </p>
                <Button name="Learn More" link="custom-development"></Button>
          </ContentContainer>
          <ContentContainer>
              <h2>Theme Changes & Edits</h2>
              <p>
              Our most popular service by far, changes and edits to your existing Shopify theme come in all shapes and sizes. We can perform changes as small as color changes and as big as complete landing page development. All we need is a short description of the changes to your Shopify store to get started!
              </p>
                <Button type="primary" name="Learn More" link="/theme-changes"></Button>
          </ContentContainer>
          <ContentContainer>
              <h2>Consulting</h2>
              <p>
              Just getting started in ecommerce or transferring to Shopify from another platform? With over 5 years experience working with hundreds of Shopify stores and Shopify clients our consultant services are the best in the industry.
              </p>
                <Button name="Learn More" link="/consulting"></Button>
          </ContentContainer>
        </FlexContainer>
      </div>
  )
}

export default FourUpText
