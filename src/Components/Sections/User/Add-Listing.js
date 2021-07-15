import React, {useEffect, useState, useRef} from 'react';
import {appendScript} from "../../../Assets/utils/appendScript";
import {NotificationManager} from "react-notifications";
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";

import cloud from '../../../Assets/images/cloud-upload.gif';
import loading from '../../../Assets/images/loading.gif';
import loading2 from '../../../Assets/images/loading-9.gif';

// Get Listing context

// Get Partner context

import { getPartnerById } from '../../../Contexts/Partner/services';

//import different parts

import { addListing, addListing_next } from '../../../Contexts/Listing/services';

import Title from "./Listing_Components/Title";
import Trainers from "./Listing_Components/Trainers";
import Location_Contact from "./Listing_Components/Location_Contact";
import Header_Media from "./Listing_Components/Header_Media";
import Details from "./Listing_Components/Details";
import Facilities from "./Listing_Components/Facilities";
import Content_Widgets from "./Listing_Components/Content_Widgets";
import Working_Hours from "./Listing_Components/Working_Hours";
import Sidebar_Widget from "./Listing_Components/Sidebar_Widget";
import Social from "./Listing_Components/Social";

const Add_Listing = (props) => {

    const [state, setState] = useState({"Title":true});
    const [values, setValues] = useState({});
    const checkRef = useRef();
    let history = useHistory();
    var header_form = document.querySelector("#sec1");

    const [partner, setPartner] = useState({});

    const [error, setError] = useState();
    const [infos, setInfos] = useState();

    useEffect(() => {
        if (error) {
            NotificationManager.error(error.message, error.title);
        }
    }, [error, setError]);

    useEffect(() => {
        if (infos) {
            NotificationManager.infos(infos.message, infos.title);
        }
    }, [infos, setInfos]);

    useEffect(() => {
        if (props.state.user.uid) {
            getPartnerById(props.state.user.uid).then(
                function (partner) {
                    if (partner.empty) {
                        setError({ error: true, message: 'please refresh page', title: 'no partner error' });
                    } else {
                        setPartner(partner.data());
                        appendScript("/js/niceSelect.js", false);
                    }
                    
                },
                function (error) { setError({ error: true, message: 'please refresh page', title: 'no partner error' }) }
            );
        }

    }, []);

    function handleChange(newState,section,newValues) {
        if(newState['Location_Contact'] || newState["All"]){
            appendScript("/js/map-add.js", false);
        }
        if (!newState["All"]) {
            header_form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        appendScript("/js/niceSelect.js", false);
        setState(newState);
        if(section){
            console.log(newValues);
            const updatedValue = {};
            updatedValue[section] = newValues;
            setValues({
                ...values,
                ...updatedValue
            });
        }
    }

    function handleValidate() {

        setState({ "SEND": true });
        header_form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
    }

    function handlegoBack() {

        setState({ "All": true })
        appendScript("/js/map-add.js", false);
        appendScript("/js/niceSelect.js", false);
        header_form.scrollIntoView({ behavior: 'smooth', block: 'start' });

    }

    function handleSubmit(e) {
        e.preventDefault();
        header_form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (checkRef.current.checked) {

            Swal.fire({
                title: 'Saving Data',
                allowEscapeKey: false,
                allowOutsideClick: false,
                padding: '3em',
                background: '#fff url(' + loading2 + ')',
                backdrop: `
                rgba(0,0,123,0.4)
                url(`+ loading + `)
                left top
                no-repeat
                `,
                onOpen: () => {
                    Swal.showLoading();

                    addListing(props.state.user.uid, values)
                        .then(function (docRef) {
                            addListing_next(docRef, values, props.state.user.uid);
                    }).catch(function (error) {
                        Swal.close();
                        setError({ message: 'Please retry some error occured', title: 'Submitting Error' });
                    });
                }
            }).then(
                (result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Your listing has been saved',
                            showConfirmButton: false,
                            timer: 1500,
                            onOpen: () => {
                                history.push("/user#listing");
                            }
                        });
                    }
                    if (result.isDismissed) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Please retry some problem occured',
                            showConfirmButton: false,
                            timer: 2000
                        });
                    }
                }
            );
        } else {
            setError({ message: 'Agree to the terms and conditions before submitting your request', title: '' });
        }

    }

    return (
        <div className="col-md-9" id="header_form">
            {/* profile-edit-container*/}
            {state["Title"] || state["All"]
                ?
                <Title pid={props.state.user.uid} partner={partner} onChange={handleChange} values={values} state={state} />
                :
                <></>
            }
            {/* profile-edit-container end*/}
            {/* profile-edit-container*/}
            {state["Trainers"] || state["All"]
                ?
                <Trainers pid={props.state.user.uid} partner={partner} onChange={handleChange} values={values} state={state} />
                :
                <></>
            }
            {/* profile-edit-container end*/}
            {/* profile-edit-container*/}
            {state["Location_Contact"] || state["All"]
                ?
                <Location_Contact onChange={handleChange} partner={partner} phone={props.user.Phone} values={values} state={state} />
                :
                <></>
            }
            {/* profile-edit-container end*/}
            {/* profile-edit-container*/}
            {state["Header_Media"] || state["All"]
                ?
                <Header_Media onChange={handleChange} partner={partner} phone={props.user.Phone} values={values} state={state} />
                :
                <></>
            }
            {/* profile-edit-container end*/}
            {/* profile-edit-container*/}
            {state["Details"] || state["All"]
                ?
                <Details onChange={handleChange} partner={partner} phone={props.user.Phone} values={values} state={state} />
                :
                <></>
            }
            {/* profile-edit-container end*/}
            {/* profile-edit-container*/}
            {state["Facilities"] || state["All"]
                ?
                (
                    values["Title"].Type !== "House" && values["Title"].Type !== "Restaurant"
                        ? <></>
                        :<Facilities onChange={handleChange} partner={partner} phone={props.user.Phone} values={values} state={state} />
                 )
                
                :
                <></>
            }
            {/* profile-edit-container end*/}
            {/* profile-edit-container*/}
            {state["Content_Widgets"] || state["All"]
                ?
                <Content_Widgets onChange={handleChange} partner={partner} phone={props.user.Phone} values={values} state={state} />
                :
                <></>
            }
            {/* profile-edit-container end*/}
            {/* profile-edit-container*/}
            {state["Working_Hours"] || state["All"]
                ?
                <Working_Hours onChange={handleChange} partner={partner} phone={props.user.Phone} values={values} state={state} from="Add-Listing" />
                :
                <></>
            }
            {/* profile-edit-container end*/}
            {/* profile-edit-container*/}
            {state["Sidebar_Widget"] || state["All"]
                ?
                <Sidebar_Widget onChange={handleChange} partner={partner} phone={props.user.Phone} values={values} state={state} />
                :
                <></>
            }
            {/* profile-edit-container end*/}
            {/* profile-edit-container*/}
            {state["Social"] || state["All"]
                ?
                <Social onChange={handleChange} partner={partner} phone={props.user.Phone} values={values} state={state} />
                :
                <></>
            }
            {/* profile-edit-container end*/}
            {state["All"]
                ?
                <div className="custom-form">
                    <button className="btn color2-bg float-btn" onClick={ handleValidate }> Send Listing<i className="fal fa-paper-plane"/></button>
                </div>
                :
                <></>
            }
            {state["SEND"]
                ?
                <div className="custom-form">
                    <div className="list-single-main-item fl-wrap hidden-section tr-sec">
                        <div className="profile-edit-container">
                            <div className="custom-form">
                                <form onSubmit={handleSubmit}>
                                    <fieldset className="fl-wrap">
                                        <div className="list-single-main-item-title fl-wrap">
                                            <h3>Submit your request</h3>
                                        </div>
                                        <div className="soc-log fl-wrap">
                                            <p>
                                                If you have finished, your listing will be subject to verification no later than 24 hours after the date of publication. 
                                                <br />
                                                You will be notified by email or phone after validation.
                                                <br />
                                                Before submitting your listing please read the terms and conditions if you haven't already done so.

                                            </p>
                                        </div>
                                        <div className="filter-tags">
                                            <input id="check-a" type="checkbox" name="check" ref={checkRef} reauired/>
                                            <label for="check-a">By continuing, you agree to the<a href="#" target="_blank">Terms and Conditions</a>.</label>
                                        </div>
                                            <span className="fw-separator"></span>
                                            <div className="clearfix"></div>
                                            <button type="submit" className="next-form action-button color-bg">Confirm Listing<i className="fal fa-submit" /></button>
                                            <button  onClick={handlegoBack} className="previous-form action-button color-bg">Modify Listing<i className="fal fa-edit" /></button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <></>
            }
        </div>
    );
};

export default Add_Listing;