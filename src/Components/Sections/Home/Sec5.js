import React, { Component } from 'react';

import bg1 from '../../../Assets/images/bg/1.jpg';

class Sec5 extends Component {

    render() {

        return (
            <section className="parallax-section" data-scrollax-parent="true">
                <div className="bg par-elem " data-bg={bg1} data-scrollax="properties: { translateY: '30%' }"/>
                <div className="overlay op7"/>
                {/* container */}
                <div className="container">
                    <div className="video_section-title fl-wrap">
                        <h4>Aliquam erat volutpat interdum</h4>
                        <h2>Get ready to start your exciting journey. <br/> Our agency will lead you through the amazing digital world</h2>
                    </div>
                    <a href="https://vimeo.com/70851162" className="promo-link big_prom   image-popup"><i className="fal fa-play"/><span>Promo Video</span></a>
                </div>
            </section>
        );
    }
}

export default Sec5;