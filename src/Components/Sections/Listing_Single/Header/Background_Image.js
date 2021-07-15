import React from 'react';

const Background_Image = (props) => {

    return (

        <div className="bg-parallax-wrap">
            <div className="bg par-elem " data-bg={ props.bg } data-scrollax="properties: { translateY: '30%' }"></div>
            <div className="overlay">
                {props.Mode === "Edit" ?
                    <div class="container">
                        <div class="section-title center-align big-title">
                            <h2><span>Edit Mode</span></h2>
                        </div>
                    </div>
                    :
                    ""
                }
            </div>
        </div>

    );
};

export default Background_Image;