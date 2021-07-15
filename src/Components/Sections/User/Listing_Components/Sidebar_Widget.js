import React, { useEffect } from 'react';
import { Switch } from "@material-ui/core";
import $ from "jquery";

const Sidebar_Widget = (props) => {

    const [state, setState] = React.useState({
        booking: false,
        price: false,
        instagram: false,
    });

    useEffect(() => {
        const updateState = () => {
            if (props.values["Sidebar_Widget"]) {
                setState({
                    booking: props.values["Sidebar_Widget"].Sidebar_Widget.booking,
                    price: props.values["Sidebar_Widget"].Sidebar_Widget.price,
                    instagram: props.values["Sidebar_Widget"].Sidebar_Widget.instagram,
                });
            }
        };
        updateState()
    }, []);
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        $("input[name=" + event.target.name + "]").val('');
    };

    function saveData(action) {
        var dest = {};
        dest[action] = true;
        props.onChange(dest, "Sidebar_Widget", { "Sidebar_Widget": state });
        if (action === "All") {
            var modify_sw = document.getElementById('modify_sw');
            modify_sw.style.display = 'none';
            $(".sw-form").find("input").attr("disabled", "disabled");
        }
    }

    function handleNext() {
        saveData("Social");
    }

    function handlePrevious() {
        props.onChange({ "Working_Hours": true });
    }

    function handleModify() {
        saveData("All");
    }

    return (
        <>
            <div className="dashboard-title  dt-inbox fl-wrap">
                <h3>Sidebar Widgets</h3>
            </div>
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form sw-form">
                    {/* act-widget*/}
                    <div className="act-widget fl-wrap">
                        <div className="act-widget-header">
                            <h4>1. Booking Form</h4>
                            <div className="onoffswitch">
                                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" defaultChecked />
                                <Switch
                                    checked={state.booking}
                                    onChange={handleChange}
                                    color="primary"
                                    name="booking"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </div>
                        </div>
                    </div>
                    {/* act-widget end*/}
                    {/* act-widget*/}
                    <div className="act-widget fl-wrap">
                        <div className="act-widget-header">
                            <h4>2. Price Range </h4>
                            <div className="onoffswitch">
                                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch2" />
                                <Switch
                                    checked={state.price}
                                    onChange={handleChange}
                                    color="primary"
                                    name="price"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </div>
                        </div>
                    </div>
                    {/* act-widget end*/}
                    {/* act-widget*/}
                    <div className="act-widget fl-wrap">
                        <div className="act-widget-header">
                            <h4>3. instagram</h4>
                            <div className="onoffswitch">
                                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch3" defaultChecked />
                                <Switch
                                    checked={state.instagram}
                                    onChange={handleChange}
                                    color="primary"
                                    name="instagram"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </div>
                        </div>
                        <label>Api key<i className="fab fa-mixcloud" /></label>
                        <input type="text" placeholder="Api key for instagram plugin" name="instagram" defaultValue="" disabled={!state.instagram} />
                    </div>
                    {/* act-widget end*/}
                    {props.state["All"]
                        ?
                        <button type="submit" className="btn color2-bg float-btn" onClick={handleModify} id="modify_sw" >Modify<i className="fal fa-edit" /></button>
                        :
                        (
                            <>
                                <button type="submit" className="btn color2-bg float-btn" onClick={handlePrevious} style={{ marginRight: "5px" }}>Previous ( 7/9 )<i className="fal fa-caret-left" /></button>
                                <button type="submit" className="btn color2-bg float-btn" onClick={handleNext} >Next ( 9/9 )<i className="fal fa-caret-right" /></button>
                            </>
                        )
                    }

                </div>
            </div>
        </>
    );
};

export default Sidebar_Widget;