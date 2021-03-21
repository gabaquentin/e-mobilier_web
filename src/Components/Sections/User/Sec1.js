import React, { useState, useEffect } from 'react';
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';

import Dashboard from './Dashboard';
import Feed from './Feed';
import Profile from './Profile';
import Chats from './Chats';
import Password from './Password';
import Listing from './Listing';
import Booking from './Booking';
import Review from './Review';
import Add_Listing from './Add-Listing';

const Sec1 = (props) => {

    const [dashboard, setDashboard] = useState(true);
    const [feed, setFeed] = useState(false);
    const [profile, setProfile] = useState(false);
    const [chat, setChat] = useState(false);
    const [password, setPassword] = useState(false);
    const [listing, setListing] = useState(false);
    const [booking, setBooking] = useState(false);
    const [review, setReview] = useState(false);
    const [add_listing, setAdd_listing] = useState(false);

    return (
        <section className="gray-bg main-dashboard-sec" id="sec1">
            <div className="container">
                {/*  dashboard-menu*/}
                        <div className="col-md-3">
                <div className="mob-nav-content-btn color2-bg init-dsmen fl-wrap"><i className="fal fa-bars"></i> Dashboard menu</div>
                <div className="clearfix"></div>
                <div className="fixed-bar fl-wrap" id="dash_menu">
                    <div className="user-profile-menu-wrap fl-wrap block_box">
                        {/* user-profile-menu*/}
                        <div className="user-profile-menu">
                            <h3>Main</h3>
                            <ul className="no-list-style">
                                <li><a href="#dashboard" className={dashboard ? 'user-profile-act' : ''} onClick={() => { setDashboard(true); setFeed(false); setProfile(false); setChat(false); setPassword(false); setListing(false); setBooking(false); setReview(false); setAdd_listing(false)   } }><i className="fal fa-chart-line"></i>Dashboard</a></li>
                                <li><a href="#feeds" className={feed ? 'user-profile-act' : ''} onClick={() => { setFeed(true); setDashboard(false); setProfile(false); setChat(false); setPassword(false); setListing(false); setBooking(false); setReview(false); setAdd_listing(false)  } }><i className="fal fa-rss"></i>Your Feed <span style={{ backgroundColor: '#5ECEB1' }}>7</span></a></li>
                                <li><a href="#edit-profile" className={profile ? 'user-profile-act' : ''} onClick={() => { setProfile(true); setDashboard(false); setFeed(false); setChat(false); setPassword(false); setListing(false); setBooking(false); setReview(false); setAdd_listing(false)  } }><i className="fal fa-user-edit"></i> Edit profile</a></li>
                                    <li><a href="#chat" className={chat ? 'user-profile-act' : ''} onClick={() => { setChat(true); setDashboard(false); setFeed(false); setProfile(false); setPassword(false); setListing(false); setBooking(false); setReview(false); setAdd_listing(false) }}><i className="fal fa-envelope"></i> Messages <span style={{ backgroundColor: '#5ECEB1' }}>{props.unreadMessages}</span></a></li>
                                <li><a href="#change-password" className={password ? 'user-profile-act' : ''} onClick={() => { setPassword(true); setDashboard(false); setFeed(false); setProfile(false); setChat(false); setListing(false); setBooking(false); setReview(false); setAdd_listing(false)  } }><i className="fal fa-key"></i>Change Password</a></li>
                                <li>
                                    <a href="#" className="submenu-link"><i className="fal fa-plus"></i>Submenu</a>
                                    <ul className="no-list-style">
                                        <li><a href="#"><i className="fal fa-th-list"></i> Submenu 2 </a></li>
                                        <li><a href="#"> <i className="fal fa-calendar-check"></i> Submenu 2</a></li>
                                        <li><a href="#"><i className="fal fa-comments-alt"></i>Submenu 2</a></li>
                                        <li><a href="#"><i className="fal fa-file-plus"></i> Submenu 2</a></li>
                                    </ul>

                                </li>
                            </ul>
                        </div>
                        {/* user-profile-menu end*/}
                                    {/* user-profile-menu*/}
                        <div className="user-profile-menu">
                            <h3>Listings</h3>
                            <ul className="no-list-style">
                                <li><a href="#listings" className={listing ? 'user-profile-act' : ''} onClick={() => { setListing(true); setDashboard(false); setFeed(false); setProfile(false); setChat(false); setPassword(false); setBooking(false); setReview(false); setAdd_listing(false)  } }><i className="fal fa-th-list"></i> My listings  </a></li>
                                <li><a href="#bookings" className={booking ? 'user-profile-act' : ''} onClick={() => { setBooking(true); setDashboard(false); setFeed(false); setProfile(false); setChat(false); setPassword(false); setListing(false); setReview(false); setAdd_listing(false)  } }> <i className="fal fa-calendar-check"></i> Bookings <span style={{ backgroundColor: '#5ECEB1' }}>2</span></a></li>
                                <li><a href="#reviews" className={review ? 'user-profile-act' : ''} onClick={() => { setReview(true); setDashboard(false); setFeed(false); setProfile(false); setChat(false); setPassword(false); setListing(false); setBooking(false); setAdd_listing(false)  } }><i className="fal fa-comments-alt"></i> Reviews </a></li>
                                <li><a href="#add-listing" className={add_listing ? 'user-profile-act' : ''} onClick={() => { setAdd_listing(true); setDashboard(false); setFeed(false); setProfile(false); setChat(false); setPassword(false); setListing(false); setBooking(false); setReview(false)  } }><i className="fal fa-file-plus"></i> Add New</a></li>
                                <li>
                                    <a href="#" className="submenu-link"><i className="fal fa-plus"></i>Submenu</a>
                                    <ul className="no-list-style">
                                        <li><a href="#"><i className="fal fa-th-list"></i> Submenu 2 </a></li>
                                        <li><a href="#"> <i className="fal fa-calendar-check"></i> Submenu 2</a></li>
                                        <li><a href="#"><i className="fal fa-comments-alt"></i>Submenu 2</a></li>
                                        <li><a href="#"><i className="fal fa-file-plus"></i> Submenu 2</a></li>
                                    </ul>

                                </li>
                            </ul>
                        </div>
                        {/* user-profile-menu end*/}
                        <button className="logout_btn color2-bg" onClick={() => { props.dispatch({ type: "disconnected" }); } }>Log Out <i className="fas fa-sign-out"></i></button>
                    </div>
                </div>
                <a className="back-tofilters color2-bg custom-scroll-link fl-wrap" href="#dash_menu">Back to Menu<i className="fas fa-caret-up"></i></a>
                </div>
                {/* dashboard-menu  end*/}
                {/* dashboard content*/}
                {dashboard ? <Dashboard /> : ''}
                {feed ? <Feed /> : ''}
                {profile ? <Profile user={props.user} state={props.state} dispatch={props.dispatch} /> : ''}
                {chat ? <Chats user={props.user} state={props.state} dispatch={props.dispatch} /> : ''}
                {password ? <Password user={props.user} dispatch={props.dispatch}/> : ''}
                {listing ? <Listing /> : ''}
                {booking ? <Booking /> : ''}
                {review ? <Review /> : ''}
                {add_listing ? <Add_Listing /> : ''}
                
                {/* dashboard content end*/}
            </div>
        </section>
    );

}

export default Sec1;