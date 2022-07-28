import React from 'react'

class Navbar extends React.Component {
    render() {
        return (
            <>
                <div className="d-flex navbar justify-content-center">
                    <div className="nav-brend col-xxl-5 col-xl-5 col-lg-5 col-md-10 col-sm-10 col-12 d-flex justify-content-center align-items-center">
                        <p className='text-uppercase h5'>
                            {this.props.brend}
                        </p>
                    </div>
                    <ul className="nav-menu d-flex col-xxl-5 col-xl-5 col-lg-5 col-md-10 col-sm-10 col-12 align-items-center list-unstyled d-flex justify-content-center gap-4 text-uppercase">
                        <li className="list-item">
                            <a href="#header" className="list-link text-decoration-none text-dark">
                                {this.props.home}
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="#about" className="list-link text-decoration-none text-dark">
                                {this.props.about}
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="#testimonials" className="list-link text-decoration-none text-dark">
                                {this.props.testimonials}
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="#contact" className="list-link text-decoration-none text-dark">
                                {this.props.contact}
                            </a>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Navbar