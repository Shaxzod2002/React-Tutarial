import React from "react";
import spotify from '../../images/Companies/spotify.png'
import slack from '../../images/Companies/slack.png'
import dropbox from '../../images/Companies/dropbox.png'
import zoom from '../../images/Companies/zoom.png'

class Companies extends React.Component {
    render() {
        return (
            <>
                <div className="companies d-flex flex-column align-items-center justify-content-center">
                    <p className="title text-center">
                        {this.props.title}
                    </p>
                    <div className="companies-brand d-flex justify-content-evenly align-items-center flex-wrap">
                        <img src={spotify} alt="spotify" />
                        <img src={slack} alt="slack" />
                        <img src={dropbox} alt="dropbox" />
                        <img src={zoom} alt="zoom" />
                    </div>
                </div>
            </>
        )
    }
}

export default Companies;