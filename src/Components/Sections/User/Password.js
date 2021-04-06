import React, { useState, useRef } from 'react';
import { useAuth } from "../../../Contexts/AuthContext";

import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';

const Password = (props) => {
    const [disabled, setdisabled] = useState(false);
    const passRef = useRef();
    const passConfirmRef = useRef();
    const currentPassRef = useRef();

    const { reauthenticate, updatePassword } = useAuth();

    async function updatePass(e) {
        e.preventDefault();
        setdisabled(true);
        if (passRef.current.value.length < 6) {
            setdisabled(false);
            return NotificationManager.error('Password min lenght = 6');
        }

        if (passRef.current.value !== passConfirmRef.current.value) {
            setdisabled(false);
            return NotificationManager.error('Passwords do not match');
        }
        
        if (passRef.current.value) {
            await reauthenticate(currentPassRef.current.value).then(function () {
                updatePassword(passRef.current.value);
                NotificationManager.info('Password changed');
                NotificationManager.info('Re-authenticate with your new credential');
                setTimeout(() => { props.dispatch({ type: "disconnected" }); }, 3000);
            }).catch(function (error) {
                console.log(error);
                setdisabled(false);
                if (error.code === "auth/wrong-password") {
                    NotificationManager.error('Wrong current password');
                } else {
                    NotificationManager.error('Please try again some error occured');
                }
            });
            
        }
    }
    return (
        <div className="col-md-9">
            <div className="dashboard-title   fl-wrap">
                <h3>Change Password</h3>
            </div>
            {/* profile-edit-container*/}
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form">
                    <div className="pass-input-wrap fl-wrap">
                        <label>Current Password</label>
                        <input type="password" className="pass-input" placeholder="" defaultValue="" ref={currentPassRef}/>
                        <span className="eye"><i className="far fa-eye" aria-hidden="true"/> </span>
                    </div>
                    <div className="pass-input-wrap fl-wrap">
                        <label>New Password</label>
                        <input type="password" className="pass-input" placeholder="" defaultValue="" ref={passRef} />
                        <span className="eye"><i className="far fa-eye" aria-hidden="true"/> </span>
                    </div>
                    <div className="pass-input-wrap fl-wrap">
                        <label>Confirm New Password</label>
                        <input type="password" className="pass-input" placeholder="" defaultValue="" ref={passConfirmRef} />
                        <span className="eye"><i className="far fa-eye" aria-hidden="true"/> </span>
                    </div>
                    <button disabled={disabled} onClick={updatePass} className="btn    color2-bg  float-btn">Save Changes<i className="fal fa-save"/></button>
                </div>
            </div>
            {/* profile-edit-container end*/}
        </div>
    );
};

export default Password;