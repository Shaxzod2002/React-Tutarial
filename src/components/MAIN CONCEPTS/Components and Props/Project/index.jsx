import React from 'react'
import Brending from './pages/Brending'
import Companies from './pages/Companies'
import Contact from './pages/Contact'
import Custome from './pages/Custome'
import Footer from './pages/Footer'
import Header from './pages/Header'
import Navbar from './pages/Navbar'
import Testimonial from './pages/Testimonial'

import './sass/style.css'

export default function Project() {
    const navbar = {
        brend: "Digital Agency",
        home: "home",
        about: "about",
        testimonials: "Testimonials",
        contact: "contact"
    }
    const header = {
        headerLetfTitle: 'Building digital products, brands & experience',
        headerLeftParagraph: 'Digital Agency is your online team mangement tool that easy and prompt',
        headerLetfLink: 'Contact Us'
    }

    const companies = {
        title: 'Trusted by 4,000+ companies',
    }

    const brending = {
        title: 'Branding & Design system',
        paragraph: 'Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups'
    }

    const custome = {
        title: 'Custome & Plugin Development',
        paragraph: 'Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups'
    }

    const testimonial = {
        testimonial: 'Testimonials',
        title: 'Read What Other have to Say',
        box1: {
            auther: 'Andrew Rathore',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.'
        },
        box2: {
            auther: 'Vera Duncan',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.'
        },
        box3: {
            auther: 'Mark Smith',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.'
        }
    }

    const contact = {
        title: 'Be a part of the next big thing',
        paragraph: 'We work with Brans, Startups, to SMEs. Colaborate for more impact and growt',
        btn: 'Contact Us'
    }

    const footer = {
        DigitalAgency: {
            title: 'Digital Agency',
            paragraph: 'Building digital products, brands & experience'
        },

        Resources: {
            title: 'Resources',
            Guides: 'Guides',
            Blog: 'Blog',
            CuistomerStories: 'Cuistomer Stories',
            Glossery: 'Glossery'
        },

        Company: {
            title: 'Company',
            About: 'About Us',
            Careers: 'Careers',
            Partners: 'Partners',
            Contact: 'Contact Us'
        },

        SocialMedia: {
            title: 'Social Media',
            LinkedIn: 'LinkedIn',
            Facebook: 'Facebook',
            Instagram: 'Instagram',
            Twitter: 'Twitter'
        }
    }

    return (
        <div className='container-fluid'>
            <div className="boxing row">
                <div className="left-top-circle"></div>
                <Navbar
                    brend={navbar.brend}
                    home={navbar.home}
                    about={navbar.about}
                    testimonials={navbar.testimonials}
                    contact={navbar.contact}
                />
                <Header
                    HeaderLetfTitle={header.headerLetfTitle}
                    HeaderLetfParagraph={header.headerLeftParagraph}
                    HeaderLetfLink={header.headerLetfLink}
                />
                <Companies
                    title={companies.title}
                />
                <Brending
                    title={brending.title}
                    paragraph={brending.paragraph}
                />
                <div className="right-center-circle"></div>
                <Custome
                    title={custome.title}
                    paragraph={custome.paragraph}
                />
                <Testimonial
                    testimonial={testimonial.testimonial}
                    title={testimonial.title}
                    box1Auther={testimonial.box1.auther}
                    box1Paragraph={testimonial.box1.paragraph}
                    box2Auther={testimonial.box2.auther}
                    box2Paragraph={testimonial.box2.paragraph}
                    box3Auther={testimonial.box3.auther}
                    box3Paragraph={testimonial.box3.paragraph}
                />
                <Contact
                    title={contact.title}
                    paragraph={contact.paragraph}
                    btn={contact.btn}
                />
                <Footer
                    DigitalAgencytitle={footer.DigitalAgency.title}
                    DigitalAgencyParagraph={footer.DigitalAgency.paragraph}
                    ResourcesTitle={footer.Resources.title}
                    ResourcesGuides={footer.Resources.Guides}
                    ResourcesBlog={footer.Resources.Blog}
                    ResourcesCuistomerStories={footer.Resources.CuistomerStories}
                    ResourcesGlossery={footer.Resources.Glossery}
                    CompanyTitle={footer.Company.title}
                    CompanyAbout={footer.Company.About}
                    CompanyCareers={footer.Company.Careers}
                    CompanyPartners={footer.Company.Partners}
                    CompanyContact={footer.Company.Contact}
                    SocialMediaTitle={footer.SocialMedia.title}
                    SocialMediaLinkedIn={footer.SocialMedia.LinkedIn}
                    SocialMediaFacebook={footer.SocialMedia.Facebook}
                    SocialMediaInstagram={footer.SocialMedia.Instagram}
                    SocialMediaTwitter={footer.SocialMedia.Twitter}
                />
            </div>
        </div>
    )
}
