import React, {useContext, useEffect, useState} from 'react';
import { useAuth } from "../../Contexts/AuthContext";

import $ from "jquery";
import Swal from 'sweetalert2';
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';

import PhoneInput from 'react-phone-number-input';

import { isValidPhoneNumber } from 'react-phone-number-input';


import { appendScript } from "../../Assets/utils/appendScript";

import loading from '../../Assets/images/Bw99.gif';
import loading2 from '../../Assets/images/loading-9.gif';

// Get User services

import { createUser, updateUserRole } from '../../Contexts/User/services';
import { UserContext } from "../../Contexts/User/userContext";

// Get Partner services

import { createPartner } from '../../Contexts/Partner/services';

const AuthForm = () =>{

    const [state, dispatch] = useContext(UserContext);
    const [user, setUser] = useState({});

    const { login, signup } = useAuth();
    const [loadingLogin, setLoadingLogin] = useState(false);
    const [loadingRegister, setLoadingRegister] = useState(false);
    const [loadingPartner, setLoadingPartner] = useState(false);

    const [phone, setPhone] = useState();

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
        appendScript("/js/niceSelect.js", false);
    }, [state.user]);

    async function handleLoginSubmit(e) {
        e.preventDefault();
        const { email, password } = e.target.elements;
        
        try {
            setLoadingLogin(true);

            Swal.fire({
                title: 'Connexion ...',
                allowEscapeKey: false,
                allowOutsideClick: false,
                padding: '3em',
                background: '#fff url(' + loading2 + ')',
                backdrop: `
                rgba(0,0,123,0.4)
                url(`+ loading + `)
                left top
                no-repeat
                `,
                onOpen() {
                    Swal.showLoading();
                }
            }).then(
                (result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Connected',
                            showConfirmButton: false,
                            timer: 4000
                        });
                    }
                    if (result.isDismissed) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Please retry some problem occured',
                            showConfirmButton: false,
                            timer: 2000
                        });
                    }
                }
            );
            await login(email.value, password.value).then(() => {
                Swal.clickConfirm();
            }).catch(() => {
                Swal.close();
            });

            dispatch({ type: "connected" });
            $('.modal , .reg-overlay').fadeOut(200);
            $("html, body").removeClass("hid-body");
            $(".modal_main").removeClass("vis_mr");

        } catch (error) {
            if (error.code === "auth/user-not-found") {
                Swal.close();
                setError({ message: 'User not found', title: 'retry' });
            }
            else if (error.code === "auth/wrong-password") {
                Swal.close();
                setError({ message: 'Wrong password', title: 'retry' });
            }
            else if (error.code === "auth/invalid-email") {
                Swal.close();
                setError({ message: 'Invalid email', title: 'retry' });
            }
            else {
                Swal.close();
                setError({ message: 'unexpected error', title: 'retry' });
            }

        }
        setLoadingLogin(false)
    }

    async function handleRegisterSubmit(e) {
        e.preventDefault();

        const { first_name, last_name, email, password, password_confirm } = e.target.elements;

        if (password.value !== password_confirm.value) {
            document.getElementById("password-register-input").style.borderColor = "#eb4c34";
            document.getElementById("confirm-password-register-input").style.borderColor = "#eb4c34";
            return setError({ message: 'Password do not match', title: '' });
        } else {
            document.getElementById("password-register-input").style.borderColor = "#e5e7f2";
            document.getElementById("confirm-password-register-input").style.borderColor = "#e5e7f2";
        }
        try {
            if (isValidPhoneNumber(phone)) {
                document.getElementById("phone-register-input").style.borderColor = "#e5e7f2";
                setLoadingRegister(true);

                Swal.fire({
                    title: 'Saving Data',
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    padding: '3em',
                    background: '#fff url(' + loading2 + ')',
                    backdrop: `
                rgba(0,0,123,0.4)
                url(`+ loading + `)
                left top
                no-repeat
                `,
                    onOpen() {
                        Swal.showLoading();
                }
                }).then(
                    (result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Welcome ',
                                showConfirmButton: false,
                                imageUrl: loading,
                                imageWidth: 400,
                                imageHeight: 200,
                                imageAlt: 'Custom image',
                                timer: 4000
                            });
                        }
                        if (result.isDismissed) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Please retry some problem occured',
                                showConfirmButton: false,
                                timer: 2000
                            });
                        }
                    }
                );
                await signup(email.value, password.value).then((userCredential) => {

                    userCredential.user.sendEmailVerification();
                    userCredential.user.updateProfile({
                        displayName: last_name.value,
                        phoneNumber: phone
                    });

                    createUser(userCredential.user.uid, first_name.value, last_name.value, phone, userCredential.user.email);

                }).then(() => {
                    Swal.clickConfirm();
                }).catch(() => {
                    Swal.Close();
                });

                dispatch({ type: "connected" });
                $('.modal , .reg-overlay').fadeOut(200);
                $("html, body").removeClass("hid-body");
                $(".modal_main").removeClass("vis_mr");

            }
            else {
                document.getElementById("phone-register-input").style.borderColor = "#eb4c34";
                setError({ message: 'Phone number is not valid', title: 'phone' });
            }
            

        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setError({ message: 'email already in use', title: 'change your email' });
            }
            else if (error.code === "auth/weak-password") {
                setInfos({ message: 'Password min-lenght : 6', title: 'set strong password' });
            }
            else {
                setError({ message: 'Failed to register', title: 'please try again' });
            }
            console.log(error)
        }
        setLoadingRegister(false)
    }

    async function handlePartnerSubmit(e) {
        e.preventDefault();

        const types = $('#partner-type').val();
        const org = $('#partner-org').val();
        if(types.length && org.length){
            try {
                setLoadingPartner(true);

                updateUserRole(state.user.uid, 'PARTNER');
                createPartner(state.user.uid, state.user.displayName, state.user.email, types, org);
                dispatch({ type: "connected" });
                $('.modal , .reg-overlay').fadeOut(200);
                $("html, body").removeClass("hid-body");
                $(".modal_main").removeClass("vis_mr");

            } catch (error) {
                setError({ message: 'An error has occurred please try again', title: '' });
            }
            setLoadingPartner(false)
        } else {
            setError({ message: 'please complete all fields', title: '' });
        }

    }
    

        return (
            <div className="main-register-wrap modal">
                <div className="reg-overlay"/>
                <div className="main-register-holder tabs-act">
                    {state.user.length != 0
                        ? (
                            <div className="main-register fl-wrap  modal_main">
                                <div className="main-register_title">Become our partner member <span><strong>Town</strong>Hub<strong>.</strong></span></div>
                                <div className="close-reg"><i className="fal fa-times" /></div>
                                {/* tabs */}
                                <div className="tabs-container">
                                    <div className="tab">
                                        {/* tab */}
                                        <div id="partnership" className="tab-content first-tab">
                                            <div className="custom-form">
                                                <form name="registerform" onSubmit={handlePartnerSubmit}>
                                                    <label>Are you an Organisation <span>?</span> </label>
                                                    <div className="listsearch-input-item">
                                                        <select data-placeholder="Select your status " name="type" id="partner-org" className="chosen-select no-search-select">
                                                            <option value={"organisation"}>Yes</option>
                                                            <option value={"owner"}>No i'am owner</option>
                                                        </select>
                                                    </div>
                                                    <label>Buissness Type <span>*</span> </label>
                                                    <div className="listsearch-input-item">
                                                        <select data-placeholder="Choose Type(s) of your buissness" name="type" id="partner-type" className="chosen-select no-search-select" multiple>
                                                            <option value={"Land"}>Land sale</option>
                                                            <option value={"House"}>House sale</option>
                                                            <option value={"Service"}>Domestic services</option>
                                                            <option value={"Product"}>product sale</option>
                                                            <option value={"Restaurant"}>Restaurant</option>
                                                            <option value={"Fitness"}>Fitness Center</option>
                                                        </select>
                                                    </div>
                                                    <div className="filter-tags ft-list">
                                                        <input id="check-a2" type="checkbox" name="check" required/>
                                                        <label form="check-a2">I agree to the <a href="#">Privacy Policy</a></label>
                                                    </div>
                                                    <div className="clearfix"/>
                                                    <div className="filter-tags ft-list">
                                                        <input id="check-a" type="checkbox" name="check" required/>
                                                        <label form="check-a">I agree to the <a href="#">Terms and Conditions</a></label>
                                                    </div>
                                                    <div className="clearfix"/>
                                                    <button disabled={loadingPartner} type="submit" className="btn float-btn color2-bg"> Submit <i className="fas fa-caret-right"/></button>
                                                    <div className="clearfix"/>
                                                </form>
                                            </div>
                                        </div>
                                        {/* tab end */}
                                    </div>
                                    {/* tabs end */}
                                </div>
                            </div>
                        )
                        : (
                            <div className="main-register fl-wrap  modal_main">
                                <div className="main-register_title">Welcome to <span><strong>Town</strong>Hub<strong>.</strong></span></div>
                                <div className="close-reg"><i className="fal fa-times"/></div>
                                <ul className="tabs-menu fl-wrap no-list-style">
                                    <li className="current"><a href="#connexion"><i className="fal fa-sign-in-alt"/> Login</a></li>
                                    <li><a href="#registration"><i className="fal fa-user-plus"/> Register</a></li>
                                </ul>
                                {/* tabs */}
                                <div className="tabs-container">
                                    <div className="tab">
                                        {/* tab */}
                                        <div id="connexion" className="tab-content first-tab">
                                            <div className="custom-form">
                                                <form onSubmit={handleLoginSubmit}  name="registerform">
                                                    <label>Email Address <span>*</span> </label>
                                                    <input className="email" name="email" type="email" required />
                                                    <label >Password <span>*</span> </label>
                                                    <input className="password" name="password" type="password" required />
                                                    <button disabled={loadingLogin} type="submit" className="btn float-btn color2-bg"> Log In <i className="fas fa-caret-right"/></button>
                                                    <div className="clearfix"/>
                                                    <div className="filter-tags">
                                                        <input id="check-a3" type="checkbox" name="check"/>
                                                        <label form="check-a3">Remember me</label>
                                                    </div>
                                                </form>
                                                <div className="lost_password">
                                                    <a href="#">Lost Your Password?</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* tab end */}
                                        {/* tab */}
                                        <div className="tab">
                                            <div id="registration" className="tab-content">
                                                <div className="custom-form">
                                                    <form method="post" name="registerform" onSubmit={handleRegisterSubmit} className="main-register-form" id="main-register-form2">
                                                        <label >First Name <span>*</span> </label>
                                                        <input name="first_name" type="text" required />
                                                        <label >Last Name <span>*</span> </label>
                                                        <input name="last_name" type="text" required />
                                                        <label>Email Address <span>*</span></label>
                                                        <input name="email" type="email" required />
                                                        <label>Phone <span>*</span></label>
                                                        <PhoneInput id="phone-register-input" placeholder="Enter phone number" onChange={setPhone} value={phone} required />
                                                        <label >Password <span>*</span></label>
                                                        <input name="password" id="password-register-input" type="password" required />
                                                        <label >Password Confirmation <span>*</span></label>
                                                        <input name="password_confirm" id="confirm-password-register-input" type="password" required />
                                                        <div className="filter-tags ft-list">
                                                            <input id="check-a2" type="checkbox" name="check" required/>
                                                            <label form="check-a2">I agree to the <a href="#">Privacy Policy</a></label>
                                                        </div>
                                                        <div className="clearfix"/>
                                                        <div className="filter-tags ft-list">
                                                            <input id="check-a" type="checkbox" name="check" required/>
                                                            <label form="check-a">I agree to the <a href="#">Terms and Conditions</a></label>
                                                        </div>
                                                        <div className="clearfix"/>
                                                        <button type="submit" disabled={loadingRegister}   className="btn float-btn color2-bg"> Register  <i className="fas fa-caret-right"/></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        {/* tab end */}
                                    </div>
                                    {/* tabs end */}
                                    <div className="log-separator fl-wrap"><span>or</span></div>
                                    <div className="soc-log fl-wrap">
                                        <p>For faster login or register use your social account.</p>
                                        <a href="#" className="facebook-log" > Facebook</a>
                                    </div>
                                    <div className="wave-bg">
                                        <div className='wave -one'/>
                                        <div className='wave -two'/>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        );
};

export default AuthForm;