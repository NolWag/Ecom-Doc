import React from 'react'
import { Link, graphql } from 'gatsby'

function BlogPage({ data }) {
    const { edges: posts } = data.allMdx
    return (
      <div>
        {posts.map(({ node }) => {
          const { title, author } = node.frontmatter
          return (
            <div key={node.id}>
              <header>
                <div>{title}</div>
                <div>Posting By {author}</div>
              </header>
              <p>{node.excerpt}</p>
              <Link to={node.fields.slug}>View Article</Link>
              <hr />
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