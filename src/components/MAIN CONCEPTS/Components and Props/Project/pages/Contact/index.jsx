import React from 'react'

class Contact extends React.Component {
    render() {
        return (
            <>
                <div className="contact d-flex justify-content-center align-items-center" id='contact'>
                    <div className="page mx-auto d-flex row">
                        <div className="left col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

                        </div>
                        <div className="right col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center">
                            <h1 className='title'>
                                {this.props.title}
                            </h1>
                            <p className='paragraph'>
                                {this.props.paragraph}
                            </p>
                            <a href='#' className='btn'>
                                {this.props.btn}
                            </a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Contact;