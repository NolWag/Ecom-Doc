import React from "react"
import Nav from "../components/nav"
import InnerHero from "../components/InnerHero"
import FooterNav from "../components/footer-nav"

import styled from '@emotion/styled-base';

const Content = styled('div')`
    margin: 4rem 30%;
    
    @media (max-width: 800px) {
       margin: 4rem 1rem;
   }
`

const CustomDevelopmentPage = () => {
    
    return (
        <div>
            <Nav />
            <InnerHero pageName="Custom Development" />
            <Content>
            <h2>New Shopify Store</h2>
              <p>
              We love building new Shopify stores! Our team builds several new stores each year, starting with a custom design exactly to your liking. Whether your store is a little outdated and needs a refresh or you are just getting started with Shopify, we can build a store to your exact specifications and functionality.
              </p>  
            <p>
            Building a new Shopify store is a big undertaking, typically 8 to 12 weeks, but times do vary depending on the time of year or our current workload. We prefer to have at least one meeting to discuss the scope, functionality and expectations before we start designing your new Shopify store. </p>
            
            <h2>One Page Store</h2>
            <p>Not ready to completely dive into a full sized store? We have just the thing! Our single page Shopify store is great for businesses just getting started in ecommerce or wanting to test out the viability of a new product without a huge initial investment. </p>
            <p>A one page store is typically a single product (but not necessarily limited to) and a buy button. This allows us to offer a very affordable price and if you decide to grow, you can use the same Shopify store you’ve been using, no need to redevelop! </p>
            </Content>
            <FooterNav />

        </div>
    )

}

export default CustomDevelopmentPage