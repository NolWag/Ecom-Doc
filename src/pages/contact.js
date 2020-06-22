import React from "react"
import InnerHero from "../components/InnerHero"
import MobileNav from "../components/mobile-nav"
import ContactForm from "../components/contact-form"
import SEO from "../components/seo"

import Nav from "../components/nav"
import NavContainer from "../components/util/nav-container"

const ContactPage = () => {
    
    return (
        <div>
            <SEO title="Contact" />
            <NavContainer>
                <Nav />
            </NavContainer>

            <InnerHero pageName="Contact" />
            <ContactForm />
            <MobileNav />

        </div>
    )

}

export default ContactPage