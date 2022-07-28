import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
class Brending extends React.Component {
    render() {
        return (
            <>
                <div className="brending row" id='about'>
                    <div className="left col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"></div>
                    <div className="right col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center">
                        <h1>
                            {this.props.title}
                        </h1>
                        <p>
                            {this.props.paragraph}
                        </p>
                        <HiArrowNarrowRight className='arrow-right' />
                    </div>
                </div>
            </>
        )
    }
}

export default Brending