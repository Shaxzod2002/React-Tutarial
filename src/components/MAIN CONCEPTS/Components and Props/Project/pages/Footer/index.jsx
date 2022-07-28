import React from "react";

class Footer extends React.Component{
    render() {
        return (
            <>
                <div className="footer" id="footer">
                    <div className="row d-flex page mx-auto">
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 d-flex flex-column align-items-center">
                            <h3 className="title">
                                {this.props.DigitalAgencytitle}
                            </h3>
                            <p className="paragraph text-capitalize text-center">
                                {this.props.DigitalAgencyParagraph}
                            </p>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 d-flex flex-column align-items-center">
                            <h3 className="title">
                                {this.props.ResourcesTitle}
                            </h3>
                            <p>
                                <a href="#" className="text-decoration-none text-dark">
                                    {this.props.ResourcesGuides}
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-decoration-none text-dark">
                                    {this.props.ResourcesBlog}
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-decoration-none text-dark">
                                    {this.props.ResourcesCuistomerStories}
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-decoration-none text-dark">
                                    {this.props.ResourcesGlossery}
                                </a>
                            </p>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 d-flex flex-column align-items-center">
                            <h3 className="title">
                                {this.props.CompanyTitle}
                            </h3>
                            <p>
                                <a href="#" className="text-decoration-none text-dark">
                                    {this.props.CompanyAbout}
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-decoration-none text-dark">
                                    {this.props.CompanyCareers}
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-decoration-none text-dark">
                                    {this.props.CompanyPartners}
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-decoration-none text-dark">
                                    {this.props.CompanyContact}
                                </a>
                            </p>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 d-flex flex-column align-items-center">
                            <h3 className="title">
                                {this.props.SocialMediaTitle}
                            </h3>
                            <p>
                                <a href="https://www.linkedin.com/in/webshohdev/" className="text-decoration-none text-dark">
                                    {this.props.SocialMediaLinkedIn}
                                </a>
                            </p>
                            <p>
                                <a href="https://www.facebook.com/profile.php?id=100075132042535" className="text-decoration-none text-dark">
                                    {this.props.SocialMediaFacebook}
                                </a>
                            </p>
                            <p>
                                <a href="https://www.instagram.com/raximovshaxzodbek2002/" className="text-decoration-none text-dark">
                                    {this.props.SocialMediaInstagram}
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-decoration-none text-dark">
                                    {this.props.SocialMediaTwitter}
                                </a>
                            </p>
                        </div>
                        <p className="text-center">
                            © WebShohDev. All rights reserved
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer