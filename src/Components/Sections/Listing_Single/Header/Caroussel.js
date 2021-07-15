import React from 'react';

const Caroussel = (props) => {

    return (

        <>
            <div className="bg-parallax-wrap">
                {/*ms-container*/}
                <div className="slideshow-container" data-scrollax="properties: { translateY: '300px' }">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {/*ms_item*/}

                            {props.bg_list.map((item) =>

                                <div className="swiper-slide">
                                    <div className="ms-item_fs fl-wrap full-height">
                                        <div className="bg" data-bg={item} />
                                        <div className="overlay" />
                                    </div>
                                </div>

                            )}
                            {/*ms_item end*/}
                            
                        </div>
                    </div>
                </div>
                {/*ms-container end*/}
                <div className="overlay" />
            </div>
            <div className="slide-progress-wrap">
                <div className="slide-progress" />
            </div>
        </>

    );
};

export default Caroussel;