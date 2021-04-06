import React from 'react';

import thumbnails1 from '../../../../Assets/images/gallery/thumbnail/1.png';

const Similar_Listings = () => {

    return (

        <div className="box-widget-item fl-wrap block_box">
            <div className="box-widget-item-header">
                <h3>Similar listings :</h3>
            </div>
            <div className="box-widget  fl-wrap">
                <div className="box-widget-content">
                    {/*widget-posts*/}
                    <div className="widget-posts  fl-wrap">
                        <ul className="no-list-style">
                            <li>
                                <div className="widget-posts-img"><a href="listing-single.html"><img src={thumbnails1} alt="" /></a>
                                </div>
                                <div className="widget-posts-descr">
                                    <h4><a href="listing-single.html">Iconic Cafe</a></h4>
                                    <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"/> 40 Journal Square Plaza, NJ, USA</a>
                                    </div>
                                    <div className="widget-posts-descr-link"><a href="listing.html">Restaurants </a> <a href="listing.html">Cafe</a></div>
                                    <div className="widget-posts-descr-score">4.1</div>
                                </div>
                            </li>
                            <li>
                                <div className="widget-posts-img"><a href="listing-single.html"><img src={thumbnails1} alt="" /></a>
                                </div>
                                <div className="widget-posts-descr">
                                    <h4><a href="listing-single.html">MontePlaza Hotel</a></h4>
                                    <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"/> 70 Bright St New York, USA </a></div>
                                    <div className="widget-posts-descr-link"><a href="listing.html">Hotels </a></div>
                                    <div className="widget-posts-descr-score">5.0</div>
                                </div>
                            </li>
                            <li>
                                <div className="widget-posts-img"><a href="listing-single.html"><img src={thumbnails1} alt="" /></a>
                                </div>
                                <div className="widget-posts-descr">
                                    <h4><a href="listing-single.html">Rocko Band in Marquee Club</a></h4>
                                    <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"/>75 Prince St, NY, USA</a></div>
                                    <div className="widget-posts-descr-link"><a href="listing.html">Events</a></div>
                                    <div className="widget-posts-descr-score">4.2</div>
                                </div>
                            </li>
                            <li>
                                <div className="widget-posts-img"><a href="listing-single.html"><img src={thumbnails1} alt="" /></a>
                                </div>
                                <div className="widget-posts-descr">
                                    <h4><a href="listing-single.html">Premium Fitness Gym</a></h4>
                                    <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"/> W 85th St, New York, USA</a></div>
                                    <div className="widget-posts-descr-link"><a href="listing.html">Fitness</a> <a
                                        href="listing.html">Gym</a></div>
                                    <div className="widget-posts-descr-score">5.0</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* widget-posts end*/}
                </div>
            </div>
        </div>

    );
};

export default Similar_Listings;