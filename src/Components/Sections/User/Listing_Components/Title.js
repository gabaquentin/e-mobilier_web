import React, { useRef } from 'react';
import { NotificationManager } from "react-notifications";
import { CircularProgress } from "@material-ui/core";
import $ from "jquery";

const Title = (props) => {

    const nameRef = useRef();

    function saveData(action) {
        const type = $('#listing-type').val();
        if (nameRef.current.value && type.length) {
            if (type === "Select Category") {
                NotificationManager.info('Selectionnez une category dans la liste');
            }
            else {
                var dest = {};
                dest[action] = true;
                props.onChange(dest, "Title", { "Name": nameRef.current.value, "Type": type });
                if (action === "All") {
                    var modify_title = document.getElementById('modify_title');
                    var title_name_final = document.getElementById('title_name_final');
                    var select_category = document.getElementById('select_category');
                    modify_title.style.display = 'none';
                    select_category.style.display = 'none';
                    title_name_final.style.display = 'block';
                    title_name_final.value = type;
                    $(".title-form").find("input, select").attr("disabled", "disabled");
                }

            }
        } else {
            NotificationManager.info('Veuillez remplir tous les champs');
        }
    }

    function handleNext() {
        const type = $('#listing-type').val();
        let next = "Location_Contact";
        if (type === "Fitness")
            next = "Trainers";
        saveData(next);
    }

    function handleModify() {
        saveData("All");
    }

    return (
        <>
            {props.partner
                ?
                props.partner.Types ?
                <>
                    <div className="dashboard-title fl-wrap">
                        <h3>Add Listing</h3>
                    </div>
                    <div className="profile-edit-container fl-wrap block_box">
                        <div className="custom-form title-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Listing Title <i className="fal fa-briefcase" /></label>
                                    <input type="text" placeholder="Name of your business" ref={nameRef} defaultValue={props.values["Title"] ? props.values["Title"].Name : ""} />
                                </div>
                                <div className="col-md-6">
                                    <label>Type / Category  <i className="fal fa-list-alt" /></label>
                                    <input type="text" placeholder="Name of your business" id="title_name_final" hidden disabled />
                                    <div className="listsearch-input-item" id="select_category">
                                        <select data-placeholder="Select Category" id="listing-type" className="chosen-select no-search-select" >
                                            <option>Select Category</option>
                                            {props.partner.Types.map((option) => (
                                                <option
                                                    value={option}
                                                    defaultChecked={props.values["Title"] ?
                                                        props.values["Title"].Type === option :
                                                        false
                                                    }
                                                >
                                                    {option === "Land" ?
                                                        "Land sale" :
                                                        option === "House" ?
                                                            "House sale" :
                                                            option === "Service" ?
                                                                "Domestic services" :
                                                                option === "Product" ?
                                                                    "product sale" :
                                                                    option === "Restaurant" ?
                                                                        "Restaurant" :
                                                                        option === "Fitness" ?
                                                                            "Fitness Center" :
                                                                            ""
                                                    }
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {props.state["All"]
                                ? <button type="submit" className="btn color2-bg float-btn" onClick={handleModify} id="modify_title">Modify<i className="fal fa-edit" /></button>
                                :
                                <button type="submit" className="btn color2-bg float-btn" onClick={handleNext}>Next ( 2/9 )<i className="fal fa-caret-right" /></button>
                            }
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

export default Title;