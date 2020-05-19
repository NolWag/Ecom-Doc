import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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

const Image = () => {
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

  return <Img style={{width: '20vw', position: 'absolute', left: '0', top: '0'}} fluid={image.sharp.fluid} />
}

export default Image
