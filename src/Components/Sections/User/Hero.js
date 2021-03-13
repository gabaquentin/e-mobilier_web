import React, { Component } from 'react';

import avatar1 from '../../../Assets/images/avatar/1.jpg';

const Hero = (props) => {


    return (
        <section className="parallax-section dashboard-header-sec gradient-bg" data-scrollax-parent="true">
            <div className="container">
                <div className="dashboard-breadcrumbs breadcrumbs"><a href="#">Home</a><a href="#">Dashboard</a><span>Main page</span></div>
                {/*Tariff Plan menu*/}
                <div className="tfp-btn"><span>Tariff Plan : </span> <strong>Extended</strong></div>
                <div className="tfp-det">
                    <p>You Are on <a href="#">Extended</a> . Use link bellow to view details or upgrade. </p>
                    <a href="#" className="tfp-det-btn color2-bg">Details</a>
                </div>
                {/*Tariff Plan menu end*/}
                        <div className="dashboard-header_conatiner fl-wrap dashboard-header_title">
                    <h1>Welcome  : <span>{props.state.user.displayName ? props.state.user.displayName : ''}</span></h1>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="dashboard-header fl-wrap">
                <div className="container">
                    <div className="dashboard-header_conatiner fl-wrap">
                        <div className="dashboard-header-avatar">
                            <img src={props.state.user.photoUrl ? props.state.user.photoUrl : avatar1} alt="" />
                                <a href="dashboard-myprofile.html" className="color-bg edit-prof_btn"><i className="fal fa-edit"></i></a>
                                </div>
                            <div className="dashboard-header-stats-wrap">
                                <div className="dashboard-header-stats">
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            {/*  dashboard-header-stats-item */}
                                                <div className="swiper-slide">
                                                <div className="dashboard-header-stats-item">
                                                    <i className="fal fa-map-marked"></i>
                                                        Active Listings
                                                        <span>21</span>
                                                </div>
                                            </div>
                                            {/*  dashboard-header-stats-item end */}
                                                {/*  dashboard-header-stats-item */}
                                                <div className="swiper-slide">
                                                <div className="dashboard-header-stats-item">
                                                    <i className="fal fa-chart-bar"></i>
                                                        Listing Views
                                                        <span>1054</span>
                                                </div>
                                            </div>
                                            {/*  dashboard-header-stats-item end */}
                                                {/*  dashboard-header-stats-item */}
                                                <div className="swiper-slide">
                                                <div className="dashboard-header-stats-item">
                                                    <i className="fal fa-comments-alt"></i>
                                                        Total Reviews
                                                        <span>79</span>
                                                </div>
                                            </div>
                                            {/*  dashboard-header-stats-item end */}
                                                {/*  dashboard-header-stats-item */}
                                                <div className="swiper-slide">
                                                <div className="dashboard-header-stats-item">
                                                    <i className="fal fa-heart"></i>
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
                                    <div className="dhs dhs-prev"><i className="fal fa-angle-left"></i></div>
                                    <div className="dhs dhs-next"><i className="fal fa-angle-right"></i></div>
                                </div>
                            </div>
                            {/*  dashboard-header-stats-wrap end */}
                                <a className="add_new-dashboard">Add Listing <i className="fal fa-layer-plus"></i></a>
                        </div>
                    </div>
                </div>
                <div className="gradient-bg-figure" style={{right: '-30px', top:'10px'}}></div>
                <div className="gradient-bg-figure" style={{ left: '-20px', bottom: '30px' }}></div>
                <div className="circle-wrap" style={{left: '120px', bottom: '120px'}} data-scrollax="properties: { translateY: '-200px' }">
                    <div className="circle_bg-bal circle_bg-bal_small"></div>
                </div>
            <div className="circle-wrap" style={{ right: '420px', bottom: '-70px' }} data-scrollax="properties: { translateY: '150px' }">
                    <div className="circle_bg-bal circle_bg-bal_big"></div>
                </div>
            <div className="circle-wrap" style={{ left: '420px', top: '-70px' }} data-scrollax="properties: { translateY: '100px' }">
                    <div className="circle_bg-bal circle_bg-bal_big"></div>
                </div>
                <div className="circle-wrap" style={{left: '40%', bottom: '-70px'}}  >
                    <div className="circle_bg-bal circle_bg-bal_middle"></div>
                </div>
                <div className="circle-wrap" style={{right: '40%', top: '-10px'}}  >
                    <div className="circle_bg-bal circle_bg-bal_versmall" data-scrollax="properties: { translateY: '-350px' }"></div>
                </div>
                    <div className="circle-wrap" style={{ right: '55 %', top: '90px' }}  >
                    <div className="circle_bg-bal circle_bg-bal_versmall" data-scrollax="properties: { translateY: '-350px' }"></div>
                </div>
        </section>
    );
}

export default Hero;