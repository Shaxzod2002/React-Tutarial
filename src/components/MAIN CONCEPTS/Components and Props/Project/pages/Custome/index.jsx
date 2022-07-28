import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'

class Custome extends React.Component {
    render() {
        return (
            <>
                <div className="custome row">
                    <div className="left d-flex flex-column justify-content-center col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <h1>
                            {this.props.title}
                        </h1>
                        <p>
                            {this.props.paragraph}
                        </p>
                        <HiArrowNarrowRight className='arrow-right-icon' />
                    </div>
                    <div className="right col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"></div>
                </div>
            </>
        )
    }
}

export default Custome