import React from 'react'
import box1Auther from '../../images/Testimonial/Andrew-Rathore.png'
import box2Auther from '../../images/Testimonial/Mark-Smith.png'
import box3Auther from '../../images/Testimonial/Vera-Duncan.png'
class Testimonial extends React.Component {
    render() {
        return (
            <>
                <div className="testimonial mx-auto" id='testimonials'>
                    <p className='text-uppercase text-center'>
                        {this.props.testimonial}
                    </p>
                    <h1 className='text-center title'>
                        {this.props.title}
                    </h1>
                    <div className="boxing text-center d-flex justify-content-between mt-4 row">
                        <div className="box d-flex justify-content-between align-items-center flex-column rounded rounded-3 col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-10 col-10">
                            <img src={ box1Auther } alt={this.props.box1Auther} />
                            <h3>
                                {this.props.box1Auther}
                            </h3>
                            <p>
                                {this.props.box1Paragraph}
                            </p>
                        </div>
                        <div className="box d-flex justify-content-between align-items-center flex-column rounded rounded-3 col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-10 col-10">
                            <img src={box2Auther} alt={this.props.box2Auther} />
                            <h3>
                                {this.props.box2Auther}
                            </h3>
                            <p>
                                {this.props.box2Paragraph}
                            </p>
                        </div>
                        <div className="box d-flex justify-content-between align-items-center flex-column rounded rounded-3 col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-10 col-10">
                            <img src={box3Auther} alt={this.props.box3Auther} />
                            <h3>
                                {this.props.box3Auther}
                            </h3>
                            <p>
                                {this.props.box3Paragraph}
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
  }
}

export default Testimonial