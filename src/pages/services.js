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
                <p>We love building new themes! Have a discussion with our designers to create the perfect ecommerce experience for your customers. Our team has years of experience building Shopify stores from scratch, creating the perfect management platform for your employees and best ecommerce experience for your customers.</p>
                <Button link="/contact" type="primary" name="Inquire About Service"/>
                </Item>

                <Item>
                <h2>Theme Changes & Edits</h2>
                <p>Our most popular service by far, changes and edits to your existing Shopify theme come in all shapes and sizes. We can perform changes as small as color changes and as big as complete landing page development. All we need is a short description of the changes to your Shopify store to get started!</p>
                <Button link="/contact" type="primary" name="Inquire About Service"/>
                </Item>

                <Item>
                <h2>Theme Installation</h2>
                <p>Purchase a new theme, but it doesn’t look exactly like it’s supposed to? We’ve installed and set up 100’s of the most popular Shopify themes. Whether it’s the config settings or product variations we can get your Shopify store looking the way you want it to.</p>
                <Button link="/contact" type="primary" name="Inquire About Service"/>
                </Item>

                <Item>
                <h2>Page Speed Optimization</h2>
                <p>Is your store loading a little too slow? Optimizations are exactly what the doctor ordered. There are a plethora of things that can make your site slow to load: apps, improper coding, code in the wrong spot, image sizes, third party software, the list goes on and on. This makes each page speed optimization a specialized job for every client and starts with an audit by The Doc. Test your site’s speed today with Google Page Speed Tool or GTmetrix - it’s free!</p>
                <Button link="/contact" type="primary" name="Inquire About Service"/>
                </Item>

                <Item>
                <h2>Migrations to Shopify</h2>
                <p>Looking to make the move? We’ve got you’ve covered in all of your blind spots. Whether you are migrating from: WooCommerce, BigCommerce, Magento or any other shopping cart, our developers have years of experience to ensure your store and all the hard work you’ve put in stays in one piece during the migration to your new Shopify store.</p>
                <Button link="/contact" type="primary" name="Inquire About Service"/>
                </Item> 

                <Item>
                <h2>Ecommerce Consulting</h2>
                <p>Just getting started in ecommerce or transferring to Shopify from another platform? With over 5 years experience working with hundreds of Shopify stores and Shopify clients our consultant services are the best in the industry.</p>
                <Button link="/contact" type="primary" name="Inquire About Service"/>
                </Item>


            </Content>

            <MobileNav />
        </div>
    )

}

export default ServicesPage