import React from "react"
import Nav from "../components/nav"
import InnerHero from "../components/InnerHero"
import FooterNav from "../components/footer-nav"
import Button from "../components/button"

import styled from '@emotion/styled-base';

const Content = styled('div')`
    margin: 4rem 30%;
    
    @media (max-width: 800px) {
       margin: 4rem 1rem;
   }
`

const ButtonOut = styled('button')`
 border: none;
    height: 2.5rem;
    border-radius: 2rem;
    cursor: pointer;
    font-family: 'Montserrat';
    font-weight: 600;
    padding: .5rem 2rem;
    background-color: #ef4538;
    color: #fff;
    &:hover {
        background-color: #ef685e;
        transition: .4s;
    }

    @media (max-width: 800px) {
        margin: .5rem 0;
    }
    
`

const ThemeInstallationPage = () => {
    
    return (
        <div>
            <Nav />
            <InnerHero pageName="Theme Installation" />
            <Content>
            <h2>Shopify Themes</h2>
            <p>
            Have you recently purchased a new Shopify Theme, but can’t get it to look or perform like the preview? While this tends to be a fairly simple task, some themes are more complex and require a little more configuration than simply uploading the “.zip” file.
            </p>
            <p>
            We can help with just about any commercial or custom theme, send us a message with more information about the particular problems you’re experiencing and we can get to work right away!
            </p>
            <p>
            Below is a guide, from Shopify, on adding a new theme to your store. Let us know if you have any issues and we’d be glad to get them corrected for you.
            </p>
            <a href="https://help.shopify.com/en/manual/using-themes/adding-themes" target="_blank" rel="noreferrer">
            <ButtonOut>Adding Themes</ButtonOut>
            </a>
            </Content>
            <FooterNav />

        </div>
    )

}

export default ThemeInstallationPage