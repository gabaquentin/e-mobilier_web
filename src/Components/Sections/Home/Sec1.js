import React, { Component } from 'react';

import avatar1 from '../../../Assets/images/avatar/1.jpg';
import all1 from '../../../Assets/images/all/1.jpg';

class Sec1 extends Component {

    render() {

        return (
            <section className="slw-sec" id="sec1">
                <div className="section-title">
                    <h2>The Latest Listings</h2>
                    <div className="section-subtitle">Newest  Listings</div>
                    <span className="section-separator"/>
                    <p>Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum.</p>
                </div>
                <div className="listing-slider-wrap fl-wrap">
                    <div className="listing-slider fl-wrap">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {/* swiper-slide */}
                                <div className="swiper-slide">
                                    <div className="listing-slider-item fl-wrap">
                                        {/* listing-item */}
                                        <div className="listing-item listing_carditem">
                                            <article className="geodir-category-listing fl-wrap">
                                                <div className="geodir-category-img">
                                                    <div className="geodir-js-favorite_btn"><i className="fal fa-heart"/><span>Save</span></div>
                                                    <a href="listing-single.html" className="geodir-category-img-wrap fl-wrap">
                                                        <img src={all1} alt="" /> 
                                                    </a>
                                                    <div className="geodir_status_date gsd_open"><i className="fal fa-lock-open"/>Open Now</div>
                                                    <div className="geodir-category-opt">
                                                        <div className="geodir-category-opt_title">
                                                            <h4><a href="listing-single.html">The Goggi Restaurant</a></h4>
                                                            <div className="geodir-category-location"><a href="#"><i className="fas fa-map-marker-alt"/>  34-42 Montgomery St , NY, USA</a></div>
                                                        </div>
                                                        <div className="listing-rating-count-wrap">
                                                            <div className="review-score">4.1</div>
                                                            <div className="listing-rating card-popup-rainingvis" data-starrating2="4"/>
                                                                <br/>
                                                                <div className="reviews-count">26 reviews</div>
                                                        </div>
                                                        <div className="listing_carditem_footer fl-wrap">
                                                            <a className="listing-item-category-wrap" href="#">
                                                                <div className="listing-item-category red-bg"><i className="fal fa-cheeseburger"/></div>
                                                                <span>Restaurants</span>
                                                            </a>
                                                            <div className="price-level geodir-category_price">
                                                                <span className="price-level-item" data-pricerating="2"/>
                                                                <span className="price-name-tooltip">Pricey</span>
                                                            </div>
                                                            <div className="post-author"><a href="#"><img src={avatar1} alt="" /><span>By , Alisa Noory</span></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                        {/* listing-item end */}
                                    </div>
                                </div>
                                {/* swiper-slide end */}
                                {/* swiper-slide */}
                                <div className="swiper-slide">
                                    <div className="listing-slider-item fl-wrap">
                                        {/* listing-item */}
                                            <div className="listing-item listing_carditem">
                                            <article className="geodir-category-listing fl-wrap">
                                                <div className="geodir-category-img">
                                                    <div className="geodir-js-favorite_btn"><i className="fal fa-heart"/><span>Save</span></div>
                                                    <a href="listing-single.html" className="geodir-category-img-wrap fl-wrap">
                                                        <img src={all1} alt="" /> 
                                                    </a>
                                                    <div className="geodir_status_date gsd_close"><i className="fal fa-lock"/>Close Now</div>
                                                    <div className="geodir-category-opt">
                                                        <div className="geodir-category-opt_title">
                                                            <h4><a href="listing-single.html">Gym in the Center</a></h4>
                                                            <div className="geodir-category-location"><a href="#"><i className="fas fa-map-marker-alt"/>  70 Bright St New York, USA</a></div>
                                                        </div>
                                                        <div className="listing-rating-count-wrap">
                                                            <div className="review-score">5.0</div>
                                                            <div className="listing-rating card-popup-rainingvis" data-starrating2="5"/>
                                                            <br/>
                                                            <div className="reviews-count">7 reviews</div>
                                                        </div>
                                                        <div className="listing_carditem_footer fl-wrap">
                                                            <a className="listing-item-category-wrap" href="#">
                                                                <div className="listing-item-category blue-bg"><i className="fal fa-dumbbell"/></div>
                                                                <span>Fitness / Gym</span>
                                                            </a>
                                                            <div className="price-level geodir-category_price">
                                                                <span className="price-level-item" data-pricerating="3"/>
                                                                <span className="price-name-tooltip">Moderate</span>
                                                            </div>
                                                            <div className="post-author"><a href="#"><img src={avatar1} alt="" /><span>By , Mark Rose</span></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                        {/* listing-item end */}
                                    </div>
                                </div>
                                {/* swiper-slide end */}
                                {/* swiper-slide */}
                                <div className="swiper-slide">
                                    <div className="listing-slider-item fl-wrap">
                                        {/* listing-item */}
                                        <div className="listing-item listing_carditem">
                                            <article className="geodir-category-listing fl-wrap">
                                                <div className="geodir-category-img">
                                                    <div className="geodir-js-favorite_btn"><i className="fal fa-heart"/><span>Save</span></div>
                                                    <a href="listing-single.html" className="geodir-category-img-wrap fl-wrap">
                                                        <img src={all1} alt="" /> 
                                                    </a>
                                                    <div className="geodir_status_date gsd_open"><i className="fal fa-lock-open"/>Open Now</div>
                                                    <div className="geodir-category-opt">
                                                        <div className="geodir-category-opt_title">
                                                            <h4><a href="listing-single.html">Moonlight Hotel</a></h4>
                                                            <div className="geodir-category-location"><a href="#"><i className="fas fa-map-marker-alt"/> 34-42 Montgomery St , NY, USA</a></div>
                                                        </div>
                                                        <div className="listing-rating-count-wrap">
                                                            <div className="review-score">4.2</div>
                                                            <div className="listing-rating card-popup-rainingvis" data-starrating2="4"/>
                                                            <br/>
                                                            <div className="reviews-count">3 reviews</div>
                                                        </div>
                                                        <div className="listing_carditem_footer fl-wrap">
                                                            <a className="listing-item-category-wrap" href="#">
                                                                <div className="listing-item-category  yellow-bg"><i className="fal fa-bed"/></div>
                                                                <span>Hotels</span>
                                                            </a>
                                                            <div className="price-level geodir-category_price">
                                                                <span className="price-level-item" data-pricerating="4"/>
                                                                <span className="price-name-tooltip">Ultra Hight</span>
                                                            </div>
                                                            <div className="post-author"><a href="#"><img src={avatar1} alt="" /><span>By , Nasty Wood</span></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                        {/* listing-item end */}
                                    </div>
                                </div>
                                {/* swiper-slide end */}
                                {/* swiper-slide */}
                                <div className="swiper-slide">
                                    <div className="listing-slider-item fl-wrap">
                                        {/* listing-item */}
                                        <div className="listing-item listing_carditem">
                                            <article className="geodir-category-listing fl-wrap">
                                                <div className="geodir-category-img">
                                                    <div className="geodir-js-favorite_btn"><i className="fal fa-heart"/><span>Save</span></div>
                                                    <a href="listing-single.html" className="geodir-category-img-wrap fl-wrap">
                                                        <img src={all1} alt="" /> 
                                                    </a>
                                                    <div className="geodir_status_date gsd_open"><i className="fal fa-lock-open"/>Open Now</div>
                                                    <div className="geodir-category-opt">
                                                        <div className="geodir-category-opt_title">
                                                            <h4><a href="listing-single.html">Shop in Aurora Center</a></h4>
                                                            <div className="geodir-category-location"><a href="#"><i className="fas fa-map-marker-alt"/> 40 Journal Square Plaza, NJ,  USA</a></div>
                                                        </div>
                                                        <div className="listing-rating-count-wrap">
                                                            <div className="review-score">5.0</div>
                                                            <div className="listing-rating card-popup-rainingvis" data-starrating2="5"/>
                                                            <br/>
                                                            <div className="reviews-count">2 reviews</div>
                                                        </div>
                                                            <div className="listing_carditem_footer fl-wrap">
                                                                <a className="listing-item-category-wrap" href="#">
                                                                    <div className="listing-item-category green-bg"><i className="fal fa-cart-arrow-down"/></div>
                                                                    <span>Shopping</span>
                                                                </a>
                                                            <div className="price-level geodir-category_price">
                                                                <span className="price-level-item" data-pricerating="4"/>
                                                                <span className="price-name-tooltip">Ultra Hight</span>
                                                            </div>
                                                            <div className="post-author"><a href="#"><img src={avatar1} alt="" /><span>By , Kliff Antony</span></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                        {/* listing-item end */}
                                    </div>
                                </div>
                                {/* swiper-slide end */}
                            </div>
                        </div>
                        <div className="listing-carousel-button listing-carousel-button-next2"><i className="fas fa-caret-right"/></div>
                        <div className="listing-carousel-button listing-carousel-button-prev2"><i className="fas fa-caret-left"/></div>
                    </div>
                    <div className="tc-pagination_wrap">
                        <div className="tc-pagination2"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Sec1;