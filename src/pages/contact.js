import React from "react"
import InternalNav from "../components/internal-nav"
import InnerHero from "../components/InnerHero"
import MobileNav from "../components/mobile-nav"
import ContactForm from "../components/contact-form"
import SEO from "../components/seo"

const ContactPage = () => {
    
    return (
        <div>
            <SEO title="Contact" />
            <InternalNav />
            <InnerHero pageName="Contact" />
            <ContactForm />
            <MobileNav />

        </div>
    )

}

export default ContactPage