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
  display: none;

  @media (max-width: 800px) {
    margin: 0;
    margin-bottom: .8rem;
    margin-top: 1rem;
    display: flex;
    list-style-type: none;
    align-items: center;
    justify-content: center;
  }
`

const Item = styled(Link)`
    font-family: 'Rubik';
    padding: 0 1vw;
    
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

const DeskNav = styled('ul')`
    display: flex;
    bottom: 0; 
    list-style-type: none;
    margin-top: 4rem;
    font-size: .8rem;

  @media (max-width: 800px) {
    display: none;
  }
`

const SocialIcon = styled(Img)`
  height: 100%;
  width: 25px;
  margin: 0 .25vw;

  @media (max-width: 800px) {
    margin: 0 .5vw 0 .5vw;
    width: 20px;
  }
`

const SocialContainer = styled('a')`
  height: 100%;
`

const Flex = styled('div')`
  display: flex;
`

const Divider = styled('hr')`
  color: #fff;
`


const FooterNav = () => {

  const data = useStaticQuery(graphql`
query {
    facebook: file(relativePath: { eq: "Facebook.png" }) {
        sharp: childImageSharp {
            fluid(quality: 100) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    twitter: file(relativePath: { eq: "Twitter.png" }) {
        sharp: childImageSharp {
            fluid(quality: 100) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    youtube: file(relativePath: { eq: "Youtube.png" }) {
        sharp: childImageSharp {
            fluid(quality: 100) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    instagram: file(relativePath: { eq: "Instagram.png" }) {
        sharp: childImageSharp {
            fluid(quality: 100) {
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`)

  return (
    <FixedContainer>
        <DeskNav>
            <Item to="/services">Services</Item>
            <Item to="/faqs">FAQs</Item>
            <Item to="/blog">Blog</Item>
            <Item to="/contact">Contact</Item>
            <SocialContainer target="_blank" href="https://www.facebook.com/The-Ecom-Doc-318549699040501">
              <SocialIcon fluid={data.facebook.sharp.fluid} />
            </SocialContainer>
            <SocialContainer href="/">
              <SocialIcon fluid={data.instagram.sharp.fluid} />
            </SocialContainer>
           
        </DeskNav>
        <List>
          <div>
            <Item to="/services">Services</Item>
            <Item to="/faqs">FAQs</Item>
            <Item to="/contact">Contact</Item>
            <Item to="/blog">Blog</Item>
          </div>
          <Flex>
            <SocialContainer target="_blank" href="https://www.facebook.com/The-Ecom-Doc-318549699040501">
              <SocialIcon fluid={data.facebook.sharp.fluid} />
            </SocialContainer>
            <SocialContainer href="/">
              <SocialIcon fluid={data.instagram.sharp.fluid} />
            </SocialContainer>
          </Flex>
        </List>
    
    </FixedContainer>
  )
}

export default FooterNav
