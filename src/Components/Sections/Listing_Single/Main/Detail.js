import React from 'react';

const Detail = () => {

    return (

<>
    <div className="list-single-facts fl-wrap">
        <div className="row">
            <div className="col-md-4">
                {/* inline-facts */}
                <div className="inline-facts-wrap gradient-bg ">
                    <div className="inline-facts">
                        <i className="fal fa-smile-plus"/>
                        <div className="milestone-counter">
                            <div className="stats animaper">
                                <div className="num" data-content="0" data-num="245">0</div>
                            </div>
                        </div>
                        <h6>New Visiters Every Week</h6>
                    </div>
                    <div className="stat-wave">
                        <svg viewBox="0 0 100 25">
                            <path fill="#fff" d="M0 30 V12 Q30 17 55 2 T100 11 V30z"/>
                        </svg>
                    </div>
                </div>
                {/* inline-facts end */}
            </div>
            <div className="col-md-4">
                {/* inline-facts  */}
                <div className="inline-facts-wrap gradient-bg ">
                    <div className="inline-facts">
                        <i className="fal fa-users"/>
                        <div className="milestone-counter">
                            <div className="stats animaper">
                                <div className="num" data-content="0" data-num="2557">0</div>
                            </div>
                        </div>
                        <h6>Happy customers every year</h6>
                    </div>
                    <div className="stat-wave">
                        <svg viewBox="0 0 100 25">
                            <path fill="#fff" d="M0 30 V12 Q30 17 55 12 T100 11 V30z"/>
                        </svg>
                    </div>
                </div>
                {/* inline-facts end */}
            </div>
            <div className="col-md-4">
                {/* inline-facts  */}
                <div className="inline-facts-wrap gradient-bg ">
                    <div className="inline-facts">
                        <i className="fal fa-award"/>
                        <div className="milestone-counter">
                            <div className="stats animaper">
                                <div className="num" data-content="0" data-num="25">0</div>
                            </div>
                        </div>
                        <h6>Won Awards</h6>
                    </div>
                    <div className="stat-wave">
                        <svg viewBox="0 0 100 25">
                            <path fill="#fff" d="M0 30 V12 Q30 12 55 5 T100 11 V30z"/>
                        </svg>
                    </div>
                </div>
                {/* inline-facts end */}
            </div>
        </div>
    </div>
    {/* list-single-facts end */}
    {/* list-single-main-item */}
    <div className="list-single-main-item fl-wrap block_box" id="sec3">
        <div className="list-single-main-item-title">
            <h3>Description</h3>
        </div>
        <div className="list-single-main-item_content fl-wrap">
            <p>Praesent eros turpis, commodo vel justo at, pulvinar mollis eros. Mauris aliquet eu quam id ornare. Morbi
                ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. Vivamus adipiscing eros
                quis orci fringilla, sed pretium lectus viverra. Pellentesque habitant morbi tristique senectus et netus
                et malesuada fames ac turpis egestas. Donec nec velit non odio aliquam suscipit. Sed non neque faucibus,
                condimentum lectus at, accumsan enim. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus
                lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar
                nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor
                iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.</p>
            <a href="#" className="btn color2-bg float-btn">Visit Website<i className="fal fa-chevron-right"/></a>
        </div>
    </div>
    {/* list-single-main-item end */}
    {/* list-single-main-item */}
    <div className="list-single-main-item fl-wrap block_box">
        <div className="list-single-main-item-title">
            <h3>Listing Features</h3>
        </div>
        <div className="list-single-main-item_content fl-wrap">
            <div className="listing-features fl-wrap">
                <ul className="no-list-style">
                    <li><a href="#"><i className="fa fa-rocket"/> Elevator in building</a></li>
                    <li><a href="#"><i className="fa fa-wifi"/> Free Wi Fi</a></li>
                    <li><a href="#"><i className="fa fa-motorcycle"/> Free Parking</a></li>
                    <li><a href="#"><i className="fa fa-cloud"/> Air Conditioned</a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"/> Online Ordering</a></li>
                    <li><a href="#"><i className="fa fa-paw"/> Pet Friendly</a></li>
                </ul>
            </div>
        </div>
    </div>
</>

    );
};

export default Detail;