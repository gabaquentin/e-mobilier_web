import React, { useState, useEffect } from 'react';
import $ from "jquery";
import { updateListing } from '../../../../Contexts/Listing/services';
import { NotificationManager } from "react-notifications";
import { makeStyles } from '@material-ui/core/styles';
import { Switch, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const Working_Hours = (props) => {

    const [disabled, setDisabled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [today, setToday] = useState("");

    const classes = useStyles();

    const [plan, setPlan] = useState({status: false, value: ""});

    const [values, setValues] = useState({});

    const [state, setState] = useState({
        "Monday": true,
        "Tuesday": true,
        "Wednesday": true,
        "Thursday": true,
        "Friday": true,
        "Saturday": true,
        "Sunday": true,
    });

    useEffect(() => {
        const updateValues = () => {
            if (props.from === "Edit") {
                setValues({
                    "Monday": props.values.Working_Hours.Monday,
                    "Tuesday": props.values.Working_Hours.Tuesday,
                    "Wednesday": props.values.Working_Hours.Wednesday,
                    "Thursday": props.values.Working_Hours.Thursday,
                    "Friday": props.values.Working_Hours.Friday,
                    "Saturday": props.values.Working_Hours.Saturday,
                    "Sunday": props.values.Working_Hours.Sunday,
                });
            } else {
                setValues({
                    "Monday": props.partner.Working_Hours.Monday,
                    "Tuesday": props.partner.Working_Hours.Tuesday,
                    "Wednesday": props.partner.Working_Hours.Wednesday,
                    "Thursday": props.partner.Working_Hours.Thursday,
                    "Friday": props.partner.Working_Hours.Friday,
                    "Saturday": props.partner.Working_Hours.Saturday,
                    "Sunday": props.partner.Working_Hours.Sunday,
                });
            }
        };
        updateValues();
        //console.log(state);
    }, []);

    useEffect(() => {
        const fetchState = () => {
            setToday(new Date().toISOString().substr(0, new Date().toISOString().indexOf(':') + 3));
            if (props.from === "Add-Listing" && props.values["Working_Hours"]) {
                if (props.values["Working_Hours"].Plan_Openning.status) {

                    setPlan({ status: true, value: props.values["Working_Hours"].Plan_Openning.value})
                }

                for (const key in props.values["Working_Hours"].Working_Hours) {
                    if (props.values["Working_Hours"].Working_Hours[key] !== values[key]) {
                        values[key] = props.values["Working_Hours"].Working_Hours[key];
                    }
                    if (!validateTimeRange(props.values["Working_Hours"].Working_Hours[key])) {
                        state[key] = false;
                    }
                }
            }
            else if (props.from === "Edit" && props.values["Plan_Openning"]) {
                if (props.values["Plan_Openning"].status) {
                    console.log("plan true")
                    console.log(props.values["Plan_Openning"].value)
                    setPlan({ status: true, value: props.values["Plan_Openning"].value })
                }

                for (const key in props.values["Working_Hours"]) {
                    if (props.values.Working_Hours[key] !== values[key]) {
                        values[key] = props.values.Working_Hours[key];
                    }
                    if (!validateTimeRange(props.values.Working_Hours[key])) {
                        state[key] = false;
                    }
                }
            }
            else {
                for (const key in values) {
                    if (!validateTimeRange(values[key])) {
                        state[key] = false;
                    }
                }
            }
        };
        fetchState();
    }, []);

    function validateTimeRange(text) {
        if (text.match(/^(^([0-1]?[0-9]|2[0-3]):[0-5][0-9] - ([0-1]?[0-9]|2[0-3]):[0-5][0-9]$)$/) || text === "closed" || text === "Closed") {
            return true;
        } 
        else {
            return false;
        }
        
    }

    function onChangePlan(event) {
        const planTime = event.target.value.substr(event.target.value.indexOf('T') + 1, event.target.value.indexOf(':') + 2);
        const planTimeH = planTime.substr(0, planTime.indexOf(':'));
        const planTimeM = planTime.substr(planTime.indexOf(':') + 1, planTime.indexOf(':') + 2);

        const planDate = event.target.value.substr(0, event.target.value.indexOf('T'));

        const todayTime = today.substr(today.indexOf('T') + 1, today.indexOf(':') + 2);
        const todayTimeH = todayTime.substr(0, todayTime.indexOf(':'));
        const todayTimeM = todayTime.substr(todayTime.indexOf(':') + 1, todayTime.indexOf(':') + 2);

        const todayDate = today.substr(0, today.indexOf('T'));

        if (((((parseInt(todayTimeH) * 60) + parseInt(todayTimeM)) < ((parseInt(planTimeH) * 60) + parseInt(planTimeM))) && (planDate === todayDate)) || (planDate !== todayDate)) {
            setPlan({ ...plan, value: event.target.value });
            document.getElementById("datetime-local").style.color = "#5ECEB1";
        } else {
            NotificationManager.error('An earlier date cannot be accepted');
            document.getElementById("datetime-local").style.color = "#CF382D";
            setPlan({ ...plan, value: "" });
        }
    }
    function onChangeValue(event) {
        //console.log(/^(^([0-1]?[0-9]|2[0-3]):[0-5][0-9] - ([0-1]?[0-9]|2[0-3]):[0-5][0-9]$)$/.test(event.target.value));

        if (validateTimeRange(event.target.value)) {
            document.getElementById(event.target.name).style.borderColor = "#5ECEB1";
            state[event.target.name] = true;
            values[event.target.name] = event.target.value;
        } else {
            document.getElementById(event.target.name).style.borderColor = "#CF382D";
            state[event.target.name] = false;
        }
    }

    // Add-Listing functions

    const handlePlanChange = (event) => {
        setPlan({...plan, status: event.target.checked});
    };

    function saveData(action) {
        let valid = true;
        for (const key in state) {
            if (!state[key]) {
                valid = false;
                document.getElementById(key).style.borderColor = "#CF382D";
                break;
            }
        }
        if (plan.status && plan.value === "") {
            valid = false;
            document.getElementById("datetime-local").style.color = "#CF382D";
            
        }

        if (valid) {
            var dest = {};
            dest[action] = true;
            props.onChange(dest, "Working_Hours", { "Working_Hours": values, "Plan_Openning": plan });
            if (action === "All") {
                var modify_wh = document.getElementById('modify_wh');
                modify_wh.style.display = 'none';
                $(".wh-form").find("input").attr("disabled", "disabled");
            }
        } else {
            NotificationManager.error('Red areas mean the value is incorrect', 'Input error');
        }

    }

    function handleNext() {
        saveData("Sidebar_Widget");
    }

    function handlePrevious() {
        props.onChange({ "Content_Widgets": true });
    }

    function handleModify() {
        saveData("All");
    }

    // Partner functions

    function save_Change() {
        let valid = true;
        for (const key in state) {
            if (!state[key]) {
                valid = false;
                document.getElementById(key).style.borderColor = "#CF382D";
                break;
            }
        }

        if (valid) {

            if (props.partner.Working_Hours['Monday'] === values['Monday'] && props.partner.Working_Hours['Tuesday'] === values['Tuesday'] && props.partner.Working_Hours['Wednesday'] === values['Wednesday'] && props.partner.Working_Hours['Thursday'] === values['Thursday'] && props.partner.Working_Hours['Friday'] === values['Friday'] && props.partner.Working_Hours['Saturday'] === values['Saturday'] && props.partner.Working_Hours['Sunday'] === values['Sunday']) {
                NotificationManager.info('Nothing to update');
                }
            else {
                updateListing({ Working_Hours: values }, props.pid);
                setDisabled(true);
                setHidden(true);
                NotificationManager.info('Updated succesfully');
                }
        }
        else {
            NotificationManager.error('hh:mm - hh:mm','Please respect a Valid format : ');
        }
    }

    return (
        <>
            <div className="dashboard-title  dt-inbox fl-wrap">
                <h3>Working Hours</h3>
            </div>
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form wh-form">
                    {props.from === "Add-Listing" || props.from === "Edit" ? 
                        <div className="row">
                            <div className="col-md-4">
                                {/* act-widget*/}
                                <div className="act-widget fl-wrap">
                                    <div className="act-widget-header">
                                        <h4>Plan an opening ?</h4>
                                        <div className="onoffswitch">
                                            <Switch
                                                checked={props.from === "Add-Listing" ? props.values.Working_Hours ? props.values.Working_Hours["Plan_Openning"].status : plan.status : plan.status}
                                                onChange={handlePlanChange}
                                                color="primary"
                                                name="plan"
                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* act-widget end*/}
                            </div>
                            <div className="col-md-4" hidden={props.from === "Add-Listing" ? props.values.Working_Hours ? !props.values.Working_Hours["Plan_Openning"].status : !plan.status : !plan.status}>
                                {/* act-widget*/}
                                <div className="act-widget fl-wrap">
                                    <TextField
                                        id="datetime-local"
                                        type="datetime-local"
                                        placeholder="Openning date"
                                        defaultValue={props.from === "Add-Listing" ? props.values.Working_Hours ? props.values.Working_Hours["Plan_Openning"].value : plan.value : plan.value}
                                        onChange={onChangePlan}
                                        margin="dense"
                                        disabled={props.from === "Add-Listing" ? props.values.Working_Hours ? !props.values.Working_Hours["Plan_Openning"].status : !plan.status : !plan.status}
                                        inputProps={{
                                            min: today
                                        }}
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                {/* act-widget end*/}
                            </div>
                        </div>
                        :""
                    }
                    <div className="row" onChange={onChangeValue}>
                        <div className="col-sm-4">
                            <label>Monday <i className="fal fa-clock" /></label>
                            <input type="text" placeholder="9:00 - 17:30" name="Monday" id="Monday" defaultValue={props.from === "Add-Listing" ? props.values["Working_Hours"] ? props.values["Working_Hours"].Working_Hours.Monday : values.Monday : values.Monday} disabled={disabled} />
                        </div>
                        <div className="col-sm-4">
                            <label>Tuesday <i className="fal fa-clock" /></label>
                            <input type="text" placeholder="9:00 - 17:30" name="Tuesday" id="Tuesday" defaultValue={props.from === "Add-Listing" ? props.values["Working_Hours"] ? props.values["Working_Hours"].Working_Hours.Tuesday : values.Tuesday : values.Tuesday} disabled={disabled} />
                        </div>
                        <div className="col-sm-4">
                            <label>Wednesday <i className="fal fa-clock" /></label>
                            <input type="text" placeholder="9:00 - 17:30" name="Wednesday" id="Wednesday" defaultValue={props.from === "Add-Listing" ? props.values["Working_Hours"] ? props.values["Working_Hours"].Working_Hours.Wednesday : values.Wednesday : values.Wednesday} disabled={disabled} />
                        </div>
                        <div className="col-sm-4">
                            <label>Thursday <i className="fal fa-clock" /></label>
                            <input type="text" placeholder="9:00 - 17:30" name="Thursday" id="Thursday" defaultValue={props.from === "Add-Listing" ? props.values["Working_Hours"] ? props.values["Working_Hours"].Working_Hours.Thursday : values.Thursday : values.Thursday} disabled={disabled} />
                        </div>
                        <div className="col-sm-4">
                            <label>Friday <i className="fal fa-clock" /></label>
                            <input type="text" placeholder="9:00 - 14:30" name="Friday" id="Friday" defaultValue={props.from === "Add-Listing" ? props.values["Working_Hours"] ? props.values["Working_Hours"].Working_Hours.Friday : values.Friday : values.Friday} disabled={disabled} />
                        </div>
                        <div className="col-sm-4">
                            <label>Saturday <i className="fal fa-clock" /></label>
                            <input type="text" placeholder="closed" name="Saturday" id="Saturday" defaultValue={props.from === "Add-Listing" ? props.values["Working_Hours"] ? props.values["Working_Hours"].Working_Hours.Saturday : values.Saturday : values.Saturday} disabled={disabled} />
                        </div>
                        <div className="col-sm-4">
                            <label>Sunday <i className="fal fa-clock" /></label>
                            <input type="text" placeholder="Closed" name="Sunday" id="Sunday" defaultValue={props.from === "Add-Listing" ? props.values["Working_Hours"] ? props.values["Working_Hours"].Working_Hours.Sunday : values.Sunday : values.Sunday} disabled={disabled} />
                        </div>
                    </div>
                    {props.from === "Add-Listing" ?
                        props.state["All"] ?
                            <button type="submit" className="btn color2-bg float-btn" onClick={handleModify} id="modify_wh" >Modify<i className="fal fa-edit" /></button>
                            :
                            (
                            <>
                                <button type="submit" className="btn color2-bg float-btn" onClick={handlePrevious} style={{ marginRight: "5px" }}>Previous ( 6/9 )<i className="fal fa-caret-left" /></button>
                                <button type="submit" className="btn color2-bg float-btn" onClick={handleNext} >Next ( 8/9 )<i className="fal fa-caret-right" /></button>
                            </>
                            )
                        : props.from === "Partner" ?

                            <button disabled={disabled} hidden={hidden} onClick={save_Change} className="btn color2-bg float-btn" >Save Change<i className="fal fa-save" /></button>

                            : props.from === "Edit" ?
                                <button disabled={disabled} hidden={hidden} onClick={save_Change} className="btn color2-bg float-btn" >Save Edit<i className="fal fa-save" /></button>
                                :""
                    }

                </div>
            </div>
        </>
    );
};

export default Working_Hours;


