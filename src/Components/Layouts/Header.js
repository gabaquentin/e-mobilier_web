import React, {useContext, useEffect, useState} from 'react';

import { Link, useHistory } from 'react-router-dom';
import logo from '../../Assets/images/logo.png';
import avatar7 from '../../Assets/images/avatar/7.png';
import thumbnail1 from '../../Assets/images/gallery/thumbnail/1.png';

import $ from "jquery";
import {NotificationManager} from "react-notifications";
import { UserContext } from "../../Contexts/User/userContext";

import { getUserByEmail } from '../../Contexts/User/services';

const  Header = () => {

    const [state, dispatch] = useContext(UserContext);
    const [user, setUser] = useState({});
    let history = useHistory();

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
        const headerScripts = () => {
            $(".more-filter-option").on("click", function () {
                $(".hidden-listing-filter").slideToggle(500);
                $(this).find("span").toggleClass("mfilopact");
            });
            var headSearch = $(".header-search"),
                ssbut = $(".show-search-button"),
                wlwrp = $(".header-modal"),
                wllink = $(".show-header-modal"),
                mainheader = $(".main-header");
            function showSearch() {
                headSearch.addClass("vis-head-search").removeClass("vis-search");
                ssbut.find("span").text("Close");
                ssbut.find("i").addClass("vis-head-search-close");
                mainheader.addClass("vis-searchdec");
                hideWishlist();
            }
            function hideSearch() {
                headSearch.removeClass("vis-head-search").addClass("vis-search");
                ssbut.find("span").text("Search");
                ssbut.find("i").removeClass("vis-head-search-close");
                mainheader.removeClass("vis-searchdec");
            }
            ssbut.on("click", function () {
                if ($(".header-search").hasClass("vis-search")) showSearch();
                else hideSearch();
            });
            $(".header-search_close").on("click", function () {
                hideSearch();
            });
            function showWishlist() {
                wlwrp.fadeIn(1).addClass("vis-wishlist").removeClass("novis_wishlist")
                hideSearch();
                wllink.addClass("scwllink");
            }
            function hideWishlist() {
                wlwrp.fadeOut(1).removeClass("vis-wishlist").addClass("novis_wishlist");
                wllink.removeClass("scwllink");
            }
            wllink.on("click", function () {
                if (wlwrp.hasClass("novis_wishlist")) showWishlist();
                else hideWishlist();
            });
            $(".close-header-modal").on("click", function () {
                hideWishlist();
            });
            var wlitle = $(".novis_wishlist .widget-posts li").length;
            $(".header-modal-top h4 strong , .cart-btn span.cart-counter").text(wlitle);
            $(".act-hiddenpanel").on("click", function () {
                $(this).toggleClass("active-hidden-opt-btn").find("span").text($(this).find("span").text() === 'Close options' ? 'More options' : 'Close options');
                $(".hidden-listing-filter").slideToggle(400);
            });

        };
        headerScripts();
    }, [state]);

    useEffect(() => {
        const fetchUser = () => {
        if (state.user.email) {
            getUserByEmail(state.user.email).then(
                function (user) {
                    if (user.empty) {
                        setError({ error: true, message: 'please refresh page', title: 'no user error' });
                    }

                    user.forEach(doc => {
                        setUser(doc.data());
                    });
                },
                function (error) { fetchUser(); }
            );
            }
        };
        fetchUser();
        
    }, [state]);

    return (
        <header className={state.active ? 'main-header dsh-header': 'main-header'}>
            {/*  logo */}
            <Link to={"/"} className="logo-holder"><img src={logo} alt="" /></Link>
            {/*  logo end */}
            {/*  header-search_btn */}         
            <div className="header-search_btn show-search-button"><i className="fal fa-search"/><span>Search</span></div>
            {/*  header-search_btn end */}
            {/*  header opt  */}
            {state.active ? <UserHeader user={user} state={state} dispatch={dispatch} /> : <GuestHeader />}
            {/*  header opt end */}                                
            {/*  nav-button-wrap */} 
            <div className="nav-button-wrap color-bg">
                <div className="nav-button">
                    <span/><span/><span/>
                </div>
            </div>
            {/*  nav-button-wrap end */}
            {/*   navigation  */} 
            <div className="nav-holder main-menu">
                <nav>
                    <ul className="no-list-style">
                        <li>
                            <a href="#" className="act-link">Home <i className="fa fa-caret-down"/></a>
                            {/* second level  */}   
                            <ul>
                                <li><a href="index.html">Parallax Image</a></li>
                                <li><a href="index2.html">Slider</a></li>
                                <li><a href="index3.html">Slideshow</a></li>
                                <li><a href="index4.html">Video</a></li>
                                <li><a href="index5.html">Map</a></li>
                            </ul>
                            {/* second level end */}
                        </li>
                        <li>
                            <Link to={"/listing"}>Listings</Link>
                        </li>
                        <li>
                            <a href="blog.html">News</a>
                        </li>
                        <li>
                            <a href="#">Pages <i className="fa fa-caret-down"/></a>
                            {/* second level  */}   
                            <ul>
                                <li>
                                    <a href="#">Shop<i className="fa fa-caret-down"/></a>
                                    {/* third  level   */}
                                    <ul>
                                        <li><a href="shop.html">Products</a></li>
                                        <li><a href="product-single.html">Product single</a></li>
                                        <li><a href="cart.html">Cart</a></li>
                                    </ul>
                                    {/* third  level end */}
                                </li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="contacts.html">Contacts</a></li>
                                <li><a href="author-single.html">User single</a></li>
                                <li><a href="help.html">How it Works</a></li>
                                <li><a href="booking.html">Booking</a></li>
                                <li><a href="pricing-tables.html">Pricing</a></li>
                                <li><a href="dashboard.html">User Dasboard</a></li>
                                <li><a href="blog-single.html">Blog Single</a></li>
                                <li><a href="dashboard-add-listing.html">Add Listing</a></li>
                                <li><a href="invoice.html">Invoice</a></li>
                                <li><a href="404.html">404</a></li>
                            </ul>
                            {/* second level end */}                                
                        </li>
                    </ul>
                </nav>
            </div>
            {/*  navigation  end  */}
            {/*  header-search_container  */}                     
            <div className="header-search_container header-search vis-search">
                <div className="container small-container">
                    <div className="header-search-input-wrap fl-wrap">
                        {/*  header-search-input  */} 
                        <div className="header-search-input">
                            <label><i className="fal fa-keyboard"/></label>
                            <input type="text" placeholder="What are you looking for ?"   />  
                        </div>
                        {/*  header-search-input end  */}  
                        {/*  header-search-input  */} 
                        <div className="header-search-input location autocomplete-container">
                            <label><i className="fal fa-map-marker"/></label>
                            <input type="text" placeholder="Location..." className="autocomplete-input" id="autocompleteid2" />
                            <a href="#"><i className="fal fa-dot-circle"/></a>
                        </div>
                        {/*  header-search-input end  */}                                        
                        {/*  header-search-input  */} 
                        <div className="header-search-input header-search_selectinpt ">
                            <select data-placeholder="Category" className="chosen-select no-radius" >
                                <option>All Categories</option>
                                <option>All Categories</option>
                                <option>Shops</option>
                                <option>Hotels</option>
                                <option>Restaurants</option>
                                <option>Fitness</option>
                                <option>Events</option>
                            </select>
                        </div>
                        {/*  header-search-input end  */} 
                        <button className="header-search-button green-bg" onClick={() => { history.push("/listing"); }}><i className="far fa-search"/> Search </button>
                    </div>
                    <div className="header-search_close color-bg"><i className="fal fa-long-arrow-up"/></div>
                </div>
            </div>
            {/*  header-search_container  end  */} 
            {/*  wishlist-wrap */} 
            {state.active ? <UserWhishlist state={state} dispatch={dispatch} /> : <GuestWhishlist />}
            {/* wishlist-wrap end  */} 
        </header>
    );
}

export default Header;

function UserHeader(props) {

    const [userUl, setUserUl] = useState(false);

    return (
        <>
            {props.user.Role === "CUSTOMER" ? <a onClick={() => { $('.modal , .reg-overlay').fadeIn(200); $(".modal_main").addClass("vis_mr"); $("html, body").addClass("hid-body"); }} style={{ cursor:"pointer" }} className="add-list color-bg">Become Partner <span><i className="fal fa-hands-helping"/></span></a> : ""}
            {props.user.Role === "PARTNER" ? <Link to={"/user#add_listing"} className="add-list color-bg">Add Listing <span><i className="fal fa-layer-plus"/></span></Link> : ""}

            <div className="cart-btn show-header-modal" data-microtip-position="bottom" role="tooltip" aria-label="Your Wishlist"><i className="fal fa-heart"/><span className="cart-counter green-bg"/> </div>
            <div className="header-user-menu">
                <div className={userUl ? "header-user-name hu-menu-visdec" : "header-user-name"} onClick={() => { setUserUl(!userUl); }}>
                    <span><img src={props.user.photoUrl ? props.user.photoUrl : avatar7} alt="" /></span>
                            <p className="display-name">Hello , {props.user.displayName ? props.user.displayName : ''}</p>
                </div>
                <ul className={userUl ? "hu-menu-vis" : ""}>
                    <li><Link to={'/user#profile'}> Edit profile</Link></li>
                    <li><Link to={"/user#add_listing"}> Add Listing</Link></li>
                    <li><Link to={"/user#booking"}>  Bookings  </Link></li>
                    <li><Link to={"/user#review"}> Reviews </Link></li>
                    <li><Link to="/" onClick={() => { props.dispatch({ type: "disconnected" }); } }>Log Out</Link></li>
                </ul>
            </div>
            {/*  lang-wrap */}
            <div className="lang-wrap">
                <div className="show-lang"><span><i className="fal fa-globe-europe"/><strong>En</strong></span><i className="fa fa-caret-down arrlan"/></div>
                <ul className="lang-tooltip lang-action no-list-style">
                    <li><a href="#" className="current-lan" data-lantext="En">English</a></li>
                    <li><a href="#" data-lantext="Fr">Français</a></li>
                </ul>
            </div>
            {/*  lang-wrap end */}  
        </>
        );
}

function UserWhishlist(props) {

    return (
        <div className="header-modal novis_wishlist">
            {/*  header-modal-container */}
            <div className="header-modal-container scrollbar-inner fl-wrap" data-simplebar="">
                {/* widget-posts */}
                <div className="widget-posts  fl-wrap">
                    <ul className="no-list-style">
                        <li>
                            <div className="widget-posts-img"><a href="listing-single.html"><img src={thumbnail1} alt="" /></a>
                            </div>
                            <div className="widget-posts-descr">
                                <h4><a href="listing-single.html">Iconic Cafe</a></h4>
                                <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"/> 40 Journal Square Plaza, NJ, USA</a></div>
                                <div className="widget-posts-descr-link"><a href="listing.html" >Restaurants </a>   <a href="listing.html">Cafe</a></div>
                                <div className="widget-posts-descr-score">4.1</div>
                                <div className="clear-wishlist"><i className="fal fa-times-circle"/></div>
                            </div>
                        </li>
                        <li>
                            <div className="widget-posts-img"><a href="listing-single.html"><img src={thumbnail1} alt="" /></a>
                            </div>
                            <div className="widget-posts-descr">
                                <h4><a href="listing-single.html">MontePlaza Hotel</a></h4>
                                <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"/> 70 Bright St New York, USA </a></div>
                                <div className="widget-posts-descr-link"><a href="listing.html" >Hotels </a>  </div>
                                <div className="widget-posts-descr-score">5.0</div>
                                <div className="clear-wishlist"><i className="fal fa-times-circle"/></div>
                            </div>
                        </li>
                        <li>
                            <div className="widget-posts-img"><a href="listing-single.html"><img src={thumbnail1} alt="" /></a>
                            </div>
                            <div className="widget-posts-descr">
                                <h4><a href="listing-single.html">Rocko Band in Marquee Club</a></h4>
                                <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"/>75 Prince St, NY, USA</a></div>
                                <div className="widget-posts-descr-link"><a href="listing.html" >Events</a> </div>
                                <div className="widget-posts-descr-score">4.2</div>
                                <div className="clear-wishlist"><i className="fal fa-times-circle"/></div>
                            </div>
                        </li>
                        <li>
                            <div className="widget-posts-img"><a href="listing-single.html"><img src={thumbnail1} alt="" /></a>
                            </div>
                            <div className="widget-posts-descr">
                                <h4><a href="listing-single.html">Premium Fitness Gym</a></h4>
                                <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"/> W 85th St, New York, USA</a></div>
                                <div className="widget-posts-descr-link"><a href="listing.html" >Fitness</a> <a href="listing.html" >Gym</a> </div>
                                <div className="widget-posts-descr-score">5.0</div>
                                <div className="clear-wishlist"><i className="fal fa-times-circle"/></div>
                            </div>
                        </li>
                    </ul>
                </div>
                {/*  widget-posts end */}
            </div>
            {/*  header-modal-container end */}
            <div className="header-modal-top fl-wrap">
                <h4>Your Wishlist : <span><strong/> Locations</span></h4>
                <div className="close-header-modal"><i className="far fa-times"/></div>
            </div>
        </div>
    );
}

function GuestHeader(props) {
    return (
        <>
            <a href="#" className="add-list color-bg">Become Partner <span><i className="fal fa-hands-helping"/></span></a>
            <div className="cart-btn   show-header-modal" data-microtip-position="bottom" role="tooltip" aria-label="Your Wishlist"><i className="fal fa-heart"/><span className="cart-counter green-bg"/> </div>
            <div className="show-reg-form modal-open avatar-img" onClick={() => { $('.modal , .reg-overlay').fadeIn(200); $(".modal_main").addClass("vis_mr"); $("html, body").addClass("hid-body"); }} data-srcav={avatar7}><i className="fal fa-user"/>Sign In</div>
            {/*  lang-wrap */}
            <div className="lang-wrap">
                <div className="show-lang"><span><i className="fal fa-globe-europe"/><strong>En</strong></span><i className="fa fa-caret-down arrlan"/></div>
                <ul className="lang-tooltip lang-action no-list-style">
                    <li><a href="#" className="current-lan" data-lantext="En">English</a></li>
                    <li><a href="#" data-lantext="Fr">Français</a></li>
                </ul>
            </div>
            {/*  lang-wrap end */}  
        </>
    );
}

function GuestWhishlist(props) {

    return (
        <div className="header-modal novis_wishlist">
            {/*  header-modal-container */}
            <div className="header-modal-container scrollbar-inner fl-wrap" data-simplebar="">
                {/* widget-posts */}
                <div className="widget-posts  fl-wrap">
                    <ul className="no-list-style">
                        <li>
                            <div className="widget-posts-img"><a href="listing-single.html"><img src={thumbnail1} alt="" /></a>
                            </div>
                            <div className="widget-posts-descr">
                                <h4><a href="listing-single.html">Rocko Band in Marquee Club</a></h4>
                                <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"/>75 Prince St, NY, USA</a></div>
                                <div className="widget-posts-descr-link"><a href="listing.html" >Events</a> </div>
                                <div className="widget-posts-descr-score">4.2</div>
                                <div className="clear-wishlist"><i className="fal fa-times-circle"/></div>
                            </div>
                        </li>
                        <li>
                            <div className="widget-posts-img"><a href="listing-single.html"><img src={thumbnail1} alt="" /></a>
                            </div>
                            <div className="widget-posts-descr">
                                <h4><a href="listing-single.html">Premium Fitness Gym</a></h4>
                                <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"/> W 85th St, New York, USA</a></div>
                                <div className="widget-posts-descr-link"><a href="listing.html" >Fitness</a> <a href="listing.html" >Gym</a> </div>
                                <div className="widget-posts-descr-score">5.0</div>
                                <div className="clear-wishlist"><i className="fal fa-times-circle"/></div>
                            </div>
                        </li>
                    </ul>
                </div>
                {/*  widget-posts end */}
            </div>
            {/*  header-modal-container end */}
            <div className="header-modal-top fl-wrap">
                <h4>Your Wishlist : <span><strong/> Locations</span></h4>
                <div className="close-header-modal"><i className="far fa-times"/></div>
            </div>
        </div>
    );
}