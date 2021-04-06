import React from 'react';

const Sort_Listings = () => {

    return (

        <div className="list-main-wrap-header fl-wrap block_box no-vis-shadow">
            {/* list-main-wrap-title*/}
            <div className="list-main-wrap-title">
                <h2>Listings by : <span>Alisa Noory </span></h2>
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
                        <li className="grid-opt_act"><span className="two-col-grid act-grid-opt tolt"
                                                           data-microtip-position="bottom" data-tooltip="Grid View"><i className="fal fa-th"/></span></li>
                        <li className="grid-opt_act"><span className="one-col-grid tolt" data-microtip-position="bottom" data-tooltip="List View"><i className="fal fa-list"/></span></li>
                    </ul>
                </div>
                {/* price-opt end*/}
            </div>
            {/* list-main-wrap-opt end*/}
        </div>

    );
};

export default Sort_Listings;