import React from 'react';

import all1 from '../../../Assets/images/all/1.jpg';

const Search = () => {

    return (

        <div className="hidden-search-column">
            <div className="hidden-search-column-container fl-wrap full-height tabs-act">
                <div className="filter-sidebar-header fl-wrap">
                    <ul className="tabs-menu fl-wrap no-list-style">
                        <li className="current"><a href="#filters-search"> <i className="fal fa-sliders-h"/> Filters
                        </a></li>
                        <li><a href="#category-search"> <i className="fal fa-image"/>Categories </a></li>
                    </ul>
                </div>
                <div className="scrl-content filter-sidebar  full-height">
                    {/*tabs */}
                    <div className="tabs-container fl-wrap">
                        {/*tab */}
                        <div className="tab">
                            <div id="filters-search" className="tab-content  first-tab ">
                                {/* listsearch-input-item*/}
                                <div className="listsearch-input-item">
                                    <span className="iconn-dec"><i className="far fa-bookmark"/></span>
                                    <input type="text" placeholder="What are you looking for ?" value=""/>
                                </div>
                                {/* listsearch-input-item end*/}
                                {/* listsearch-input-item*/}
                                <div className="listsearch-input-item">
                                    <select data-placeholder="Categories" className="chosen-select no-search-select">
                                        <option>All Categories</option>
                                        <option>Shops</option>
                                        <option>Hotels</option>
                                        <option>Restaurants</option>
                                        <option>Fitness</option>
                                        <option>Events</option>
                                    </select>
                                </div>
                                {/* listsearch-input-item end*/}
                                {/* listsearch-input-item*/}
                                <div className="listsearch-input-item">
                                    <select data-placeholder="City/Location" className="chosen-select no-search-select">
                                        <option>All Cities</option>
                                        <option>New York</option>
                                        <option>Chicago</option>
                                        <option>Los Angeles</option>
                                        <option>Washington</option>
                                        <option>Boston</option>
                                    </select>
                                </div>
                                {/* listsearch-input-item end*/}
                                {/* listsearch-input-item*/}
                                <div className="listsearch-input-item location autocomplete-container">
                                    <span className="iconn-dec"><i className="far fa-map-marker"/></span>
                                    <input type="text" placeholder="Where to look?" className="autocomplete-input"
                                           id="autocompleteid3" value=""/>
                                    <a href="#"><i className="fal fa-location"/></a>
                                </div>
                                {/* listsearch-input-item end*/}
                                {/* listsearch-input-item*/}
                                <div className="listsearch-input-item">
                                    <button className="toggle-filter-btn tsb_act "><i className="fal fa-clock"/>
                                        <span>Open Now</span></button>
                                </div>
                                {/* listsearch-input-item end*/}
                                {/* listsearch-input-item*/}
                                <div className="listsearch-input-item clact date-container">
                                    <span className="iconn-dec"><i className="fal fa-calendar"/></span>
                                    <input type="text" placeholder="Event Date" name="datepicker-here" value=""/>
                                    <span className="clear-singleinput"><i className="fal fa-times"/></span>
                                </div>
                                {/* listsearch-input-item end*/}
                                {/* listsearch-input-item*/}
                                <div className="listsearch-input-item">
                                    <div className="price-rage-wrap fl-wrap">
                                        <div className="price-rage-wrap-title"><i className="fal fa-hand-holding-usd"/> Price :
                                        </div>
                                        <div className="price-rage-item fl-wrap">
                                            <input type="text" className="price-range" data-min="0" data-max="4"
                                                   name="price-range1" data-step="1" value="$$" />
                                        </div>
                                    </div>
                                </div>
                                {/* listsearch-input-item end*/}
                                {/* listsearch-input-item*/}
                                <div className="listsearch-input-item clact">
                                    <div className=" fl-wrap filter-tags">
                                        <ul className="no-list-style">
                                            <li>
                                                <input id="check-aa" type="checkbox" name="check" />
                                                    <label htmlFor="check-aa">Elevator in building</label>
                                            </li>
                                            <li>
                                                <input id="check-b" type="checkbox" name="check" />
                                                    <label htmlFor="check-b">Friendly workspace</label>
                                            </li>
                                            <li>
                                                <input id="check-c" type="checkbox" name="check" checked />
                                                    <label htmlFor="check-c">Instant Book</label>
                                            </li>
                                            <li>
                                                <input id="check-d" type="checkbox" name="check" />
                                                    <label htmlFor="check-d">Wireless Internet</label>
                                            </li>
                                            <li>
                                                <input id="check-d2" type="checkbox" name="check" checked />
                                                    <label htmlFor="check-d2">Free WiFi</label>
                                            </li>
                                            <li>
                                                <input id="check-d3" type="checkbox" name="check" checked />
                                                    <label htmlFor="check-d3">Free Parking</label>
                                            </li>
                                            <li>
                                                <input id="check-d4" type="checkbox" name="check" />
                                                    <label htmlFor="check-d4">Smoking Allowed</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* listsearch-input-item end*/}
                                {/* listsearch-input-item*/}
                                <div className="listsearch-input-item">
                                    <button className="header-search-button color-bg"
                                            onClick="window.location.href='listing.html'"><i className="far fa-search"/><span>Search</span></button>
                                </div>
                                {/* listsearch-input-item end*/}
                                <div className="clear-filter-btn"><i className="far fa-redo"/> Reset Filters</div>
                            </div>
                        </div>
                        {/*tab end*/}
                        {/*tab */}
                        <div className="tab">
                            <div id="category-search" className="tab-content">
                                <div className="fl-wrap hc-item">
                                    <a className="category-carousel-item fl-wrap full-height checket-cat" href="#">
                                        <img src={all1} alt="" />
                                            <div className="category-carousel-item-icon red-bg"><i className="fal fa-cheeseburger"/></div>
                                            <div className="category-carousel-item-container">
                                                <div className="category-carousel-item-title">Restaurants / Cafe</div>
                                                <div className="category-carousel-item-counter">6 listings</div>
                                            </div>
                                    </a>
                                    <a className="category-carousel-item fl-wrap full-height" href="#">
                                        <img src={all1} alt="" />
                                            <div className="category-carousel-item-icon yellow-bg"><i className="fal fa-bed"/></div>
                                            <div className="category-carousel-item-container">
                                                <div className="category-carousel-item-title">Hotel / Hostel</div>
                                                <div className="category-carousel-item-counter">14 listings</div>
                                            </div>
                                    </a>
                                    <a className="category-carousel-item fl-wrap full-height" href="#">
                                        <img src={all1} alt="" />
                                            <div className="category-carousel-item-icon purp-bg"><i className="fal fa-cocktail"/></div>
                                            <div className="category-carousel-item-container">
                                                <div className="category-carousel-item-title">Events / Nightlife</div>
                                                <div className="category-carousel-item-counter">6 listings</div>
                                            </div>
                                    </a>
                                    <a className="category-carousel-item fl-wrap full-height" href="#">
                                        <img src={all1} alt="" />
                                            <div className="category-carousel-item-icon blue-bg"><i className="fal fa-dumbbell"/></div>
                                            <div className="category-carousel-item-container">
                                                <div className="category-carousel-item-title">Fitness / Gym</div>
                                                <div className="category-carousel-item-counter">18 listings</div>
                                            </div>
                                    </a>
                                    <a className="category-carousel-item fl-wrap full-height" href="#">
                                        <img src={all1} alt="" />
                                            <div className="category-carousel-item-icon green-bg"><i className="fal fa-cart-arrow-down"/></div>
                                            <div className="category-carousel-item-container">
                                                <div className="category-carousel-item-title">Shopping</div>
                                                <div className="category-carousel-item-counter">19 listings</div>
                                            </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*tab end*/}
                    </div>
                    {/*tabs end*/}
                </div>
            </div>
            <div className="close_sbfilters"><i className="fal fa-long-arrow-right"/></div>
        </div>

    );
};

export default Search;