import React from 'react';

import bg1 from '../../../../Assets/images/bg/1.jpg';

const Banner = () => {

    return (

        <div className="box-widget-item fl-wrap">
            <div className="banner-wdget fl-wrap">
                <div className="overlay"/>
                <div className="bg" data-bg={bg1}/>
                <div className="banner-wdget-content fl-wrap">
                    <h4>Get two months free when you purchase a subscription.</h4>
                    <a href="#" className="color-bg">Book Now</a>
                </div>
            </div>
        </div>

    );
};

export default Banner;