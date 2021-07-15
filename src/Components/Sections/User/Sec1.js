import React, { useState, useEffect } from 'react';
import 'react-notifications/lib/notifications.css';
import $ from 'jquery';
import { Link, useHistory } from 'react-router-dom';

import Dashboard from './Dashboard';
import Feed from './Feed';
import Profile from './Profile';
import Password from './Password';
import Listing from './Listing';
import Booking from './Booking';
import Review from './Review';
import Add_Listing from './Add-Listing';
import Partner from "./Partner";
import {appendScript} from "../../../Assets/utils/appendScript";

const Sec1 = (props) => {

    const [state, setState] = useState({});
    const [previous, setPrevious] = useState("");
    let history = useHistory();

    const url = window.location.href;
    let current = (new URL(url));
    const pathname = current.pathname;

    var arr = url.split("/");
    var location = arr[0] + "//" + arr[2];

    useEffect(() => {
        const hash = url.substring(url.indexOf("#")+1);
        if(hash !== 'partner' || hash !== 'add_listing')
            appendScript("/js/niceSelect.js", false);
        if(hash !== location+pathname) {
            if ($.inArray(hash, ['dashboard', 'feed', 'profile', 'password','partner', 'listing', 'booking', 'review', 'add_listing']) !== -1) {
                if($.inArray(hash, ['partner', 'listing', 'booking', 'review', 'add_listing']) !== -1){
                    if(props.user.Role === 'CUSTOMER'){
                        setState({...state, dashboard: true}); setPrevious("dashboard");
                    }
                    else{
                        setState({...state, [hash]: true, [previous]: false});
                        setPrevious(hash);
                    }
                }else{
                    setState({...state, [hash]: true, [previous]: false});
                    setPrevious(hash);
                }
            }
        }else{
            setState({...state, dashboard: true}); setPrevious("dashboard");
        }

    },[url]);

    return (
        <section className="gray-bg main-dashboard-sec" id="sec1">
            <div className="container">
                {/*  dashboard-menu*/}
                        <div className="col-md-3">
                <div className="mob-nav-content-btn color2-bg init-dsmen fl-wrap"><i className="fal fa-bars"/> Dashboard menu</div>
                <div className="clearfix"/>
                <div className="fixed-bar fl-wrap" id="dash_menu">
                    <div className="user-profile-menu-wrap fl-wrap block_box">
                        {/* user-profile-menu*/}
                        <div className="user-profile-menu">
                            <h3>Main</h3>
                            <ul className="no-list-style">
                                <li><Link to={"/user#dashboard"} className={state['dashboard'] ? 'user-profile-act' : ''}><i className="fal fa-chart-line"/>Dashboard</Link></li>
                                <li><Link to={"/user#feed"} className={state['feed'] ? 'user-profile-act' : ''}><i className="fal fa-rss"/>Your Feed <span style={{ backgroundColor: '#5ECEB1' }}>7</span></Link></li>
                                <li><Link to={"/user#profile"} className={state['profile'] ? 'user-profile-act' : ''}><i className="fal fa-user-edit"/> Edit profile</Link></li>
                                <li><Link to={"/user#password"} className={state['password'] ? 'user-profile-act' : ''}><i className="fal fa-key"/>Change Password</Link></li>
                                <li>
                                    <a href="#" className="submenu-link"><i className="fal fa-plus"/>Submenu</a>
                                    <ul className="no-list-style">
                                        <li><a href="#"><i className="fal fa-th-list"/> Submenu 2 </a></li>
                                        <li><a href="#"> <i className="fal fa-calendar-check"/> Submenu 2</a></li>
                                        <li><a href="#"><i className="fal fa-comments-alt"/>Submenu 2</a></li>
                                        <li><a href="#"><i className="fal fa-file-plus"/> Submenu 2</a></li>
                                    </ul>

                                </li>
                            </ul>
                        </div>
                        {/* user-profile-menu end*/}
                                    {/* user-profile-menu*/}
                        <div className="user-profile-menu">
                            <h3>partnership</h3>
                            {props.user.Role === "PARTNER" ?
                                <ul className="no-list-style">
                                    <li><Link to={"/user#partner"} className={state['partner'] ? 'user-profile-act' : ''} ><i className="fal fa-th-list"/> Partner  </Link></li>
                                    <li><Link to={"/user#listing"} className={state['listing'] ? 'user-profile-act' : ''} ><i className="fal fa-th-list"/> My listings  </Link></li>
                                    <li><Link to={"/user#booking"} className={state['booking'] ? 'user-profile-act' : ''} > <i className="fal fa-calendar-check"/> Bookings <span style={{ backgroundColor: '#5ECEB1' }}>2</span></Link></li>
                                    <li><Link to={"/user#review"} className={state['review'] ? 'user-profile-act' : ''} ><i className="fal fa-comments-alt"/> Reviews </Link></li>
                                    <li><Link to={"/user#add_listing"} className={state['add_listing'] ? 'user-profile-act' : ''} ><i className="fal fa-file-plus"/> Add New</Link></li>
                                    <li>
                                        <a href="#" className="submenu-link"><i className="fal fa-plus"/>Submenu</a>
                                        <ul className="no-list-style">
                                            <li><a href="#"><i className="fal fa-th-list"/> Submenu 2 </a></li>
                                            <li><a href="#"> <i className="fal fa-calendar-check"/> Submenu 2</a></li>
                                            <li><a href="#"><i className="fal fa-comments-alt"/>Submenu 2</a></li>
                                            <li><a href="#"><i className="fal fa-file-plus"/> Submenu 2</a></li>
                                        </ul>

                                    </li>
                                </ul>
                                :
                                <ul className="no-list-style">
                                    <li><a onClick={() => { $('.modal , .reg-overlay').fadeIn(200); $(".modal_main").addClass("vis_mr"); $("html, body").addClass("hid-body"); }} style={{ cursor:"pointer" }} ><i className="fal fa-hands-helping"/> Become Partner  </a></li>
                                </ul>
                            }
                        </div>
                        {/* user-profile-menu end*/}
                        <button className="logout_btn color2-bg" onClick={() => { props.dispatch({ type: "disconnected" }); } }>Log Out <i className="fas fa-sign-out"/></button>
                    </div>
                </div>
                <a className="back-tofilters color2-bg custom-scroll-link fl-wrap" href="#dash_menu">Back to Menu<i className="fas fa-caret-up"/></a>
                </div>
                {/* dashboard-menu  end*/}
                {/* dashboard content*/}
                {state['dashboard'] ? <Dashboard /> : ''}
                {state['feed'] ? <Feed /> : ''}
                {state['profile'] ? <Profile user={props.user} state={props.state} dispatch={props.dispatch} /> : ''}
                {state['password'] ? <Password user={props.user} dispatch={props.dispatch}/> : ''}
                {state['partner'] ? <Partner state={props.state} user={props.user} /> : ''}
                {state['listing'] ? <Listing state={props.state} user={props.user} /> : ''}
                {state['booking'] ? <Booking /> : ''}
                {state['review'] ? <Review /> : ''}
                {state['add_listing'] ? <Add_Listing state={props.state} user={props.user}/> : ''}
                
                {/* dashboard content end*/}
            </div>
        </section>
    );

};

export default Sec1;