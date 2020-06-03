import React from "react"
import Nav from "../components/nav"
import InnerHero from "../components/InnerHero"
import FooterNav from "../components/footer-nav"
import ContactForm from "../components/contact-form"
import SEO from "../components/seo"

const ContactPage = () => {
    
    return (
        <div>
            <SEO title="Contact" />
            <Nav />
            <InnerHero pageName="Contact" />
            <ContactForm />
            <FooterNav />

        </div>
    )

}

export default ContactPage