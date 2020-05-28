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
  font-family: 'Montserrat';
  font-weight: 600;
  list-style-type: none;
  display: inline-flex;

  @media (max-width: 800px) {
    display: none;
  }
`

const Item = styled(Link)`
    margin: 7vw 2vw;
`

const SubMenu = styled('ul')`
    position: absolute;
    top: 180px;
`


const Logo = styled(Img)`
  width: 20vw;

  @media (max-width: 800px) {
    width: 80%;
    align-self: center;
  }
`

const Nav = () => {

  const { image } = useStaticQuery(graphql`
  query {
      image: file(relativePath: { eq: "The-Ecom-Doc.png" }) {
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
        <Item>Services</Item>
          <SubMenu>

          </SubMenu>
        <Item to="/faqs">FAQs</Item>
        <Item to="/contact">Contact</Item>
    </List>
    </FlexContainer>
    </AbsoluteContainer>
  )
}

export default Nav
