import React from 'react';

const Video = () => {

    return (

        <div className="list-single-main-item fl-wrap block_box" id="sec3">
            <div className="list-single-main-item-title">
                <h3>Promo Video</h3>
            </div>
            <div className="list-single-main-item_content fl-wrap">
                <div className="iframe-holder fl-wrap">
                    <div className="resp-video">
                        <iframe src="https://player.vimeo.com/video/161566855" width="640" height="360" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Video;