import React, { Component } from 'react';

import avatar1 from '../../../Assets/images/avatar/1.jpg';

class Sec8 extends Component {

    render() {

        return (
            <section>
                <div className="container">
                    <div className="section-title">
                        <h2> Testimonilas</h2>
                        <div className="section-subtitle">Clients Reviews</div>
                        <span className="section-separator"/>
                        <p>Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla.</p>
                    </div>
                </div>
                <div className="clearfix"/>
                <div className="testimonilas-carousel-wrap fl-wrap">
                    <div className="listing-carousel-button listing-carousel-button-next"><i className="fas fa-caret-right"/></div>
                    <div className="listing-carousel-button listing-carousel-button-prev"><i className="fas fa-caret-left"/></div>
                    <div className="testimonilas-carousel">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {/*testi-item */}
                                <div className="swiper-slide">
                                    <div className="testi-item fl-wrap">
                                        <div className="testi-avatar"><img src={avatar1} alt="" /></div>
                                        <div className="testimonilas-text fl-wrap">
                                            <div className="listing-rating card-popup-rainingvis" data-starrating2="5"/>
                                            <p>"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "</p>
                                            <a href="#" className="testi-link" target="_blank">Via Facebook</a>
                                            <div className="testimonilas-avatar fl-wrap">
                                                <h3>Andy Dimasky</h3>
                                                <h4>Restaurant Owner</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*testi-item end */}
                                {/*testi-item */}
                                <div className="swiper-slide">
                                    <div className="testi-item fl-wrap">
                                        <div className="testi-avatar"><img src={avatar1} alt="" /></div>
                                        <div className="testimonilas-text fl-wrap">
                                            <div className="listing-rating card-popup-rainingvis" data-starrating2="5"/>
                                            <p>"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "</p>
                                            <a href="#" className="testi-link" target="_blank">Via Twitter</a>
                                            <div className="testimonilas-avatar fl-wrap">
                                                <h3>Frank Dellov</h3>
                                                <h4>Hotel Owner</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*testi-item end */}
                                {/*testi-item */}
                                <div className="swiper-slide">
                                    <div className="testi-item fl-wrap">
                                        <div className="testi-avatar"><img src={avatar1} alt="" /></div>
                                        <div className="testimonilas-text fl-wrap">
                                            <div className="listing-rating card-popup-rainingvis" data-starrating2="5"/>
                                            <p>"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "</p>
                                            <a href="#" className="testi-link" target="_blank">Via Facebook</a>
                                            <div className="testimonilas-avatar fl-wrap">
                                                <h3>Centa Simpson</h3>
                                                <h4>Restaurant Owner</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*testi-item end */}
                                {/*testi-item */}
                                <div className="swiper-slide">
                                    <div className="testi-item fl-wrap">
                                        <div className="testi-avatar"><img src={avatar1} alt="" /></div>
                                        <div className="testimonilas-text fl-wrap">
                                            <div className="listing-rating card-popup-rainingvis" data-starrating2="5"/>
                                            <p>"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "</p>
                                            <a href="#" className="testi-link" target="_blank">Via Instagram</a>
                                            <div className="testimonilas-avatar fl-wrap">
                                                <h3>Linda Svensky</h3>
                                                <h4>Shop Owner</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*testi-item end */}
                            </div>
                        </div>
                    </div>
                    <div className="tc-pagination"/>
                </div>
                <div className="waveWrapper waveAnimation">
                    <div className="waveWrapperInner bgMiddle">
                        <div className="wave-bg-anim waveMiddle" style={{backgroundImage: "url('images/wave-top.png')"}}/>
                    </div>
                    <div className="waveWrapperInner bgBottom">
                    <div className="wave-bg-anim waveBottom" style={{backgroundImage: "url('images/wave-top.png')"}}/>
                    </div>
                </div> 						
            </section>
        );
    }
}

export default Sec8;