import React from 'react';

const Video = (props) => {

    return (

        <div className="bg-parallax-wrap">
            <div className="overlay"></div>
            <div className="media-container video-parallax">
                <div className="bg mob-bg par-elem" data-bg="images/bg/1.jpg"></div>
                <div className="video-container">
                    <video autoplay loop muted className="bgvid">
                        <div className="background-youtube-wrapper" data-vid={props.url} data-mv="1"> </div>
                    </video>
                </div>
                {/*  Vimeo code

                    <div className="background-vimeo" data-vim="97871257"> </div>

                        Source code

                    <source src="video/2.mp4" type="video/mp4" data-scrollax="properties: { translateY: '30%' }" />
                        
                */}
                    
            </div>
        </div>

    );
};

export default Video;