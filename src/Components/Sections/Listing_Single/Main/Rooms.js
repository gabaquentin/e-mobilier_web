import React from 'react';

import all1 from '../../../../Assets/images/all/1.jpg';

const Rooms = () => {

    return (

        <div className="list-single-main-item fl-wrap block_box" id="sec4">
            <div className="list-single-main-item-title">
                <h3>Available Rooms</h3>
            </div>
            <div className="list-single-main-item_content fl-wrap">
                {/*   rooms-container */}
                <div className="rooms-container fl-wrap">
                    {/*  rooms-item */}
                    <div className="rooms-item fl-wrap">
                        <div className="rooms-media">
                            <img src={all1} alt="" />
                        </div>
                        <div className="rooms-details">
                            <div className="rooms-details-header fl-wrap">
                                <span className="rooms-price">$81 <strong> / person</strong></span>
                                <h3>Standard Family Room</h3>
                                <h5>Max Guests: <span>3 persons</span></h5>
                            </div>
                            <p>Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit
                                risus at metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus
                                lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae </p>
                        </div>
                    </div>
                    {/*  rooms-item end */}
                    {/*  rooms-item */}
                    <div className="rooms-item fl-wrap">
                        <div className="rooms-media">
                            <img src={all1} alt="" />
                        </div>
                        <div className="rooms-details">
                            <div className="rooms-details-header fl-wrap">
                                <span className="rooms-price">$122 <strong> / person</strong></span>
                                <h3>Superior Double Room</h3>
                                <h5>Max Guests: <span>4 persons</span></h5>
                            </div>
                            <p>Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit
                                risus at metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque.</p>
                        </div>
                    </div>
                    {/*  rooms-item end */}
                </div>
                {/*   rooms-container end */}
            </div>
        </div>

    );
};

export default Rooms;