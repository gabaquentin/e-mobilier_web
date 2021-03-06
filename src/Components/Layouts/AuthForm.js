import React, { Component } from 'react';

class AuthForm extends Component {

    render() {

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
                                        <form method="post"  name="registerform">
                                            <label>Username or Email Address <span>*</span> </label>
                                            <input className="email" type="text"   onClick="this.select()"  />
                                            <label >Password <span>*</span> </label>
                                            <input className="password" type="password"   onClick="this.select()"  />
                                            <button type="submit" className="btn float-btn color2-bg"> Log In <i class="fas fa-caret-right"></i></button>
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
                                            <form method="post" name="registerform" className="main-register-form" id="main-register-form2">
                                                <label >Full Name <span>*</span> </label>
                                                <input name="name" type="text"   onClick="this.select()" />
                                                <label>Email Address <span>*</span></label>
                                                <input name="email" type="text"  onClick="this.select()" />
                                                <label >Password <span>*</span></label>
                                                <input name="password" type="password"   onClick="this.select()"  />
                                                <div className="filter-tags ft-list">
                                                    <input id="check-a2" type="checkbox" name="check"/>
                                                    <label for="check-a2">I agree to the <a href="#">Privacy Policy</a></label>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="filter-tags ft-list">
                                                    <input id="check-a" type="checkbox" name="check" />
                                                    <label for="check-a">I agree to the <a href="#">Terms and Conditions</a></label>
                                                </div>
                                                <div className="clearfix"></div>
                                                <button type="submit"     className="btn float-btn color2-bg"> Register  <i class="fas fa-caret-right"></i></button>
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
}

export default AuthForm;