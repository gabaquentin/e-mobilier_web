import React from 'react';

import all1 from '../../../../Assets/images/all/1.jpg';

const Gallery = () => {

    return (

        <div className="list-single-main-item fl-wrap block_box" id="gallery">
            <div className="list-single-main-item-title">
                <h3>Gallery / Photos</h3>
            </div>
            <div className="list-single-main-item_content fl-wrap">
                <div className="single-carousel-wrap fl-wrap lightgallery">
                    <div className="sc-next sc-btn color2-bg"><i className="fas fa-caret-right"/></div>
                    <div className="sc-prev sc-btn color2-bg"><i className="fas fa-caret-left"/></div>
                    <div className="single-carousel fl-wrap full-height">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {/* swiper-slide*/}
                                <div className="swiper-slide">
                                    <div className="box-item">
                                        <img src={all1} alt="" />
                                            <a href={all1} className="gal-link popup-image"><i className="fa fa-search"/></a>
                                    </div>
                                </div>
                                {/* swiper-slide end*/}
                                {/* swiper-slide*/}
                                <div className="swiper-slide">
                                    <div className="box-item">
                                        <img src={all1} alt="" />
                                            <a href={all1} className="gal-link popup-image"><i className="fa fa-search"/></a>
                                    </div>
                                </div>
                                {/* swiper-slide end*/}
                                {/* swiper-slide*/}
                                <div className="swiper-slide">
                                    <div className="box-item">
                                        <img src={all1} alt="" />
                                            <a href={all1} className="gal-link popup-image"><i className="fa fa-search"/></a>
                                    </div>
                                </div>
                                {/* swiper-slide end*/}
                                {/* swiper-slide*/}
                                <div className="swiper-slide">
                                    <div className="box-item">
                                        <img src={all1} alt="" />
                                            <a href={all1} className="gal-link popup-image"><i className="fa fa-search"/></a>
                                    </div>
                                </div>
                                {/* swiper-slide end*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Gallery;