import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from '@emotion/styled-base';



const FlexContainer = styled('div')`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 60vh;
    flex-direction: column;
`

const Title = styled('h1')`
    margin-bottom: 3rem;
    font-size: 4vw;
    font-family: 'Rubik';
    font-weight: 600;

`

const Line = styled('div')`
    height: 50px;
    background-color: red;
    width: 100%;
`




const InnerHero = (props) => {

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
    <FlexContainer>
        <Title>{props.pageName}</Title>
        <Line></Line>
    </FlexContainer>
    )
}

export default InnerHero
