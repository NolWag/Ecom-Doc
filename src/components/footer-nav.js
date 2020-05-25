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

const FixedContainer = styled('div')`
  position: static;
  width: 100%;

  @media (max-width: 800px) {
    position: fixed;
    bottom: 0;
    z-index: 10;
    background-color: #ef4538;
  }
`

const List = styled('ul')`
  list-style-type: none;
  margin-bottom: 0;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`

const Item = styled('li')`
    font-family: 'Rubik';
    
    @media (max-width: 800px) {
      color: #fff;
      padding: 0 1rem;
      height: 100%;

      &:hover {
      color: #ccc;
      transition: .2s;
      }
    }
`



const SubMenu = styled('ul')`
    list-style-type: none;
    background-color: #ccc;
    margin: 0;
    padding-top: 1rem;
    flex-wrap: wrap;
    padding-bottom: .5rem;
    display: none;
`

const Item2 = styled('li')`
  margin: 1rem;
  color: #000;
  font-family: 'Rubik';

  &:hover {
      color: #fff;
      transition: .2s;
  }
`

function openSubMenu() {
  SubMenu.style.display = 'block';
}
 
const FooterNav = () => {

  return (
    <FixedContainer>
    <SubMenu>
        <Item2>Theme Installation</Item2>
        <Item2>Theme Edits</Item2>
        <Item2>Custom Development</Item2>
        <Item2>Consulting</Item2>
    </SubMenu>
    <List>
        <Item onClick={openSubMenu}>Services</Item>
        <Item>FAQs</Item>
        <Item>Contact</Item>
    </List>
    </FixedContainer>
  )
}

export default FooterNav
