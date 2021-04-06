import React from 'react';

import all1 from '../../../Assets/images/all/1.jpg';
import avatar1 from '../../../Assets/images/avatar/1.jpg';
import SubFooter from "../../Layouts/SubFooter";
import { Link } from 'react-router-dom';
import Listing_Card from "./Widgets/Listing_Card";

const Listing = () => {

    const owner = {
        name: "Alisa Noore",
        avatar: avatar1,
        email: "yourmail@domain.com",
        phone: "+38099231212"
    };

    const price = {
        currency: "USD",
        amount: "500"
    };

    const facilities = ['parking','wifi','pets','smoke'];

    const location = ['40.72228267', '-73.99246214'];

    return (

        <div className="col-list-wrap anim_clw  ">
            {/* list-main-wrap-header*/}
            <div className="list-main-wrap-header fl-wrap anim_clw  ">
                <div className="container">
                    {/* list-main-wrap-title*/}
                    <div className="list-main-wrap-title">
                        <h2>Results For : <span>New York </span></h2>
                    </div>
                    {/* list-main-wrap-title end*/}
                    {/* list-main-wrap-opt*/}
                    <div className="list-main-wrap-opt">
                        {/* price-opt*/}
                        <div className="price-opt">
                            <span className="price-opt-title">Sort   by:</span>
                            <div className="listsearch-input-item">
                                <select data-placeholder="Popularity" className="chosen-select no-search-select">
                                    <option>Popularity</option>
                                    <option>Average rating</option>
                                    <option>Price: low to high</option>
                                    <option>Price: high to low</option>
                                </select>
                            </div>
                        </div>
                        {/* price-opt end*/}
                        {/* price-opt*/}
                        <div className="grid-opt">
                            <ul className="no-list-style">
                                <li className="grid-opt_act"><span className="two-col-grid act-grid-opt tolt" data-microtip-position="bottom" data-tooltip="Grid View"><i className="fal fa-th"/></span></li>
                                <li className="grid-opt_act"><span className="one-col-grid tolt" data-microtip-position="bottom" data-tooltip="List View"><i className="fal fa-list"/></span></li>
                            </ul>
                        </div>
                        {/* price-opt end*/}
                        <div className="show-hidden-sb shsb_btn shsb_btn_act"><i className="fal fa-sliders-h"/>
                            <span>Show Filters</span></div>
                    </div>
                    {/* list-main-wrap-opt end*/}
                </div>
                <a className="custom-scroll-link back-to-filters clbtg" href="#lisfw"><i className="fas fa-caret-up"/></a>
            </div>
            {/* list-main-wrap-header end*/}
            <div className="clearfix"/>
            <div className="container">
                <div className="mob-nav-content-btn mncb_half color2-bg shsb_btn shsb_btn_act fl-wrap"><i className="fal fa-filter"/> Filters
                </div>
                <div className="mob-nav-content-btn mncb_half color2-bg schm  fl-wrap"><i className="fal fa-map-marker-alt"/> View on map
                </div>
            </div>
            <div className="clearfix"/>
            {/* listing-item-container */}
            <div className="listing-item-container init-grid-items fl-wrap" id="lisfw">
                <div className="container">
                    {/* listing-item  */}
                    <Listing_Card owner={owner} status={"1"} score={"2.8"} reviews={"15"} image={all1} name={"Luxary Resaturant"} verified={true} address={"27th Brooklyn New York, USA"} description={"Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales."} category={"Restaurants"} map={true} price={price} facilities={facilities} location={location} types={"hotels restaurant"} id={"1"} />
                    {/* listing-item end */}
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
            </div>
            {/* listing-item-container end */}
            <SubFooter/>
        </div>

    );
};

export default Listing;