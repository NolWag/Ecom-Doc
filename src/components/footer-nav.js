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
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Item2 = styled(Link)`
  margin: 0rem;
  color: #000;
  font-family: 'Rubik';
  height: 100%;
  width: 100%;
  padding: .5rem 2rem;
  border: .5px solid #eee;

  &:hover {
      background-color: #fff;
      transition: .2s;
  }
`

const NavServices = () => {
  return (
    <div>
        <SubMenu>
        <Item2>Theme Installation</Item2>
        <Item2>Theme Edits</Item2>
        <Item2>Custom Development</Item2>
        <Item2>Consulting</Item2>
    </SubMenu>
   
    </div>
  )
}

class Foo extends React.Component {

  state = { showing: false };

  render() {
      const { showing } = this.state;
      
      return (
          <div>
              { showing ?
                <NavServices />
                :
                null
              }
              <List>
                <Item onClick={() => this.setState({ showing: !showing })}>Services</Item>
                <Item>FAQs</Item>
                <Item>Contact</Item>
              </List>
          </div>  
      )
    }
}


const FooterNav = () => {

  return (
    <FixedContainer>
      <Foo />
    </FixedContainer>
  )
}

export default FooterNav
