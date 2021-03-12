import React, { useEffect } from 'react';

import { appendScript } from '../../../Assets/utils/appendScript';

const Password = () => {

    useEffect(() => {
        const appendScripts = () => {

            appendScript("/js/jquery.min.js", false);
            appendScript("/js/plugins.js", false);
            appendScript("/js/scripts.js", false);

        }
        appendScripts();
    }, []);

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
                        <input type="password" className="pass-input" placeholder="" value="" />
                        <span className="eye"><i className="far fa-eye" aria-hidden="true"></i> </span>
                    </div>
                    <div className="pass-input-wrap fl-wrap">
                        <label>New Password</label>
                        <input type="password" className="pass-input" placeholder="" value="" />
                        <span className="eye"><i className="far fa-eye" aria-hidden="true"></i> </span>
                    </div>
                    <div className="pass-input-wrap fl-wrap">
                        <label>Confirm New Password</label>
                        <input type="password" className="pass-input" placeholder="" value="" />
                        <span className="eye"><i className="far fa-eye" aria-hidden="true"></i> </span>
                    </div>
                    <button className="btn    color2-bg  float-btn">Save Changes<i className="fal fa-save"></i></button>
                </div>
            </div>
            {/* profile-edit-container end*/}
        </div>
    );
}

export default Password;