import React, { useState } from 'react';
import { useAuth } from "../../Contexts/AuthContext";
import app from '../../firebase';

import $ from "jquery";
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';

import PhoneInput from 'react-phone-number-input';

import { isValidPhoneNumber } from 'react-phone-number-input';

//import avatar from '../../Assets/images/avatar.png';

const AuthForm = (props) => {

    const { login, signup } = useAuth();
    const [loadingLogin, setLoadingLogin] = useState(false);
    const [loadingRegister, setLoadingRegister] = useState(false);

    const [phone, setPhone] = useState();

    async function handleLoginSubmit(e) {
        e.preventDefault()
        const { email, password } = e.target.elements;
        
        try {
            setLoadingLogin(true);
            await login(email.value, password.value);
            props.dispatch({ type: "connected" });
            $('.modal , .reg-overlay').fadeOut(200);
            $("html, body").removeClass("hid-body");
            $(".modal_main").removeClass("vis_mr");
            

        } catch (error) {
            if (error.code === "auth/user-not-found") {
                NotificationManager.error('User not found');
            }
            else if (error.code === "auth/wrong-password") {
                NotificationManager.error('Wrong password');
            }
            else if (error.code === "auth/invalid-email") {
                NotificationManager.error('Invalid email');
            }
            else {
                NotificationManager.error('Failed to log in');
            }

            console.log(error)

        }
        setLoadingLogin(false)
    }

    async function handleRegisterSubmit(e) {
        e.preventDefault()

        const { first_name, last_name, email, password, password_confirm } = e.target.elements;

        if (password.value !== password_confirm.value) {
            document.getElementById("password-register-input").style.borderColor = "#eb4c34";
            document.getElementById("confirm-password-register-input").style.borderColor = "#eb4c34";
            return NotificationManager.error('Password do not match');
        } else {
            document.getElementById("password-register-input").style.borderColor = "#e5e7f2";
            document.getElementById("confirm-password-register-input").style.borderColor = "#e5e7f2";
        }
        try {
            if (isValidPhoneNumber(phone)) {
                document.getElementById("phone-register-input").style.borderColor = "#e5e7f2";
                setLoadingRegister(true)
                await signup(email.value, password.value).then((userCredential) => {

                    userCredential.user.sendEmailVerification()
                    userCredential.user.updateProfile({
                        displayName: last_name.value,
                        phoneNumber: phone
                    })

                    const db = app.firestore()
                    db.collection('Users').doc(userCredential.user.uid).set({
                        First_Name: first_name.value,
                        displayName: last_name.value,
                        Phone: phone,
                        photoUrl: '',
                        Address: '',
                        About: '',
                        Role: 'CUSTOMER',
                        Email: userCredential.user.email
                    })
                })
                props.dispatch({ type: "connected" });
                $('.modal , .reg-overlay').fadeOut(200);
                $("html, body").removeClass("hid-body");
                $(".modal_main").removeClass("vis_mr");

            }
            else {
                document.getElementById("phone-register-input").style.borderColor = "#eb4c34";
                NotificationManager.error('Phone number is not valid');
            }
            

        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                NotificationManager.error('Email already in use');
            }
            else if (error.code === "auth/weak-password") {
                NotificationManager.error('Password min-lenght : 6');
            }
            else {
                NotificationManager.error('Failed to register');
            }
            console.log(error)
        }
        setLoadingRegister(false)
    }
    

        return (
            <div className="main-register-wrap modal">
                <div className="reg-overlay"></div>
                <div className="main-register-holder tabs-act">
                    <div className="main-register fl-wrap  modal_main">
                        <div className="main-register_title">Welcome to <span><strong>Town</strong>Hub<strong>.</strong></span></div>
                        <div className="close-reg"><i class="fal fa-times"></i></div>
                        <ul className="tabs-menu fl-wrap no-list-style">
                            <li className="current"><a href="#tab-1"><i class="fal fa-sign-in-alt"></i> Login</a></li>
                            <li><a href="#tab-2"><i class="fal fa-user-plus"></i> Register</a></li>
                        </ul>
                        {/* tabs */}
                        <div className="tabs-container">
                            <div className="tab">
                                {/* tab */}
                                <div id="tab-1" className="tab-content first-tab">
                                    <div className="custom-form">
                                        <form onSubmit={handleLoginSubmit}  name="registerform">
                                            <label>Email Address <span>*</span> </label>
                                            <input className="email" name="email" type="email" required />
                                            <label >Password <span>*</span> </label>
                                            <input className="password" name="password" type="password" required />
                                            <button disabled={loadingLogin} type="submit" className="btn float-btn color2-bg"> Log In <i class="fas fa-caret-right"></i></button>
                                            <div className="clearfix"></div>
                                            <div className="filter-tags">
                                                <input id="check-a3" type="checkbox" name="check"/>
                                                <label for="check-a3">Remember me</label>
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
                                    <div id="tab-2" className="tab-content">
                                        <div class="custom-form">
                                            <form method="post" name="registerform" onSubmit={handleRegisterSubmit} className="main-register-form" id="main-register-form2">
                                                <label >First Name <span>*</span> </label>
                                                <input name="first_name" type="text" required />
                                                <label >Last Name <span>*</span> </label>
                                                <input name="last_name" type="text" required />
                                                <label>Email Address <span>*</span></label>
                                                <input name="email" type="email" onClick="this.select()" />
                                                <label>Phone <span>*</span></label>
                                                <PhoneInput class="nice-select chosen-select" id="phone-register-input" placeholder="Enter phone number" onChange={setPhone} value={phone} required />
                                                <label >Password <span>*</span></label>
                                                <input name="password" id="password-register-input" type="password" onClick="this.select()" />
                                                <label >Password Confirmation <span>*</span></label>
                                                <input name="password_confirm" id="confirm-password-register-input" type="password" onClick="this.select()" />
                                                <div className="filter-tags ft-list">
                                                    <input id="check-a2" type="checkbox" name="check" required/>
                                                    <label for="check-a2">I agree to the <a href="#">Privacy Policy</a></label>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="filter-tags ft-list">
                                                    <input id="check-a" type="checkbox" name="check" required/>
                                                    <label for="check-a">I agree to the <a href="#">Terms and Conditions</a></label>
                                                </div>
                                                <div className="clearfix"></div>
                                                <button type="submit" disabled={loadingRegister}   className="btn float-btn color2-bg"> Register  <i class="fas fa-caret-right"></i></button>
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
                                <a href="#" className="facebook-log"> Facebook</a>
                            </div>
                            <div className="wave-bg">
                                <div className='wave -one'></div>
                                <div className='wave -two'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default AuthForm;