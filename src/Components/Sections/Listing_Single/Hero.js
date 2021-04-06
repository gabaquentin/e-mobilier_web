import React from 'react';

import avatar1 from '../../../Assets/images/avatar/1.jpg';
import bg1 from '../../../Assets/images/bg/1.jpg';

const Hero = () => {

    return (

        <section className="listing-hero-section hidden-section" data-scrollax-parent="true" id="sec1">
            <div className="bg-parallax-wrap">
                {/*ms-container*/}
                <div className="slideshow-container" data-scrollax="properties: { translateY: '300px' }">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {/*ms_item*/}
                            <div className="swiper-slide">
                                <div className="ms-item_fs fl-wrap full-height">
                                    <div className="bg" data-bg={bg1}/>
                                    <div className="overlay"/>
                                </div>
                            </div>
                            {/*ms_item end*/}
                            {/*ms_item*/}
                            <div className="swiper-slide ">
                                <div className="ms-item_fs fl-wrap full-height">
                                    <div className="bg" data-bg={bg1}/>
                                    <div className="overlay"/>
                                </div>
                            </div>
                            {/*ms_item end*/}
                            {/*ms_item*/}
                            <div className="swiper-slide">
                                <div className="ms-item_fs fl-wrap full-height">
                                    <div className="bg" data-bg={bg1}/>
                                    <div className="overlay"/>
                                </div>
                            </div>
                            {/*ms_item end*/}
                        </div>
                    </div>
                </div>
                {/*ms-container end*/}
                <div className="overlay"/>
            </div>
            <div className="slide-progress-wrap">
                <div className="slide-progress"/>
            </div>
            <div className="container">
                <div className="list-single-header-item  fl-wrap">
                    <div className="row">
                        <div className="col-md-9">
                            <h1>Premium Fitness Gym <span className="verified-badge"><i className="fal fa-check"/></span></h1>
                            <div className="geodir-category-location fl-wrap"><a href="#">
                                <i className="fas fa-map-marker-alt"/> W 85th St, New York, USA</a> <a href="#"> <i className="fal fa-phone"/>+38099231212</a> <a href="#"><i className="fal fa-envelope"/> yourmail@domain.com</a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <a className="fl-wrap list-single-header-column custom-scroll-link " href="#sec6">
                                <div className="listing-rating-count-wrap single-list-count">
                                    <div className="review-score">4.1</div>
                                    <div className="listing-rating card-popup-rainingvis" data-starrating2="4"/>
                                    <br/>
                                        <div className="reviews-count">2 reviews</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="list-single-header_bottom fl-wrap">
                    <a className="listing-item-category-wrap" href="#">
                        <div className="listing-item-category  blue-bg"><i className="fal fa-dumbbell"/></div>
                        <span>Fitness / Gym</span>
                    </a>
                    <div className="list-single-author"><a href="author-single.html"><span
                        className="author_avatar"> <img alt='' src={avatar1} />  </span>By Alisa Noory</a>
                    </div>
                    <div className="geodir_status_date gsd_close"><i className="fal fa-lock"/>Close Now</div>
                    <div className="list-single-stats">
                        <ul className="no-list-style">
                            <li><span className="viewed-counter"><i className="fas fa-eye"/> Viewed -  256 </span>
                            </li>
                            <li><span className="bookmark-counter"><i className="fas fa-heart"/> Bookmark -  445 </span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Hero;