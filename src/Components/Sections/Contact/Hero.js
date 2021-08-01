import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

import bghero from '../../../Assets/images/bg/hero/1.jpg';

const Hero = ()=> {
        let history = useHistory();

        return (
            <section className="hero-section" data-scrollax-parent="true">
                <div className="bg-tabs-wrap">
                        <div className="bg-parallax-wrap" data-scrollax="properties: { translateY: '200px' }">
                            <div className="bg bg_tabs" data-bg={bghero}/>
                            <div className="overlay op7"/>
                        </div>
                </div>
                <div className="container small-container">
                    <div className="intro-item fl-wrap">
                        <span className="section-separator"/>
                        <div className="bubbles">
                            <h1>Explore Best Places In City</h1>
                        </div>
                        <h3>Find some of the best tips from around the city from our partners and friends.</h3>
                    </div>
                    {/* main-search-input-tabs */}
                    <div className="main-search-input-tabs  tabs-act fl-wrap">
                        <ul className="tabs-menu change_bg no-list-style">
                            <li className="current"><a href="#tab-inpt1" data-bgtab={bghero}> Places</a></li>
                            <li><a href="#tab-inpt2" data-bgtab={bghero}> Events</a></li>
                            <li><a href="#tab-inpt3" data-bgtab={bghero}> Restaurants</a></li>
                            <li><a href="#tab-inpt4" data-bgtab={bghero}> Hotels</a></li>
                        </ul>
                        {/* tabs */}
                        <div className="tabs-container fl-wrap  ">
                            {/* tab */}
                            <div className="tab">
                                <div id="tab-inpt1" className="tab-content first-tab">
                                    <div className="main-search-input-wrap fl-wrap">
                                        <div className="main-search-input fl-wrap">
                                            <div className="main-search-input-item">
                                                <label><i className="fal fa-keyboard"/></label>
                                                <input type="text" placeholder="What are you looking for?" />
                                            </div>
                                            <div className="main-search-input-item location autocomplete-container">
                                                <label><i className="fal fa-map-marker-check"/></label>
                                                <input type="text" placeholder="Location" className="autocomplete-input" id="autocompleteid" />
                                                <a href="#"><i className="fa fa-dot-circle-o"/></a>
                                            </div>
                                            <div className="main-search-input-item">
                                                <select data-placeholder="All Categories" className="chosen-select" >
                                                    <option>All Categories</option>
                                                    <option>Shops</option>
                                                    <option>Hotels</option>
                                                    <option>Restaurants</option>
                                                    <option>Fitness</option>
                                                    <option>Events</option>
                                                </select>
                                            </div>
                                            <button className="main-search-button color2-bg" onClick={() => { history.push("/"); }}>Search <i className="far fa-search"/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* tab end */}
                            {/* tab */}
                            <div className="tab">
                                <div id="tab-inpt2" className="tab-content">
                                    <div className="main-search-input-wrap fl-wrap">
                                        <div className="main-search-input fl-wrap">
                                            <div className="main-search-input-item">
                                                <label><i className="fal fa-handshake-alt"/></label>
                                                <input type="text" placeholder="Event Name or Place" />
                                            </div>
                                            <div className="main-search-input-item">
                                                <select data-placeholder="Loaction" className="chosen-select on-radius" >
                                                    <option>All Cities</option>
                                                    <option>New York</option>
                                                    <option>London</option>
                                                    <option>Paris</option>
                                                    <option>Kiev</option>
                                                    <option>Moscow</option>
                                                    <option>Dubai</option>
                                                    <option>Rome</option>
                                                    <option>Beijing</option>
                                                </select>
                                            </div>
                                            <div className="main-search-input-item clact date-container">
                                                <span className="iconn-dec"><i className="fal fa-calendar"/></span>
                                                <input type="text" placeholder="Event Date" name="datepicker-here"  />
                                                <span className="clear-singleinput"><i className="fal fa-times"/></span>
                                            </div>
                                            <button className="main-search-button color2-bg" onClick={() => { history.push("/"); }}>Search <i className="far fa-search"/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* tab end */}
                            {/* tab */}
                            <div className="tab">
                                <div id="tab-inpt3" className="tab-content">
                                    <div className="main-search-input-wrap fl-wrap">
                                        <div className="main-search-input fl-wrap">
                                            <div className="main-search-input-item">
                                                <label><i className="fal fa-cheeseburger"/></label>
                                                <input type="text" placeholder="Restaurant Name"  />
                                            </div>
                                            <div className="main-search-input-item clact date-container">
                                                <span className="iconn-dec"><i className="fal fa-calendar"/></span>
                                                <input type="text" placeholder="Date and Time" name="datepicker-here-time"  />
                                                <span className="clear-singleinput"><i className="fal fa-times"/></span>
                                            </div>
                                            <div className="main-search-input-item">
                                                <label><i className="fal fa-user-friends"/></label>
                                                <input type="number" placeholder="Persons"  />
                                            </div>
                                            <button className="main-search-button color2-bg" onClick={() => { history.push("/"); }}>Search <i className="far fa-search"/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* tab end */}
                            {/* tab */}
                            <div className="tab">
                                <div id="tab-inpt4" className="tab-content">
                                    <div className="main-search-input-wrap fl-wrap">
                                        <div className="main-search-input fl-wrap">
                                            <div className="main-search-input-item">
                                                <label><i className="fal fa-cheeseburger"/></label>
                                                <input type="text" placeholder="Hotel Name"  />
                                            </div>
                                            <div className="main-search-input-item">
                                                <label><i className="fal fa-user-friends"/></label>
                                                <input type="number" placeholder="Persons"  />
                                            </div>
                                            <div className="main-search-input-item clact date-container3 daterangepicker_big">
                                                <span className="iconn-dec"><i className="fal fa-calendar"/></span>
                                                <input type="text" placeholder="Date In Out" name="dates"  />
                                                <span className="clear-singleinput"><i className="fal fa-times"/></span>
                                            </div>
                                            <button className="main-search-button color2-bg" onClick={() => { history.push("/"); }}>Search <i className="far fa-search"/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* tab end */}
                        </div>
                        {/* tabs end */}
                    </div>
                    {/* main-search-input-tabs end */}
                    <div className="hero-categories fl-wrap">
                        <h4 className="hero-categories_title">Just looking around ? Use quick search by category :</h4>
                        <ul className="no-list-style">
                            <li><a href="listing.html"><i className="far fa-cheeseburger"/><span>Restaurants</span></a></li>
                            <li><a href="listing.html"><i className="far fa-bed"/><span>Hotels</span></a></li>
                            <li><a href="listing.html"><i className="far fa-shopping-bag"/><span>Shops</span></a></li>
                            <li><a href="listing.html"><i className="far fa-dumbbell"/><span>Fitness</span></a></li>
                            <li><a href="listing.html"><i className="far fa-cocktail"/><span>Events</span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="header-sec-link">
                    <a href="#sec1" className="custom-scroll-link"><i className="fal fa-angle-double-down"/></a>
                </div>
            </section>
        );
};

export default Hero;