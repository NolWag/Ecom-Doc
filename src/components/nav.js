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

const Item = styled('li')`
    margin: 7vw 2vw;
`
const SubMenu = styled('ul')`
    position: absolute;
    top: 180px;
`

const List = styled('ul')`
  position: absolute;
  font-family: 'Montserrat';
  font-weight: 600;
  right: 0;
  list-style-type: none;
  display: inline-flex;
`
 
const Nav = () => {

  return (
    <List>
        <Item>Services</Item>
          <SubMenu>

          </SubMenu>
        <Item>FAQs</Item>
        <Item>Contact</Item>
    </List>
  )
}

export default Nav
