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

const ThemeChangesPage = () => {
    
    return (
        <div>
            <Nav />
            <InnerHero pageName="Theme Edits & Changes" />

            <Content>
                <h2>Store Edits</h2>
                <p>One of our most popular services, from a tiny color or font change to developing entirely new landing pages, we can do it all. Our team has years of experience developing and enhancing Shopify stores.</p>
                <p>Shopify stores are built with HTML, CSS and Javascript and also uses a templating language called Liquid. We adhere to Shopify’s best practices when it comes to making changes within your store’s code, this allows for consistent work across our team and yours both now and into the future.</p>
                <p>Changing the code to your store can have detrimental effects and should be performed with caution, if you are doing the changes yourself or by a professional developer with Shopify experience. Always make sure to back up your Shopify theme before making any new changes.</p>
                <h2>Contact Us</h2>
                <p>Not sure if we can make your changes? Head over to the contact page and let us know what you’re trying to do or what you want your store to look like.</p>
            </Content>
            <FooterNav />

        </div>
    )

}

export default ThemeChangesPage