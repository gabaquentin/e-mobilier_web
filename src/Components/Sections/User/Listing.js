import React, { useEffect } from 'react';

import { appendScript } from '../../../Assets/utils/appendScript';

import all1 from '../../../Assets/images/all/1.jpg';

const Listing = () => {

    useEffect(() => {
        const appendScripts = () => {

            appendScript("/js/jquery.min.js", false);
            appendScript("/js/plugins.js", false);
            appendScript("/js/scripts.js", false);

        }
        appendScripts();
    }, []);
        
    return (
        <div className="col-md-9">
            <div className="dashboard-title   fl-wrap">
                <h3>Your Listings</h3>
            </div>
            {/* dashboard-list-box*/}
            <div className="dashboard-list-box  fl-wrap">
                {/* dashboard-list */}
                                <div className="dashboard-list fl-wrap">
                    <div className="dashboard-message">
                        <div className="booking-list-contr">
                            <a href="#" className="color-bg tolt" data-microtip-position="left" data-tooltip="Edit"><i className="fal fa-edit"></i></a>
                            <a href="#" className="red-bg tolt" data-microtip-position="left" data-tooltip="Delete"><i className="fal fa-trash"></i></a>
                        </div>
                        <div className="dashboard-message-text">
                            <img src={all1} alt="" />
                                <h4><a href="listing-single.html">Luxary Resaturant</a></h4>
                                <div className="geodir-category-location clearfix"><a href="#"> 40 Journal Square Plaza, NJ,  USA</a></div>
                                        </div>
                        </div>
                    </div>
                    {/* dashboard-list end*/}
                                {/* dashboard-list */}
                                <div className="dashboard-list fl-wrap">
                        <div className="dashboard-message">
                            <div className="booking-list-contr">
                                <a href="#" className="color-bg tolt" data-microtip-position="left" data-tooltip="Edit"><i className="fal fa-edit"></i></a>
                                <a href="#" className="red-bg tolt" data-microtip-position="left" data-tooltip="Delete"><i className="fal fa-trash"></i></a>
                            </div>
                            <div className="dashboard-message-text">
                                <img src={all1} alt="" />
                                    <h4><a href="listing-single.html">Handmade Shop</a></h4>
                                    <div className="geodir-category-location clearfix"><a href="#">  34-42 Montgomery St , NY, USA</a></div>
                                        </div>
                            </div>
                        </div>
                        {/* dashboard-list end*/}
                                {/* dashboard-list */}
                                <div className="dashboard-list fl-wrap">
                            <div className="dashboard-message">
                                <div className="booking-list-contr">
                                    <a href="#" className="color-bg tolt" data-microtip-position="left" data-tooltip="Edit"><i className="fal fa-edit"></i></a>
                                    <a href="#" className="red-bg tolt" data-microtip-position="left" data-tooltip="Delete"><i className="fal fa-trash"></i></a>
                                </div>
                                <div className="dashboard-message-text">
                                    <img src={all1} alt="" />
                                        <h4><a href="listing-single.html">Iconic Cafe in Manhattan</a></h4>
                                        <div className="geodir-category-location clearfix"><a href="#">  40 Journal Square Plaza, NJ, USA</a></div>
                                        </div>
                                </div>
                            </div>
                            {/* dashboard-list end*/}
                                {/* dashboard-list */}
                                <div className="dashboard-list fl-wrap">
                                <div className="dashboard-message">
                                    <div className="booking-list-contr">
                                        <a href="#" className="color-bg tolt" data-microtip-position="left" data-tooltip="Edit"><i className="fal fa-edit"></i></a>
                                        <a href="#" className="red-bg tolt" data-microtip-position="left" data-tooltip="Delete"><i className="fal fa-trash"></i></a>
                                    </div>
                                    <div className="dashboard-message-text">
                                        <img src={all1} alt="" />
                                            <h4><a href="listing-single.html">Premium Fitness Gym</a></h4>
                                            <div className="geodir-category-location clearfix"><a href="#">  W 85th St, New York, USA</a></div>
                                        </div>
                                    </div>
                                </div>
                                {/* dashboard-list end*/}
                                {/* dashboard-list */}
                                <div className="dashboard-list fl-wrap">
                                    <div className="dashboard-message">
                                        <div className="booking-list-contr">
                                            <a href="#" className="color-bg tolt" data-microtip-position="left" data-tooltip="Edit"><i className="fal fa-edit"></i></a>
                                            <a href="#" className="red-bg tolt" data-microtip-position="left" data-tooltip="Delete"><i className="fal fa-trash"></i></a>
                                        </div>
                                        <div className="dashboard-message-text">
                                            <img src={all1} alt="" />
                                                <h4><a href="listing-single.html">MontePlaza Hotel</a></h4>
                                                <div className="geodir-category-location clearfix"><a href="#">  70 Bright St New York, USA</a></div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* dashboard-list end*/}
                            </div>
                                {/* dashboard-list-box end*/}
                            <div className="pagination">
                                    <a href="#" className="prevposts-link"><i className="fas fa-caret-left"></i><span>Prev</span></a>
                                    <a href="#">1</a>
                                    <a href="#" className="current-page">2</a>
                                    <a href="#">3</a>
                                    <a href="#">...</a>
                                    <a href="#">7</a>
                                    <a href="#" className="nextposts-link"><span>Next</span><i className="fas fa-caret-right"></i></a>
                                </div>
                            </div>
    );
}

export default Listing;