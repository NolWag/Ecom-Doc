import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from '@emotion/styled';


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

const ItemLink = styled('a')`
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

const InternalNav = () => {

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
    <FlexContainer>
    <Link to="/"><Logo fluid={image.sharp.fluid} /> </Link>
    <List>
        <ItemLink href="/#services">Services</ItemLink>
        <Item to="/faqs">FAQs</Item>
        <Item to="/blog">Blog</Item>
        <Item to="/contact">Contact</Item>
    </List>
    </FlexContainer>
  )
}

export default InternalNav
