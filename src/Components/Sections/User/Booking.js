import React from 'react';

import avatar1 from '../../../Assets/images/avatar/1.jpg';

const Booking = () => {

    return (
        <div className="col-md-9">
            <div className="dashboard-title   fl-wrap">
                <h3>Bookings</h3>
            </div>
            {/* profile-edit-container*/}
            <div className="profile-edit-container fl-wrap block_box">
                {/* booking-list*/}
                                <div className="booking-list">
                    <div className="booking-list-message">
                        <div className="booking-list-contr">
                            <a href="#" className="green-bg tolt" data-microtip-position="left" data-tooltip="Approve"><i className="fal fa-check"/></a>
                            <a href="#" className="color-bg tolt" data-microtip-position="left" data-tooltip="Cancel"><i className="fal fa-trash"/></a>
                        </div>
                        <div className="booking-list-message-avatar">
                            <img src={avatar1} alt="" />
                                        </div>
                            <span className="booking-list-new green-bg">New</span>
                            <div className="booking-list-message-text">
                                <h4>Andy Smith - <span>27 December 2019</span></h4>
                                <div className="booking-details fl-wrap">
                                    <span className="booking-title">Listing Item :</span> :
                                                <span className="booking-text"><a href="listing-sinle.html">Premium Plaza Hotel</a></span>
                                </div>
                                <div className="booking-details fl-wrap">
                                    <span className="booking-title">Persons :</span>
                                    <span className="booking-text">4 Peoples</span>
                                </div>
                                <div className="booking-details fl-wrap">
                                    <span className="booking-title">Booking Date :</span>
                                    <span className="booking-text">02.03.2019  - 10.03.2019</span>
                                </div>
                                <div className="booking-details fl-wrap">
                                    <span className="booking-title">Mail :</span>
                                    <span className="booking-text"><a href="#" target="_top">yormail@domain.com</a></span>
                                </div>
                                <div className="booking-details fl-wrap">
                                    <span className="booking-title">Phone :</span>
                                    <span className="booking-text"><a href="tel:+496170961709" target="_top">+496170961709</a></span>
                                </div>
                                <div className="booking-details fl-wrap">
                                    <span className="booking-title">Payment State :</span>
                                    <span className="booking-text"> <strong className="done-paid">Paid  </strong>  using Paypal</span>
                                </div>
                                <span className="fw-separator"/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere convallis purus non cursus. Cras metus neque, gravida sodales massa ut. </p>
                            </div>
                        </div>
                    </div>
                    {/* dashboard-list end*/}
                            </div>
                {/* profile-edit-container end*/}
                            {/* profile-edit-container*/}
                            <div className="profile-edit-container fl-wrap block_box">
                    {/* booking-list*/}
                                <div className="booking-list">
                        <div className="booking-list-message">
                            <div className="booking-list-contr">
                                <a href="#" className="green-bg tolt" data-microtip-position="left" data-tooltip="Approve"><i className="fal fa-check"/></a>
                                <a href="#" className="color-bg tolt" data-microtip-position="left" data-tooltip="Cancel"><i className="fal fa-trash"/></a>
                            </div>
                            <div className="booking-list-message-avatar">
                                <img src={avatar1} alt="" />
                                        </div>
                                <div className="booking-list-message-text">
                                    <h4>Adam Forser - <span>17 october 2018</span></h4>
                                    <div className="booking-details fl-wrap">
                                        <span className="booking-title">Listing Item :</span> :
                                                <span className="booking-text"><a href="listing-sinle.html">Luxary Resaturant</a></span>
                                    </div>
                                    <div className="booking-details fl-wrap">
                                        <span className="booking-title">Persons :</span>
                                        <span className="booking-text">2 Peoples</span>
                                    </div>
                                    <div className="booking-details fl-wrap">
                                        <span className="booking-title">Booking Date :</span>
                                        <span className="booking-text"> 10.03.2019</span>
                                    </div>
                                    <div className="booking-details fl-wrap">
                                        <span className="booking-title">Mail :</span>
                                        <span className="booking-text"><a href="#" target="_top">yormail@domain.com</a></span>
                                    </div>
                                    <div className="booking-details fl-wrap">
                                        <span className="booking-title">Phone :</span>
                                        <span className="booking-text"><a href="tel:+496170961709" target="_top">+496170961709</a></span>
                                    </div>
                                    <span className="fw-separator"/>
                                    <p> Nunc posuere convallis purus non cursus. Cras metus neque, gravida sodales massa ut. </p>
                                </div>
                            </div>
                        </div>
                        {/* dashboard-list end*/}
                            </div>
                    {/* profile-edit-container end*/}
                            <div className="pagination">
                        <a href="#" className="prevposts-link"><i className="fas fa-caret-left"/><span>Prev</span></a>
                        <a href="#">1</a>
                        <a href="#" className="current-page">2</a>
                        <a href="#">3</a>
                        <a href="#">...</a>
                        <a href="#">7</a>
                        <a href="#" className="nextposts-link"><span>Next</span><i className="fas fa-caret-right"/></a>
                    </div>
                </div>
    );
};

export default Booking;