import React from "react"
import InternalNav from "../components/internal-nav"
import InnerHero from "../components/InnerHero"
import SEO from "../components/seo"
import Button from "../components/button"
import MobileNav from "../components/mobile-nav"

import { Link } from "gatsby"
import styled from '@emotion/styled-base';

const Content = styled('div')`
    margin: 4rem 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    @media (max-width: 800px) {
       margin: 4rem 1rem;
   }
`

const Item = styled('div')`
    max-width: 40%;
    margin: 2rem;

    @media (max-width: 800px) {
        max-width: 100%;
    }
`

const ServicesPage = () => {
    
    return (
        <div>
            <SEO title="Services" />
            <InternalNav />
            <InnerHero pageName="Services" />
            <Content>

                <Item>
                <h2>Theme Design & Development</h2>
                <p>Purchase a new theme, but it doesn’t look exactly like it’s supposed to? We’ve installed and set up 100’s of the most popular Shopify themes. Whether it’s the config settings or product variations we can get your Shopify store looking the way you want it to.</p>
                <Button link="/contact" type="primary" name="Inquire About Service"/>
                </Item>

                <Item>
                <h2>Theme Changes & Edits</h2>
                <p>Purchase a new theme, but it doesn’t look exactly like it’s supposed to? We’ve installed and set up 100’s of the most popular Shopify themes. Whether it’s the config settings or product variations we can get your Shopify store looking the way you want it to.</p>
                <Button link="/contact" type="primary" name="Inquire About Service"/>
                </Item>

                <Item>
                <h2>Theme Installation</h2>
                <p>Purchase a new theme, but it doesn’t look exactly like it’s supposed to? We’ve installed and set up 100’s of the most popular Shopify themes. Whether it’s the config settings or product variations we can get your Shopify store looking the way you want it to.</p>
                <Button link="/contact" type="primary" name="Inquire About Service"/>
                </Item>

                <Item>
                <h2>Page Speed Optimization</h2>
                <p>Purchase a new theme, but it doesn’t look exactly like it’s supposed to? We’ve installed and set up 100’s of the most popular Shopify themes. Whether it’s the config settings or product variations we can get your Shopify store looking the way you want it to.</p>
                <Button link="/contact" type="primary" name="Inquire About Service"/>
                </Item>

                <Item>
                <h2>Migrations to Shopify</h2>
                <p>Purchase a new theme, but it doesn’t look exactly like it’s supposed to? We’ve installed and set up 100’s of the most popular Shopify themes. Whether it’s the config settings or product variations we can get your Shopify store looking the way you want it to.</p>
                <Button link="/contact" type="primary" name="Inquire About Service"/>
                </Item> 

                <Item>
                <h2>Ecommerce Consulting</h2>
                <p>Purchase a new theme, but it doesn’t look exactly like it’s supposed to? We’ve installed and set up 100’s of the most popular Shopify themes. Whether it’s the config settings or product variations we can get your Shopify store looking the way you want it to.</p>
                <Button link="/contact" type="primary" name="Inquire About Service"/>
                </Item>


            </Content>

            <MobileNav />
        </div>
    )

}

export default ServicesPage