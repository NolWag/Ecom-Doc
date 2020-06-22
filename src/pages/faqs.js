import React from "react"
import InnerHero from "../components/InnerHero"
import MobileNav from "../components/mobile-nav"
import SEO from "../components/seo"

import Nav from "../components/nav"
import NavContainer from "../components/util/nav-container"

import { Link } from "gatsby"
import styled from '@emotion/styled-base';

const Content = styled('div')`
    margin: 4rem 30%;
    
    @media (max-width: 800px) {
       margin: 4rem 1rem;
   }
`

const FAQPage = () => {
    
    return (
        <div>
            <SEO title="Frequently Asked Questions" />
            <NavContainer>
            <Nav />
            </NavContainer>
            <InnerHero pageName="FAQs" />
            <Content>
                <h4>What is your hourly rate?</h4>
                <p>For changes, edits and custom development we charge $65/hour, discount rates are available for larger projects or monthly maintenance plans.</p>
                <h4>Can you help us with our WooCommerce, BigCommerce or Magento shopping cart?</h4>
                <p>No, we only work with Shopify Stores.</p>
                <h4>Do you build / develop new Shopify stores?</h4>
                <p>Yes we do! Please check out the <Link to="/custom-development">Custom Development</Link> page for more information.</p>
                <h4>Can you make my Shopify store load faster?</h4>
                <p>Yes, we have optimized hundreds of Shopify stores. </p>
            </Content>
            <MobileNav />
        </div>
    )

}

export default FAQPage