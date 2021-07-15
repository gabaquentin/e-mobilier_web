import React, { useState, useEffect } from 'react';
import $ from "jquery";

const Social = (props) => {

    const [state, setState] = useState({
        facebook: "",
        twitter: "",
        instagram: "",
        website: "",
    });

    useEffect(() => {
        const fetchState = () => {
            if (props.values["Social"]) {
                for (const key in props.values["Social"].Social) {
                    if (props.values["Social"].Social[key] !== state[key]) {
                        state[key] = props.values["Social"].Social[key];
                    }
                }
            }
        };
        fetchState();
        //console.log(state);
    }, []);

    function handleChange(event) {
        if (event.target.name === validate_url(event.target.value)) {
            document.getElementById(event.target.name).style.borderColor = "#5ECEB1";
            state[event.target.name] = event.target.value;
        } else {
            document.getElementById(event.target.name).style.borderColor = "#CF382D";
        }
    }

    function handlePrevious() {
        props.onChange({ "Sidebar_Widget": true });
    }

    function validate_url(url) {
        if (/^(https?:\/\/)?((w{3}\.)?)twitter\.com\/(#!\/)?[a-z0-9_]+$/i.test(url))
            return 'twitter';

        if (/^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i.test(url))
            return 'facebook';

        if (/^\s*(http\:\/\/)?instagram\.com\/[a-z\d-_]{1,255}\s*$/i.test(url))
            return 'instagram';

        if (/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(url))
            return 'website';

        return 'unknown';
    }

    function saveData(action) {
        var dest = {};
        dest[action] = true;
        props.onChange(dest, "Social", { "Social": state });
        if (action === "All") {
            var modify_social = document.getElementById('modify_social');
            modify_social.style.display = 'none';
        }
    }

    function handleNext() {
        props.onChange({ "All": true }, "Social", { "Social": state });

    }

    function handleModify() {
        props.onChange({ "All": true }, "Social", { "Social": state });
        var modify_social = document.getElementById('modify_social');
        modify_social.style.display = 'none';
        $(".social-form").find("input").attr("disabled", "disabled");
    }

    return (
        <>
            <div className="dashboard-title  dt-inbox fl-wrap">
                <h3>Your  Socials</h3>
            </div>
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form social-form" onChange={handleChange}>
                    <label>Facebook <i className="fab fa-facebook" /></label>
                    <input type="text" placeholder="https://www.facebook.com/" name="facebook" defaultValue={!props.state['Edit'] ? props.values["Social"] ? props.values["Social"].Social.facebook : state.facebook : state.facebook} id="facebook" />
                    <label>Twitter<i className="fab fa-twitter" />  </label>
                    <input type="text" placeholder="https://twitter.com/" name="twitter" defaultValue={!props.state['Edit'] ? props.values["Social"] ? props.values["Social"].Social.twitter : state.twitter : state.twitter} id="twitter" />
                    <label> Instagram <i className="fab fa-instagram" />  </label>
                    <input type="text" placeholder="https://www.instagram.com/" name="instagram" defaultValue={!props.state['Edit'] ? props.values["Social"] ? props.values["Social"].Social.instagram : state.instagram : state.instagram} id="instagram" />
                    <label> Website <i class="fas fa-globe" />  </label>
                    <input type="text" placeholder="https://www.mywebsite.com/" name="website" defaultValue={!props.state['Edit'] ? props.values["Social"] ? props.values["Social"].Social.website : state.website : state.website} id="website" />
                    {props.state["All"]
                        ?
                        <button type="submit" className="btn color2-bg float-btn" onClick={handleModify} id="modify_social" >Modify<i className="fal fa-edit" /></button>
                        :
                        props.state["Edit"]
                            ?
                        <button type="submit" className="btn color2-bg float-btn" onClick={handleModify} id="modify_social" >Save<i className="fal fa-edit" /></button>
                        :
                        (
                            <>
                                <button type="submit" className="btn color2-bg float-btn" onClick={handlePrevious} style={{ marginRight: "5px" }}>Previous ( 8/9 )<i className="fal fa-caret-left" /></button>
                                <button className="btn    color2-bg  float-btn" onClick={handleNext} >Finish<i className="fal fa-list" /></button>
                            </>
                        )
                    }

                </div>
            </div>
        </>
    );
};

export default Social;