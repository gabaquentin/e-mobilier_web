import React from 'react';

const Book = () => {

    return (

        <div className="box-widget-item fl-wrap block_box">
            <div className="box-widget-item-header">
                <h3>Book a Season Ticket</h3>
            </div>
            <div className="box-widget">
                <div className="box-widget-content">
                    <form className="add-comment custom-form">
                        <fieldset>
                            <label><i className="fal fa-user"/></label>
                            <input type="text" placeholder="Your Name *" value=""/>
                            <div className="clearfix"/>
                            <label><i className="fal fa-envelope"/> </label>
                            <input type="text" placeholder="Email Address*" value=""/>
                            <div className="quantity fl-wrap">
                                <span><i className="fal fa-user-plus"/>Persons : </span>
                                <div className="quantity-item">
                                    <input type="button" defaultValue="-" className="minus" />
                                        <input type="text" name="quantity" title="Qty" className="qty color-bg" data-min="1" data-max="3" data-step="1" defaultValue="1" />
                                            <input type="button" defaultValue="+" className="plus" />
                                </div>
                            </div>
                            <div className="listsearch-input-item clact">
                                <select data-placeholder="Ticket Type" className="chosen-select no-search-select">
                                    <option defaultValue="Ticket Type">Pass Type</option>
                                    <option defaultValue="Standard Pass">Standard Pass</option>
                                    <option defaultValue="Silver Pass">Silver Pass</option>
                                    <option defaultValue="Gold Pass">Gold Pass</option>
                                    <option defaultValue="Platinum Pass">Platinum Pass</option>
                                </select>
                            </div>
                            <textarea cols="40" rows="3" placeholder="Additional Information:"/>
                        </fieldset>
                        <button className="btn color2-bg url_btn float-btn" onClick="window.location.href='booking.html'">Book Now <i className="fal fa-bookmark"/></button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Book;