import React, { useEffect, useRef, useState } from 'react';
import app from "../../../firebase";
import { NotificationManager } from "react-notifications";
import { CircularProgress } from '@material-ui/core';
import { appendScript } from "../../../Assets/utils/appendScript";
import $ from "jquery";
import Working_Hours from "./Listing_Components/Working_Hours";

// Get Partner context

import { getPartnerById } from '../../../Contexts/Partner/services';

const Partner = (props) => {

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

    return (
        <div className="col-md-9">
            <Title pid={props.state.user.uid} partner={partner} phone={props.user.Phone} />
            {partner.Working_Hours
                ?
                <Working_Hours pid={props.state.user.uid} partner={partner} from="Partner" />
                :
                <>
                    <div className="dashboard-title  dt-inbox fl-wrap">
                        <h3>Working Hours</h3>
                    </div>
                    <div className="profile-edit-container fl-wrap block_box">
                        <div className="custom-form">
                            <div className="row">
                                <CircularProgress />
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default Partner;

const Title = (props) => {

    const [disabled, setDisabled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    const options = [
        {
            label: "Land sale",
            value: "Land",
            selected: false
        },
        {
            label: "House sale",
            value: "House",
            selected: false
        },
        {
            label: "Domestic services",
            value: "Service",
            selected: false
        },
        {
            label: "product sale",
            value: "Product",
            selected: false
        },
        {
            label: "restaurant",
            value: "Restaurant",
            selected: false
        },
        {
            label: "fitness center",
            value: "Fitness",
            selected: false
        },
    ];
    if (props.partner.Types) {
        for (let i in props.partner.Types) {
            for (let j in options) {
                if (options[j].value === props.partner.Types[i]) {
                    options[j].selected = true;
                }
            }
        }
    }

    function arrayCompare(_arr1, _arr2) {
        if (
            !Array.isArray(_arr1)
            || !Array.isArray(_arr2)
            || _arr1.length !== _arr2.length
        ) {
            return false;
        }

        // .concat() to not mutate arguments
        const arr1 = _arr1.concat().sort();
        const arr2 = _arr2.concat().sort();

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }

        return true;
    }

    function save_Change() {
        const types = $('#partner-type').val();
        let phone = props.partner.Phone;
        if (phone === "")
            phone = props.phone;
        if (types.length) {
            if (nameRef.current.value === props.partner.Name && emailRef.current.value === props.partner.Email && phoneRef.current.value === phone && arrayCompare(types, props.partner.Types)) {
                NotificationManager.info('Nothing to update');
            } else {
                const db = app.firestore();
                db.collection('Partners').doc(props.pid).update({
                    Name: nameRef.current.value,
                    Email: emailRef.current.value,
                    Phone: phoneRef.current.value,
                    Types: types
                });
                setDisabled(true);
                setHidden(true);
                NotificationManager.info('Updated succesfully');
            }
        }
        else {
            NotificationManager.info('Le champ type ne peut etre vide');
        }
    }
    return (
        <>
            {props.partner.Types
                ?
                <>
                    <div className="dashboard-title   fl-wrap">
                        <h3>Partner Informations </h3>
                    </div>
                    <div className="profile-edit-container fl-wrap block_box">
                        <div className="custom-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>{props.partner.Org === 'owner' ? 'Owner Name' : 'Organisation Name'} <i className={props.partner.Org === 'owner' ? 'fas fa-address-book' : 'fal fa-briefcase'} /></label>
                                    <input type="text" placeholder="Name of your business" defaultValue={props.partner.Name} ref={nameRef} disabled={disabled} />
                                </div>
                                <div className="col-md-6">
                                    <label>Type / Category</label>
                                    <div className="listsearch-input-item">
                                        <select className="chosen-select no-search-select" id="partner-type" disabled={disabled} multiple>
                                            {options.map((option) => (
                                                <option value={option.value} selected={option.selected}>{option.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Email <i className="fal fa-envelope" /></label>
                                    <input type="text" placeholder="Name of your business" defaultValue={props.partner.Email} ref={emailRef} disabled={disabled} />
                                </div>
                                <div className="col-md-6">
                                    <label>Phone(s) <i className="fal fa-phone" /></label>
                                    <input type="text" placeholder="Name of your business" defaultValue={props.partner.Phone !== "" ? props.partner.Phone : props.phone} ref={phoneRef} disabled={disabled} />
                                </div>
                            </div>
                            <button disabled={disabled} hidden={hidden} onClick={save_Change} type="submit" className="btn color2-bg float-btn" >Save Change<i className="fal fa-save" /></button>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="dashboard-title  dt-inbox fl-wrap">
                        <h3>Partner Informations</h3>
                    </div>
                    <div className="profile-edit-container fl-wrap block_box">
                        <div className="custom-form">
                            <div className="row">
                                <CircularProgress />
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );

};
