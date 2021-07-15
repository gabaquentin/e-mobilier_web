import React, { Component } from 'react';

import avatar1 from '../../../Assets/images/avatar/1.jpg';
import all1 from '../../../Assets/images/all/1.jpg';
import {Link} from "react-router-dom";
import Listing_Card from "../Listing/Widgets/Listing_Card";

const Sec4 = (props) => {

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
        <section>
            <div className="container big-container">
                <div className="section-title">
                    <h2><span>Most Popular Palces</span></h2>
                    <div className="section-subtitle">Best Listings</div>
                    <span className="section-separator"/>
                    <p>Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus tellus ut, convallis eros sollicitudin turpis.</p>
                </div>
                <div className="listing-filters gallery-filters fl-wrap">
                    <a href="#" className="gallery-filter  gallery-filter-active" data-filter="*">All Categories</a>
                    <a href="#" className="gallery-filter" data-filter=".restaurant">Restaurants </a>
                    <a href="#" className="gallery-filter" data-filter=".hotels">Hotels</a>
                    <a href="#" className="gallery-filter" data-filter=".events">Events</a>
                    <a href="#" className="gallery-filter" data-filter=".fitness">Fitness</a>
                </div>
                <div className="grid-item-holder gallery-items fl-wrap">
                    {/*  gallery-item */}
                    <div className="gallery-item restaurant fitness">
                        {/* listing-item   */}
                        <Listing_Card
                            owner={owner}
                            status={"1"}
                            score={"2.8"}
                            reviews={"15"}
                            image={all1}
                            name={"Luxary Resaturant"}
                            verified={true}
                            address={"27th Brooklyn New York, USA"}
                            description={"Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales."}
                            category={"Restaurants"}
                            map={false} price={price}
                            facilities={facilities}
                            location={location}
                            types={"hotels restaurant"}
                            id={"id1"}
                        />
                        {/* listing-item end  */}
                    </div>
                    {/* gallery-item  end */}
                </div>
                <Link to={"/listing"} className="btn  dec_btn  color2-bg">Check Out All Listings<i className="fal fa-arrow-alt-right"/></Link>
            </div>
        </section>
    );
};

export default Sec4;