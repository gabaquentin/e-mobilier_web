import React, { useRef } from 'react';
import { NotificationManager } from "react-notifications";
import $ from "jquery";

const Details = (props) => {

    const detailRef = useRef();

    function saveData(action) {
        if (detailRef.current.value) {
            var dest = {};
            dest[action] = true;
            props.onChange(dest, "Details", { "Details": detailRef.current.value });
            if (action === "All") {
                var modify_details = document.getElementById('modify_details');
                modify_details.style.display = 'none';
                $(".details-form").find("textarea").attr("disabled", "disabled");
            }
        } else {
            NotificationManager.info('Veuillez remplir tous les champs');
        }
    }

    function handleNext() {
        if (props.values["Title"].Type != "House" && props.values["Title"].Type != "Restaurant") {
            saveData("Content_Widgets");
        } else {
            saveData("Facilities");
        }

    }

    function handlePrevious() {
        props.onChange({ "Header_Media": true });
    }

    function handleModify() {
        saveData("All");
    }


    return (
        <>
            <div className="dashboard-title  dt-inbox fl-wrap">
                <h3>Details</h3>
            </div>
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form details-form">
                    <label>Text</label>
                    <textarea cols="40" rows="3" placeholder="Details" ref={detailRef} defaultValue={props.state["Edit"] ? props.values["Details"] : props.values["Details"] ? props.values["Details"].Details : ""} />
                    {props.state["All"]
                        ?
                        <button type="submit" className="btn color2-bg float-btn" onClick={handleModify} id="modify_details" >Modify<i className="fal fa-edit" /></button>
                        :
                        props.state["Edit"]
                            ?
                            <button type="submit" className="btn color2-bg float-btn" onClick={handleModify} id="modify_details" >Save<i className="fal fa-edit" /></button>
                            :
                        (
                            <>
                                <button type="submit" className="btn color2-bg float-btn" onClick={handlePrevious} style={{ marginRight: "5px" }}>Previous ( 3/9 )<i className="fal fa-caret-left" /></button>
                                <button type="submit" className="btn color2-bg float-btn" onClick={handleNext} >Next ( 5/9 )<i className="fal fa-caret-right" /></button>
                            </>
                        )
                    }

                </div>
            </div>
        </>
    );
};

export default Details;