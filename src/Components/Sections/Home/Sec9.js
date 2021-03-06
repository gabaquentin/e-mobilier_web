import React, { Component } from 'react';

import clients1 from '../../../Assets/images/clients/1.png';

class Sec9 extends Component {

    render() {

        return (
            <section className="gray-bg">
                <div className="container">
                    <div className="clients-carousel-wrap fl-wrap">
                        <div className="cc-btn   cc-prev"><i className="fal fa-angle-left"></i></div>
                        <div className="cc-btn cc-next"><i className="fal fa-angle-right"></i></div>
                        <div className="clients-carousel">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    {/* client-item */}
                                    <div className="swiper-slide">
                                        <a href="#" className="client-item"><img src={clients1} alt="" /></a>
                                    </div>
                                    {/* client-item end */}
                                    {/* client-item */}
                                    <div className="swiper-slide">
                                        <a href="#" className="client-item"><img src={clients1} alt="" /></a>
                                    </div>
                                    {/* client-item end */}
                                    {/* client-item */}
                                    <div className="swiper-slide">
                                        <a href="#" className="client-item"><img src={clients1} alt="" /></a>
                                    </div>
                                    {/* client-item end */}
                                    {/* client-item */}
                                    <div className="swiper-slide">
                                        <a href="#" className="client-item"><img src={clients1} alt="" /></a>
                                    </div>
                                    {/* client-item end */}
                                    {/* client-item */}
                                    <div className="swiper-slide">
                                        <a href="#" className="client-item"><img src={clients1} alt="" /></a>
                                    </div>
                                    {/* client-item end */}
                                    {/* client-item */}
                                    <div className="swiper-slide">
                                        <a href="#" className="client-item"><img src={clients1} alt="" /></a>
                                    </div>
                                    {/* client-item end */}                                                                                                                                                                                                                                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Sec9;