import React from 'react';
import { useParams } from "react-router-dom";
import Edit from '../Widgets/Edit';

const Facilities = (props) => {
    const { Id, Mode } = useParams();
    return (

        <div className="list-single-main-item fl-wrap block_box">
            <div className="list-single-main-item-title">
                <h3>Listing Features</h3>
            </div>
            <div className="list-single-main-item_content fl-wrap">
                <div className="listing-features fl-wrap">
                    <ul className="no-list-style">
                        <li><a href="#"><i className="fa fa-rocket" /> Elevator in building</a></li>
                        <li><a href="#"><i className="fa fa-wifi" /> Free Wi Fi</a></li>
                        <li><a href="#"><i className="fa fa-motorcycle" /> Free Parking</a></li>
                        <li><a href="#"><i className="fa fa-cloud" /> Air Conditioned</a></li>
                        <li><a href="#"><i className="fa fa-shopping-cart" /> Online Ordering</a></li>
                        <li><a href="#"><i className="fa fa-paw" /> Pet Friendly</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Facilities;