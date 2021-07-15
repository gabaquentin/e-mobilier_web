import React, { useState } from 'react';
import $ from "jquery";

const Facilities = (props) => {

    let default_facilities = {
        "Free_Wifi": false,
        "Parking": false,
        "Fitness_Center": false,
        "Non_Smoking": false,
        "Airport_Shuttle": false,
        "Air_Conditioning": false
    };

    if (props.values["Facilities"]) {
        default_facilities = props.values["Facilities"].Facilities;
    }
    const [facilities, setFacilities] = useState(default_facilities);
    function onChangeValue(event) {
        facilities[event.target.value] = !facilities[event.target.value];
    }

    function saveData(action) {
        var dest = {};
        dest[action] = true;
        props.onChange(dest, "Facilities", { "Facilities": facilities });
        if (action === "All") {
            var modify_facilities = document.getElementById('modify_facilities');
            modify_facilities.style.display = 'none';
            $(".facilities-form").find("input").attr("disabled", "disabled");
        }
    }

    function handleNext() {
        saveData("Content_Widgets");
    }

    function handlePrevious() {
        props.onChange({ "Details": true });
    }

    function handleModify() {
        saveData("All");
    }

    return (
        <>
            <div className="dashboard-title  dt-inbox fl-wrap">
                <h3>Facilities</h3>
            </div>
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form facilities-form" onChange={onChangeValue}>
                    {/* Checkboxes */}
                    <ul className="fl-wrap filter-tags no-list-style ds-tg">
                        <li>
                            <input id="check-aaa5" type="checkbox" name="check" value="Free_Wifi" defaultChecked={props.values["Facilities"] ? props.values["Facilities"].Facilities["Free_Wifi"] : false} />
                            <label form="check-aaa5">Free WiFi</label>
                        </li>
                        <li>
                            <input id="check-bb5" type="checkbox" name="check" value="Parking" defaultChecked={props.values["Facilities"] ? props.values["Facilities"].Facilities["Parking"] : false} />
                            <label form="check-bb5">Parking</label>
                        </li>
                        <li>
                            <input id="check-dd5" type="checkbox" name="check" value="Fitness_Center" defaultChecked={props.values["Facilities"] ? props.values["Facilities"].Facilities["Fitness_Center"] : false} />
                            <label form="check-dd5">Fitness Center</label>
                        </li>
                        <li>
                            <input id="check-cc5" type="checkbox" name="check" value="Non_Smoking" defaultChecked={props.values["Facilities"] ? props.values["Facilities"].Facilities["Non_Smoking"] : false} />
                            <label form="check-cc5">Non-smoking Rooms</label>
                        </li>
                        <li>
                            <input id="check-ff5" type="checkbox" name="check" value="Airport_Shuttle" defaultChecked={props.values["Facilities"] ? props.values["Facilities"].Facilities["Airport_Shuttle"] : false} />
                            <label form="check-ff5">Airport Shuttle</label>
                        </li>
                        <li>
                            <input id="check-c4" type="checkbox" name="check" value="Air_Conditioning" defaultChecked={props.values["Facilities"] ? props.values["Facilities"].Facilities["Air_Conditioning"] : false} />
                            <label form="check-c4">Air Conditioning</label>
                        </li>
                    </ul>
                    {/* Checkboxes end */}
                    {props.state["All"]
                        ?
                        <button type="submit" className="btn color2-bg float-btn" onClick={handleModify} id="modify_facilities" >Modify<i className="fal fa-edit" /></button>
                        :
                        (
                            <>
                                <button type="submit" className="btn color2-bg float-btn" onClick={handlePrevious} style={{ marginRight: "5px" }}>Previous ( 4/9 )<i className="fal fa-caret-left" /></button>
                                <button type="submit" className="btn color2-bg float-btn" onClick={handleNext} >Next ( 6/9 )<i className="fal fa-caret-right" /></button>
                            </>
                        )
                    }

                </div>
            </div>
        </>
    );
};

export default Facilities;