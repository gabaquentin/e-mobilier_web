import { Component } from 'react';

import logo from '../../Assets/images/logo.png';
import news from '../../Assets/images/all/1.jpg';

class Footer extends Component {

    render() {

        return (
            <footer className="main-footer fl-wrap">
                {/* footer-header */}
                <div className="footer-header fl-wrap grad ient-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div  className="subscribe-header">
                                    <h3>Subscribe For a <span>Newsletter</span></h3>
                                    <p>Whant to be notified about new locations ?  Just sign up.</p>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="subscribe-widget">
                                    <div className="subcribe-form">
                                        <form id="subscribe">
                                            <input className="enteremail fl-wrap" name="email" id="subscribe-email" placeholder="Enter Your Email" spellCheck="false" type="text" />
                                            <button type="submit" id="subscribe-button" className="subscribe-button"><i className="fal fa-envelope"/></button>
                                            <label form="subscribe-email" className="subscribe-message"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer-header end */}
                {/* footer-inner */}
                <div className="footer-inner   fl-wrap">
                    <div className="container">
                        <div className="row">
                            {/* footer-widget */}
                            <div className="col-md-4">
                                <div className="footer-widget fl-wrap">
                                    <div className="footer-logo"><a href="index.html"><img src={ logo } alt="" /></a></div>
                                    <div className="footer-contacts-widget fl-wrap">
                                        <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida.   </p>
                                        <ul  className="footer-contacts fl-wrap no-list-style">
                                            <li><span><i className="fal fa-envelope"/> Mail :</span><a href="#" target="_blank">yourmail@domain.com</a></li>
                                            <li> <span><i className="fal fa-map-marker"/> Adress :</span><a href="#" target="_blank">USA 27TH Brooklyn NY</a></li>
                                            <li><span><i className="fal fa-phone"/> Phone :</span><a href="#">+7(111)123456789</a></li>
                                        </ul>
                                        <div className="footer-social">
                                            <span>Find  us on: </span>
                                            <ul className="no-list-style">
                                                <li><a href="#" target="_blank"><i className="fab fa-facebook-f"/></a></li>
                                                <li><a href="#" target="_blank"><i className="fab fa-twitter"/></a></li>
                                                <li><a href="#" target="_blank"><i className="fab fa-instagram"/></a></li>
                                                <li><a href="#" target="_blank"><i className="fab fa-vk"/></a></li>
                                                <li><a href="#" target="_blank"><i className="fab fa-whatsapp"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* footer-widget end */}
                            {/* footer-widget */}
                            <div className="col-md-4">
                                <div className="footer-widget fl-wrap">
                                    <h3>Our Last News</h3>
                                    <div className="footer-widget-posts fl-wrap">
                                        <ul className="no-list-style">
                                            <li className="clearfix">
                                                <a href="#" className="widget-posts-img"><img src={news} className="respimg" alt="" /></a>
                                                <div className="widget-posts-descr">
                                                    <a href="#" title="">Vivamus dapibus rutrum</a>
                                                    <span className="widget-posts-date"><i className="fal fa-calendar"/> 21 Mar 09.05 </span>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <a href="#" className="widget-posts-img"><img src={news} className="respimg" alt="" /></a>
                                                <div className="widget-posts-descr">
                                                    <a href="#" title=""> In hac habitasse platea</a>
                                                    <span className="widget-posts-date"><i className="fal fa-calendar"/> 7 Mar 18.21 </span>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <a href="#" className="widget-posts-img"><img src={news} className="respimg" alt="" /></a>
                                                <div className="widget-posts-descr">
                                                    <a href="#" title="">Tortor tempor in porta</a>
                                                    <span className="widget-posts-date"><i className="fal fa-calendar"/> 7 Mar 16.42 </span>
                                                </div>
                                            </li>
                                        </ul>
                                        <a href="blog.html" className="footer-link">Read all <i className="fal fa-long-arrow-right"/></a>
                                    </div>
                                </div>
                            </div>
                            {/* footer-widget end */}
                            {/* footer-widget */}
                            <div className="col-md-4">
                                <div className="footer-widget fl-wrap ">
                                    <h3>Our  Twitter</h3>
                                    <div className="twitter-holder fl-wrap scrollbar-inner2" data-simplebar=""
                                         data-simplebar-auto-hide="false">
                                        <div id="footer-twiit"/>
                                    </div>
                                    <a href="#" className="footer-link twitter-link" target="_blank">Follow us <i className="fal fa-long-arrow-right"/></a>
                                </div>
                            </div>
                            {/* footer-widget end */}
                        </div>
                    </div>
                    {/* footer bg */}
                    <div className="footer-bg" data-ran="4"/>
                    <div className="footer-wave">
                        <svg viewBox="0 0 100 25">
                            <path fill="#fff" d="M0 30 V12 Q30 17 55 12 T100 11 V30z" />
                        </svg>
                    </div>
                    {/* footer bg  end */}
                </div>
                {/* footer-inner end */}
                {/* sub-footer */}
                <div className="sub-footer  fl-wrap">
                    <div className="container">
                        <div className="copyright"> &#169; Townhub 2019 .  All rights reserved.</div>
                        <div className="lang-wrap">
                            <div className="show-lang"><span><i className="fal fa-globe-europe"/><strong>En</strong></span><i className="fa fa-caret-down arrlan"/></div>
                            <ul className="lang-tooltip lang-action no-list-style">
                                <li><a href="#" className="current-lan" data-lantext="En">English</a></li>
                                <li><a href="#" data-lantext="Fr">Français</a></li>
                                <li><a href="#" data-lantext="Es">Español</a></li>
                                <li><a href="#" data-lantext="De">Deutsch</a></li>
                            </ul>
                        </div>
                        <div className="subfooter-nav">
                            <ul className="no-list-style">
                                <li><a href="#">Terms of use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* sub-footer end */}
            </footer>
        );
    }
}

export default Footer;