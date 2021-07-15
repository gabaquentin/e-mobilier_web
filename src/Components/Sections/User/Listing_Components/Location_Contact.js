import React, { useEffect, useState, useRef } from 'react';
import { NotificationManager } from "react-notifications";
import $ from "jquery";

const Location_Contact = (props) => {

    const latRef = useRef();
    const longRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const [option, setOption] = useState("");

    useEffect(() => {
        const updateOption = () => {
            if (props.values["Location_Contact"])
                setOption(props.values["Location_Contact"].Option);
        };
        updateOption();
    }, []);

    function saveData(action) {
        var dest = {};
        dest[action] = true;
        if (latRef.current.value && longRef.current.value && cityRef.current.value && addressRef.current.value && emailRef.current.value && phoneRef.current.value) {

            if (props.values["Title"].Type === "House" || props.values["Title"].Type === "Product") {
                if (option) {
                    props.onChange(dest, "Location_Contact", { "Lat": latRef.current.value, "Long": longRef.current.value, "City": cityRef.current.value, "Address": addressRef.current.value, "Email": emailRef.current.value, "Phone": phoneRef.current.value, "Option": option });
                    if (action === "All") {
                        var modify_location = document.getElementById('modify_location');
                        modify_location.style.display = 'none';
                        $(".lc-form").find("input, select").attr("disabled", "disabled");
                    }
                }
                else {
                    NotificationManager.info('Selectionnez une option dans la section ' + props.values["Title"].Type + ' Rent / Sale');
                }
            }
            else {
                props.onChange(dest, "Location_Contact", { "Lat": latRef.current.value, "Long": longRef.current.value, "City": cityRef.current.value, "Address": addressRef.current.value, "Email": emailRef.current.value, "Phone": phoneRef.current.value });
                if (action === "All") {
                    var modify_location = document.getElementById('modify_location');
                    modify_location.style.display = 'none';
                    $(".lc-form").find("input, select").attr("disabled", "disabled");
                }
            }

        } else {
            NotificationManager.info('Veuillez remplir tous les champs');
        }
    }

    function handleNext() {
        saveData("Header_Media");
    }

    function handlePrevious() {
        props.onChange({ "Title": true });
    }

    function handleModify() {
        saveData("All");
    }

    function onChangeValue(event) {
        setOption(event.target.value);
    }

    return (
        <>
            <div className="dashboard-title  dt-inbox fl-wrap">
                <h3>Location / Contacts</h3>
            </div>
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form lc-form">
                    <div className="row">
                        <div className="col-md-6">
                            <label>Longitude (Drag marker on the map)<i className="fal fa-long-arrow-alt-right" />  </label>
                            <input type="text" placeholder="Map Longitude" id="long" defaultValue={props.values["Location_Contact"] ? props.values["Location_Contact"].Long : ""} ref={longRef} disabled />
                        </div>
                        <div className="col-md-6">
                            <label>Latitude (Drag marker on the map) <i className="fal fa-long-arrow-alt-down" /> </label>
                            <input type="text" placeholder="Map Latitude" id="lat" defaultValue={props.values["Location_Contact"] ? props.values["Location_Contact"].Lat : ""} ref={latRef} disabled />
                        </div>
                    </div>
                    <div className="map-container">
                        <div id="addMap" className="drag-map" data-latitude={props.values["Location_Contact"] ? props.values["Location_Contact"].Lat : "3.8622223302735397"} data-longitude={props.values["Location_Contact"] ? props.values["Location_Contact"].Long : "11.520121040296676"} />
                        <div className="location-btn geoLocation tolt" data-microtip-position="top-left" data-tooltip="Listing location"><span><i className="fal fa-location" /></span></div>
                    </div>
                    <label>City / Location (Drag marker on the map) <i className="fal fa-location" /> </label>
                    <input type="text" placeholder="Location / City" defaultValue={props.values["Location_Contact"] ? props.values["Location_Contact"].City : ""} ref={cityRef} defaultValue="Yaounde" disabled />
                    <div className="listsearch-input-item">
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <label>Address<i className="fal fa-map-marker" /></label>
                            <input type="text" placeholder="Your Address" defaultValue={props.values["Location_Contact"] ? props.values["Location_Contact"].Address : ""} ref={addressRef} />
                        </div>
                        <div className="col-sm-6">
                            <label>Email Address<i className="far fa-envelope" />  </label>
                            <input type="text" placeholder="JessieManrty@domain.com" defaultValue={props.values["Location_Contact"] ? props.values["Location_Contact"].Email : props.partner.Email} ref={emailRef} />
                        </div>
                        <div className="col-sm-6">
                            <label>Phone<i className="far fa-phone" />  </label>
                            <input type="text" placeholder="+7(123)987654" defaultValue={props.values["Location_Contact"] ? props.values["Location_Contact"].Phone : props.partner.Phone !== "" ? props.partner.Phone : props.phone} ref={phoneRef} />
                        </div>
                        {props.values["Title"].Type === "House" || props.values["Title"].Type === "Product"
                            ?
                            <div className="col-sm-6" onChange={onChangeValue}>
                                <label>{props.values["Title"].Type} Rent / Sale  </label>
                                <label className="radio inline">
                                    <input type="radio" name="option" defaultChecked={props.values["Location_Contact"] ? props.values["Location_Contact"].Option === "Rent" : false} defaultValue="Rent" />
                                    <span>Rent</span>
                                </label>
                                <label className="radio inline">
                                    <input type="radio" name="option" defaultChecked={props.values["Location_Contact"] ? props.values["Location_Contact"].Option === "Sale" : false} defaultValue="Sale" />
                                    <span>Sale</span>
                                </label>
                            </div>
                            : ""
                        }
                    </div>
                    {props.state["All"]
                        ?
                        <button type="submit" className="btn color2-bg float-btn" onClick={handleModify} id="modify_location" >Modify<i className="fal fa-edit" /></button>
                        :
                        props.state["Edit"]
                            ?
                            <button type="submit" className="btn color2-bg float-btn" onClick={handleModify} id="modify_location" >Save<i className="fal fa-edit" /></button>
                            :
                        (
                            <>
                                <button type="submit" className="btn color2-bg float-btn" onClick={handlePrevious} style={{ marginRight: "5px" }}>Previous ( 1/9 )<i className="fal fa-caret-left" /></button>
                                <button type="submit" className="btn color2-bg float-btn" onClick={handleNext} >Next ( 3/9 )<i className="fal fa-caret-right" /></button>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Location_Contact;