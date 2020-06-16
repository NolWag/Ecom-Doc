import React from 'react'
import styled from '@emotion/styled';

import Header from "../components/internal-nav"

const Content = styled('div')`
    margin: 4rem 30%;
    
    @media (max-width: 800px) {
       margin: 4rem 1rem;
   }
`


const BlogLayout = ({ children }) => {
    return ( 
        <div>
        <Header />
        <Content>
        {children}
        </Content>
        </div>
    )
}

export default BlogLayout