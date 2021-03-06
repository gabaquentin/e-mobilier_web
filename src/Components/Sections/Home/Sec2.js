import React, { Component } from 'react';

import all1 from '../../../Assets/images/all/1.jpg';

class Sec2 extends Component {

    render() {

        return (
            <section className="gray-bg hidden-section particles-wrapper">
                <div className="container">
                    <div className="section-title">
                        <h2>Explore Best Cities</h2>
                        <div className="section-subtitle">Catalog of Categories</div>
                        <span className="section-separator"></span>
                        <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus.</p>
                    </div>
                    <div className="listing-item-grid_container fl-wrap">
                        <div className="row">
                            {/* listing-item-grid */}
                            <div className="col-sm-4">
                                <div className="listing-item-grid">
                                    <div className="bg" data-bg={all1}></div>
                                    <div className="d-gr-sec"></div>
                                    <div className="listing-counter color2-bg"><span>16 </span> Locations</div>
                                    <div className="listing-item-grid_title">
                                        <h3><a href="listing.html">New York</a></h3>
                                        <p>Constant care and attention to the patients makes good record</p>
                                    </div>
                                </div>
                            </div>
                            {/* listing-item-grid end */}
                            {/* listing-item-grid */}
                            <div className="col-sm-4">
                                <div className="listing-item-grid">
                                    <div className="bg" data-bg={all1}></div>
                                    <div className="d-gr-sec"></div>
                                    <div className="listing-counter color2-bg"><span>22 </span> Locations</div>
                                    <div className="listing-item-grid_title">
                                        <h3><a href="listing.html">Paris</a></h3>
                                        <p>Constant care and attention to the patients makes good record</p>
                                    </div>
                                </div>
                            </div>
                            {/* listing-item-grid end */}
                            {/* listing-item-grid */}
                            <div className="col-sm-4">
                                <div className="listing-item-grid">
                                    <div className="bg" data-bg={all1}></div>
                                    <div className="d-gr-sec"></div>
                                    <div className="listing-counter color2-bg"><span>9 </span> Locations</div>
                                    <div className="listing-item-grid_title">
                                        <h3><a href="listing.html">Moscow</a></h3>
                                        <p>Constant care and attention to the patients makes good record</p>
                                    </div>
                                </div>
                            </div>
                            {/* listing-item-grid end */}
                            {/* listing-item-grid */}
                            <div className="col-sm-4">
                                <div className="listing-item-grid">
                                    <div className="bg" data-bg={all1}></div>
                                    <div className="d-gr-sec"></div>
                                    <div className="listing-counter color2-bg"><span>12 </span> Locations</div>
                                    <div className="listing-item-grid_title">
                                        <h3><a href="listing.html">Rome</a></h3>
                                        <p>Constant care and attention to the patients makes good record</p>
                                    </div>
                                </div>
                            </div>
                            {/* listing-item-grid end */}
                            {/* listing-item-grid */}
                            <div className="col-sm-8">
                                <div className="listing-item-grid">
                                    <div className="bg" data-bg={all1}></div>
                                    <div className="d-gr-sec"></div>
                                    <div className="listing-counter color2-bg"><span>33 </span> Locations</div>
                                    <div className="listing-item-grid_title">
                                        <h3><a href="listing.html">London</a></h3>
                                        <p>Constant care and attention to the patients makes good record</p>
                                    </div>
                                </div>
                            </div>
                            {/* listing-item-grid end */}
                        </div>
                    </div>
                    <a href="listing.html" class="btn dec_btn   color2-bg">View All Cities<i class="fal fa-arrow-alt-right"></i></a>
                </div>
            </section>
        );
    }
}

export default Sec2;