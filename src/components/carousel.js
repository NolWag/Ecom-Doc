import React from "react"
import "react-multi-carousel/lib/styles.css";
import { useStaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled';

import Carousel from "react-multi-carousel";
import Img from "gatsby-image"


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };

  const Item = styled(Img)`
    margin: 0rem 1rem;
  `
  const Headline = styled('h2')`
  text-align: center;
  font-size: 2rem;
  padding: 0 2rem;
  margin-bottom: 5rem;

  @media (max-width: 600px) {
    text-align: left;
    margin-top: 4rem;
  }
`

const CarouselHome = () => {

  const data = useStaticQuery(graphql`
  query {
      imageOne: file(relativePath: { eq: "Above-Media.jpg" }) {
          sharp: childImageSharp {
              fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
              }
          }
      }
      imageTwo: file(relativePath: { eq: "Wheel-Store.jpg" }) {
          sharp: childImageSharp {
              fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
              }
          }
      }
      imageThree: file(relativePath: { eq: "Sutherland.jpg" }) {
          sharp: childImageSharp {
              fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
              }
          }
      }
      imageFour: file(relativePath: { eq: "Golf-Carts.jpg" }) {
          sharp: childImageSharp {
              fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
              }
          }
      }
      imageFive: file(relativePath: { eq: "Fit-Bit.jpg" }) {
          sharp: childImageSharp {
              fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
              }
          }
      }
  }
`)


    return (
        <div>
        <Headline>Our Recent Work</Headline>
        <Carousel responsive={responsive} infinite={true}>
          <Item fluid={data.imageOne.sharp.fluid} />
          <Item fluid={data.imageTwo.sharp.fluid} />
          <Item fluid={data.imageThree.sharp.fluid} />
          <Item fluid={data.imageFour.sharp.fluid} />
          <Item fluid={data.imageFive.sharp.fluid} />
        </Carousel>
        </div>
    )
}

export default CarouselHome