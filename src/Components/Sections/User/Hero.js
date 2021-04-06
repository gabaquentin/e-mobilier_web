import React from 'react';

import { Link } from 'react-router-dom';
import avatar7 from '../../../Assets/images/avatar/7.png';

const Hero = (props) => {
    const url = window.location.href;
    const hash = url.substring(url.indexOf("#")+1);
    let current = (new URL(url));
    const pathname = current.pathname;

    var arr = url.split("/");
    var location = arr[0] + "//" + arr[2];

    return (
        <section className="parallax-section dashboard-header-sec gradient-bg" data-scrollax-parent="true">
            <div className="container">
                <div className="dashboard-breadcrumbs breadcrumbs"><Link to={"/"}>Home</Link><Link to={"/user"}>Dashboard</Link><span>{hash !== location+pathname ? hash : ""}</span></div>
                {/*Tariff Plan menu*/}
                <div className="tfp-btn"><span>Tariff Plan : </span> <strong>Extended</strong></div>
                <div className="tfp-det">
                    <p>You Are on <a href="#">Extended</a> . Use link bellow to view details or upgrade. </p>
                    <a href="#" className="tfp-det-btn color2-bg">Details</a>
                </div>
                {/*Tariff Plan menu end*/}
                        <div className="dashboard-header_conatiner fl-wrap dashboard-header_title">
                    <h1>Welcome  : <span>{props.user.displayName ? props.user.displayName : ''}</span></h1>
                </div>
            </div>
            <div className="clearfix"/>
            <div className="dashboard-header fl-wrap">
                <div className="container">
                    <div className="dashboard-header_conatiner fl-wrap">
                        <div className="dashboard-header-avatar">
                            <img src={props.user.photoUrl ? props.user.photoUrl : avatar7} alt="" />
                                <Link to="/user#profile" className="color-bg edit-prof_btn"><i className="fal fa-edit"/></Link>
                                </div>
                            <div className="dashboard-header-stats-wrap">
                                <div className="dashboard-header-stats">
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            {/*  dashboard-header-stats-item */}
                                                <div className="swiper-slide">
                                                <div className="dashboard-header-stats-item">
                                                    <i className="fal fa-map-marked"/>
                                                        Active Listings
                                                        <span>21</span>
                                                </div>
                                            </div>
                                            {/*  dashboard-header-stats-item end */}
                                                {/*  dashboard-header-stats-item */}
                                                <div className="swiper-slide">
                                                <div className="dashboard-header-stats-item">
                                                    <i className="fal fa-chart-bar"/>
                                                        Listing Views
                                                        <span>1054</span>
                                                </div>
                                            </div>
                                            {/*  dashboard-header-stats-item end */}
                                                {/*  dashboard-header-stats-item */}
                                                <div className="swiper-slide">
                                                <div className="dashboard-header-stats-item">
                                                    <i className="fal fa-comments-alt"/>
                                                        Total Reviews
                                                        <span>79</span>
                                                </div>
                                            </div>
                                            {/*  dashboard-header-stats-item end */}
                                                {/*  dashboard-header-stats-item */}
                                                <div className="swiper-slide">
                                                <div className="dashboard-header-stats-item">
                                                    <i className="fal fa-heart"/>
                                                        Times Bookmarked
                                                        <span>654</span>
                                                </div>
                                            </div>
                                            {/*  dashboard-header-stats-item end */}
                                            </div>
                                    </div>
                                </div>
                                {/*  dashboard-header-stats  end */}
                                    <div className="dhs-controls">
                                    <div className="dhs dhs-prev"><i className="fal fa-angle-left"/></div>
                                    <div className="dhs dhs-next"><i className="fal fa-angle-right"/></div>
                                </div>
                            </div>
                            {/*  dashboard-header-stats-wrap end */}
                                <Link to={"/user#add_listing"} className="add_new-dashboard">Add Listing <i className="fal fa-layer-plus"/></Link>
                        </div>
                    </div>
                </div>
                <div className="gradient-bg-figure" style={{right: '-30px', top: '10px'}}/>
                <div className="gradient-bg-figure" style={{left: '-20px', bottom: '30px'}}/>
                <div className="circle-wrap" style={{left: '120px', bottom: '120px'}} data-scrollax="properties: { translateY: '-200px' }">
                    <div className="circle_bg-bal circle_bg-bal_small"/>
                </div>
            <div className="circle-wrap" style={{ right: '420px', bottom: '-70px' }} data-scrollax="properties: { translateY: '150px' }">
                    <div className="circle_bg-bal circle_bg-bal_big"/>
                </div>
            <div className="circle-wrap" style={{ left: '420px', top: '-70px' }} data-scrollax="properties: { translateY: '100px' }">
                    <div className="circle_bg-bal circle_bg-bal_big"/>
                </div>
                <div className="circle-wrap" style={{left: '40%', bottom: '-70px'}}  >
                    <div className="circle_bg-bal circle_bg-bal_middle"/>
                </div>
                <div className="circle-wrap" style={{right: '40%', top: '-10px'}}  >
                    <div className="circle_bg-bal circle_bg-bal_versmall" data-scrollax="properties: { translateY: '-350px' }"/>
                </div>
                    <div className="circle-wrap" style={{ right: '55 %', top: '90px' }}  >
                    <div className="circle_bg-bal circle_bg-bal_versmall" data-scrollax="properties: { translateY: '-350px' }"/>
                </div>
        </section>
    );
};

export default Hero;