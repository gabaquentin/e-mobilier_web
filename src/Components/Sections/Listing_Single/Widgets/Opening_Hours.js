import React from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import Edit from './Edit';

const Opening_Hours = (props) => {
    const { Id, Mode } = useParams();
    return (

        <>
            {Mode === "Edit" ? <Edit component="Working_Hours" listing={props.listing.Data} /> : <></>}
            <div className="box-widget-item fl-wrap block_box">
                <div className="box-widget-item-header">
                    <h3 >Working Hours</h3>
                </div>
                <div className="box-widget opening-hours fl-wrap">
                    <div className="box-widget-content">
                        <ul className="no-list-style">
                            <li className="mon"><span className="opening-hours-day">Monday </span><span
                                className="opening-hours-time">{props.listing.Data.Working_Hours.Monday}</span></li>
                            <li className="tue"><span className="opening-hours-day">Tuesday </span><span
                                className="opening-hours-time">{props.listing.Data.Working_Hours.Tuesday}</span></li>
                            <li className="wed"><span className="opening-hours-day">Wednesday </span><span
                                className="opening-hours-time">{props.listing.Data.Working_Hours.Wednesday}</span></li>
                            <li className="thu"><span className="opening-hours-day">Thursday </span><span
                                className="opening-hours-time">{props.listing.Data.Working_Hours.Thursday}</span></li>
                            <li className="fri"><span className="opening-hours-day">Friday </span><span
                                className="opening-hours-time">{props.listing.Data.Working_Hours.Friday}</span></li>
                            <li className="sat"><span className="opening-hours-day">Saturday </span><span
                                className="opening-hours-time">{props.listing.Data.Working_Hours.Saturday}</span></li>
                            <li className="sun"><span className="opening-hours-day">Sunday </span><span
                                className="opening-hours-time">{props.listing.Data.Working_Hours.Sunday}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Opening_Hours;