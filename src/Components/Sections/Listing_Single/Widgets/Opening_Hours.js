import React from 'react';

const Opening_Hours = () => {

    return (

        <div className="box-widget-item fl-wrap block_box">
            <div className="box-widget-item-header">
                <h3>Working Hours</h3>
            </div>
            <div className="box-widget opening-hours fl-wrap">
                <div className="box-widget-content">
                    <ul className="no-list-style">
                        <li className="mon"><span className="opening-hours-day">Monday </span><span
                            className="opening-hours-time">9 AM - 5 PM</span></li>
                        <li className="tue"><span className="opening-hours-day">Tuesday </span><span
                            className="opening-hours-time">9 AM - 5 PM</span></li>
                        <li className="wed"><span className="opening-hours-day">Wednesday </span><span
                            className="opening-hours-time">9 AM - 5 PM</span></li>
                        <li className="thu"><span className="opening-hours-day">Thursday </span><span
                            className="opening-hours-time">9 AM - 5 PM</span></li>
                        <li className="fri"><span className="opening-hours-day">Friday </span><span
                            className="opening-hours-time">9 AM - 5 PM</span></li>
                        <li className="sat"><span className="opening-hours-day">Saturday </span><span
                            className="opening-hours-time">9 AM - 3 PM</span></li>
                        <li className="sun"><span className="opening-hours-day">Sunday </span><span
                            className="opening-hours-time">Closed</span></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Opening_Hours;