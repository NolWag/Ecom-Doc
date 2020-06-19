import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled';

import Button from "../components/button"
import InnerHero from "../components/InnerHero"
import SEO from "../components/seo"
import MobileNav from "../components/mobile-nav"

import Nav from "../components/nav"
import NavContainer from "../components/util/nav-container"

const PostItem = styled('div')`
    margin: 4rem 30%;
    padding: 1rem;
    border-radius: 1rem;

    @media (max-width: 800px) {
       margin: 4rem 1rem;
   }

`

const Flex = styled('div')`
    display: flex;
    justify-content: space-between;
`

function BlogPage({ data }) {
    const { edges: posts } = data.allMdx
    return (
      <div>
        {posts.map(({ node }) => {
          const { title, author } = node.frontmatter
          return (
            <div>
            <SEO title="Blog" />
            <NavContainer>
              <Nav />
            </NavContainer>
            <InnerHero pageName="Blog" />
            <Link to={node.fields.slug}>
            <PostItem key={node.id}>
              <div>
                <h2>{title}</h2>
              </div>
              <p>{node.excerpt}</p>
              <Flex>
              <div>Posted By {author}</div>
              <Button type="primary" name="Read Post" link={node.fields.slug} />
              </Flex>
            </PostItem>
            </Link>
            <MobileNav />
            </div>
          )
        })}
      </div>
    )
  }

export default BlogPage;

export const listQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            author
          }
        }
      }
    }
  }
`