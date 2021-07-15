import React from 'react';
import { useParams } from "react-router-dom";
import Edit from '../Widgets/Edit';

const Detail = (props) => {
    const { Id, Mode } = useParams();
    return (
        <>
            {Mode === "Edit" ? <Edit component="Details" listing={props.listing.Data} /> : <></>}
            <div className="list-single-main-item fl-wrap block_box" id="details">
                <div className="list-single-main-item-title">
                    <h3>Description</h3>
                </div>
                <div className="list-single-main-item_content fl-wrap">
                    <p>{ props.listing.Data.Details }</p>
                    {props.listing.Data.Social.website !== "" ? <a href="#" className="btn color2-bg float-btn">Visit Website<i className="fal fa-chevron-right" /></a> : ""}
                </div>
            </div>
        </>

    );
};

export default Detail;