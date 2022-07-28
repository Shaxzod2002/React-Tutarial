import React from "react";

class Header extends React.Component {
    render() {
        return (
            <>
                <div className="header d-flex align-items-center row" id="header">
                    <div className="left col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <h1 className="title">
                            {this.props.HeaderLetfTitle}
                        </h1>
                        <p>
                            {this.props.HeaderLetfParagraph}
                        </p>
                        <a href="https://google.com">
                            {this.props.HeaderLetfLink}
                        </a>
                    </div>
                    <div className="right col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"></div>
                </div>
            </>
        )
    }
}

export default Header