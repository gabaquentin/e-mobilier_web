import React, { useEffect } from 'react';

import { appendScript } from '../../../Assets/utils/appendScript';

const Profile = () => {

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
            <div className="dashboard-title fl-wrap">
                <h3>Your Profile</h3>
            </div>
            {/* profile-edit-container*/}
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form">
                    <div className="row">
                        <div className="col-sm-6">
                            <label>First Name <i className="fal fa-user"></i></label>
                            <input type="text" placeholder="Jessie" value="" />
                        </div>
                        <div className="col-sm-6">
                            <label>Second Name <i className="fal fa-user"></i></label>
                            <input type="text" placeholder="Manrty" value="" />
                        </div>
                        <div className="col-sm-6">
                            <label>Email Address<i className="far fa-envelope"></i>  </label>
                            <input type="text" placeholder="JessieManrty@domain.com" value="" />
                        </div>
                        <div className="col-sm-6">
                            <label>Phone<i className="far fa-phone"></i>  </label>
                            <input type="text" placeholder="+7(123)987654" value="" />
                        </div>
                        <div className="col-sm-6">
                            <label> Adress <i className="fas fa-map-marker"></i>  </label>
                            <input type="text" placeholder="USA 27TH Brooklyn NY" value="" />
                        </div>
                        <div className="col-sm-6">
                            <label> Website <i className="far fa-globe"></i>  </label>
                            <input type="text" placeholder="themeforest.net" value="" />
                        </div>
                    </div>
                    <label> Notes</label>
                    <textarea cols="40" rows="3" placeholder="About Me" style={{marginBottom: '20px'}}></textarea>
                    <div className="clearfix"></div>
                    <label>Change Avatar</label>
                    <div className="clearfix"></div>
                    <div className="listsearch-input-item fl-wrap">
                        <div className="fuzone">
                            <form>
                                <div className="fu-text">
                                    <span><i className="fal fa-images"></i> Click here or drop files to upload</span>
                                    <div className="photoUpload-files fl-wrap"></div>
                                </div>
                                <input type="file" className="upload" multiple />
                            </form>
                                        </div>
                        </div>
                    </div>
                </div>
                {/* profile-edit-container end*/}
                            <div className="dashboard-title dt-inbox fl-wrap">
                    <h3>Your  Socials</h3>
                </div>
                {/* profile-edit-container*/}
                            <div className="profile-edit-container fl-wrap block_box">
                    <div className="custom-form">
                        <label>Facebook <i className="fab fa-facebook"></i></label>
                        <input type="text" placeholder="https://www.facebook.com/" value="" />
                        <label>Twitter<i className="fab fa-twitter"></i>  </label>
                        <input type="text" placeholder="https://twitter.com/" value="" />
                        <label>Vkontakte<i className="fab fa-vk"></i>  </label>
                        <input type="text" placeholder="https://vk.com" value="" />
                        <label> Instagram <i className="fab fa-instagram"></i>  </label>
                        <input type="text" placeholder="https://www.instagram.com/" value="" />
                        <button className="btn  color2-bg  float-btn">Save Changes<i className="fal fa-save"></i></button>
                    </div>
                </div>
                {/* profile-edit-container end*/}
                        </div>
    );
}

export default Profile;