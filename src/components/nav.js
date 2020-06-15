import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
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

const AbsoluteContainer = styled('div')`
  width: 100%;
  position: absolute;
`

const FlexContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: unset;
  }
`

const List = styled('ul')`
  font-family: 'Rubik';
  list-style-type: none;
  display: inline-flex;

  @media (max-width: 800px) {
    display: none;
  }
`

const Item = styled(Link)`
    margin: 7vw 2vw;
`

const Logo = styled(Img)`
  width: 15vw;
  margin: 2rem;

  @media (max-width: 800px) {
    width: 80vw;
    align-self: center;
    z-index: 10;
    margin: 0;
    margin-top: 5rem;
  }
`

const Nav = () => {

  const { image } = useStaticQuery(graphql`
  query {
      image: file(relativePath: { eq: "Ecom-Doc-Logo-Web.jpg" }) {
          sharp: childImageSharp {
              fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
              }
          }
      }
  }
`)

  return (
    <AbsoluteContainer>
    <FlexContainer>
    <Link to="/"><Logo fluid={image.sharp.fluid} /> </Link>
    <List>
        <Item to="/services">Services</Item>
        <Item to="/faqs">FAQs</Item>
        <Item to="/blog">Blog</Item>
        <Item to="/contact">Contact</Item>
    </List>
    </FlexContainer>
    </AbsoluteContainer>
  )
}

export default Nav
