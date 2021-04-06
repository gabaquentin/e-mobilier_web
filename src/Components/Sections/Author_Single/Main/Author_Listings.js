import React from 'react';
import {Link} from "react-router-dom";
import all1 from "../../../../Assets/images/all/1.jpg";
import avatar1 from "../../../../Assets/images/avatar/1.jpg";
import Listing_Card from "../../Listing/Widgets/Listing_Card";

const Author_Listings = () => {
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

        <div className="listing-item-container init-grid-items fl-wrap" id="lisfw">
            <div className="container">
                {/* listing-item  */}
                <Listing_Card owner={owner} status={"1"} score={"2.8"} reviews={"15"} image={all1} name={"Luxary Resaturant"} verified={true} address={"27th Brooklyn New York, USA"} description={"Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales."} category={"Restaurants"} map={false} price={price} facilities={facilities} location={location} types={"hotels restaurant"} id={"id1"} />
                <Listing_Card owner={owner} status={"2"} score={"4.8"} reviews={"15"} image={all1} name={"Resto Chica"} verified={false} address={"27th Brooklyn New York, USA"} description={"Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales."} category={"Restaurants"} map={false} price={price} facilities={facilities} location={location} types={"hotels restaurant"} id={"id2"} />
                {/* listing-item end */}
            </div>
        </div>

    );
};

export default Author_Listings;