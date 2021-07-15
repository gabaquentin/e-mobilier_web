import React, { useEffect } from 'react';
import {  useParams } from "react-router-dom";
import Edit from './Edit';
import { appendScript } from "../../../../Assets/utils/appendScript";

const Location_Contact = (props) => {
    const { Id, Mode } = useParams();
    useEffect(() => {
        appendScript("/js/map-single.js", false);
    }, []);
    return (
        <>
            {Mode === "Edit" ? <Edit component="Location_Contact" listing={props.listing.Data} /> : <></>}
            <div className="box-widget-item fl-wrap block_box">
                <div className="box-widget-item-header">
                    <h3>Location / Contacts </h3>
                </div>
                <div className="box-widget">
                    <div className="map-container">
                        <div id="singleMap" data-latitude={props.listing.Data.Location_Contact.Lat} data-longitude={props.listing.Data.Location_Contact.Long} data-mapTitle="Our Location" />
                    </div>
                    <div className="box-widget-content bwc-nopad">
                        <div className="list-author-widget-contacts list-item-widget-contacts bwc-padside">
                            <ul className="no-list-style">
                                <li><span><i className="fal fa-map-marker" /> Adress :</span> <a href="#">{props.listing.Data.Location_Contact.Address }</a></li>
                                <li><span><i className="fal fa-phone" /> Phone :</span> <a href="#">{props.listing.Data.Location_Contact.Phone }</a></li>
                                <li><span><i className="fal fa-envelope"/> Mail :</span> <a href="#">{props.listing.Data.Location_Contact.Email }</a></li>
                                {props.listing.Data.Social.website !== "" ? <li><span><i className="fas fa-globe" /> Website :</span> <a href={props.listing.Data.Social.website}>{props.listing.Data.Social.website}</a></li> : ""}
                            </ul>
                        </div>
                        <div className="list-widget-social bottom-bcw-box  fl-wrap">
                            <ul className="no-list-style">
                                {props.listing.Data.Social.facebook !== "" ? <li><a href={props.listing.Data.Social.facebook} target="_blank"><i className="fab fa-facebook-f" /></a></li> : "" }
                                {props.listing.Data.Social.twitter !== "" ? <li><a href={props.listing.Data.Social.twitter} target="_blank"><i className="fab fa-twitter" /></a></li> : ""}
                                {props.listing.Data.Social.instagram !== "" ? <li><a href={props.listing.Data.Social.instagram} target="_blank"><i className="fab fa-instagram" /></a></li> : ""}
                                {props.listing.Data.Social.facebook === "" && props.listing.Data.Social.twitter === "" && props.listing.Data.Social.instagram === "" ? <li><a href="#"><i class="fas fa-angle-double-right"/></a></li> :""}
                            </ul>
                            <div className="bottom-bcw-box_link">{Mode === "Edit"
                                ?
                                <Edit component="Social" listing={props.listing.Data} />
                                :
                                <a href="#" className="show-single-contactform tolt" data-microtip-position="top" data-tooltip="Write Message"><i className="fal fa-envelope" /></a>}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Location_Contact;