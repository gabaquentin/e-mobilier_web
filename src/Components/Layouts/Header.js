import { useState } from 'react';

import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo.png';
import avatar7 from '../../Assets/images/avatar/7.png';
import thumbnail1 from '../../Assets/images/gallery/thumbnail/1.png';

import $ from "jquery";

const  Header = (props) => {

    return (
        <header className={props.state.active ? 'main-header dsh-header': 'main-header'}>
            {/*  logo */}
            <Link to={"/"} className="logo-holder"><img src={logo} alt="" /></Link>
            {/*  logo end */}
            {/*  header-search_btn */}         
            <div className="header-search_btn show-search-button"><i className="fal fa-search"></i><span>Search</span></div>
            {/*  header-search_btn end */}
            {/*  header opt  */}
            {props.state.active ? <UserHeader user={props.user} state={props.state} dispatch={props.dispatch} /> : <GuestHeader />}
            {/*  header opt end */}                                
            {/*  nav-button-wrap */} 
            <div className="nav-button-wrap color-bg">
                <div className="nav-button">
                    <span></span><span></span><span></span>
                </div>
            </div>
            {/*  nav-button-wrap end */}
            {/*   navigation  */} 
            <div className="nav-holder main-menu">
                <nav>
                    <ul className="no-list-style">
                        <li>
                            <a href="#" className="act-link">Home <i className="fa fa-caret-down"></i></a>
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
                            <a href="#">Listings <i className="fa fa-caret-down"></i></a>
                            {/* second level  */}
                            <ul>
                                <li><a href="listing.html">Column map</a></li>
                                <li><a href="listing2.html">Column map 2</a></li>
                                <li><a href="listing3.html">Fullwidth Map</a></li>
                                <li><a href="listing4.html">Fullwidth Map 2</a></li>
                                <li><a href="listing5.html">Without Map</a></li>
                                <li><a href="listing6.html">Without Map 2</a></li>
                                <li>
                                    <a href="#">Single <i className="fa fa-caret-down"></i></a>
                                    {/* third  level   */}
                                    <ul>
                                        <li><a href="listing-single.html">Style 1</a></li>
                                        <li><a href="listing-single2.html">Style 2</a></li>
                                        <li><a href="listing-single3.html">Style 3</a></li>
                                        <li><a href="listing-single4.html">Style 4</a></li>
                                    </ul>
                                    {/* third  level end */}
                                </li>
                            </ul>
                            {/* second level end */}
                        </li>
                        <li>
                            <a href="blog.html">News</a>
                        </li>
                        <li>
                            <a href="#">Pages <i className="fa fa-caret-down"></i></a>
                            {/* second level  */}   
                            <ul>
                                <li>
                                    <a href="#">Shop<i className="fa fa-caret-down"></i></a>
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
                            <label><i className="fal fa-keyboard"></i></label>
                            <input type="text" placeholder="What are you looking for ?"   />  
                        </div>
                        {/*  header-search-input end  */}  
                        {/*  header-search-input  */} 
                        <div className="header-search-input location autocomplete-container">
                            <label><i className="fal fa-map-marker"></i></label>
                            <input type="text" placeholder="Location..." className="autocomplete-input" id="autocompleteid2" />
                            <a href="#"><i className="fal fa-dot-circle"></i></a>
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
                        <button className="header-search-button green-bg" onclick="window.location.href='listing.html'"><i className="far fa-search"></i> Search </button>
                    </div>
                    <div className="header-search_close color-bg"><i className="fal fa-long-arrow-up"></i></div>
                </div>
            </div>
            {/*  header-search_container  end  */} 
            {/*  wishlist-wrap */} 
            {props.state.active ? <UserWhishlist state={props.state} dispatch={props.dispatch} /> : <GuestWhishlist />}
            {/* wishlist-wrap end  */} 
        </header>
    );
}

export default Header;

function UserHeader(props) {

    const [userUl, setUserUl] = useState(false)

    return (
        <>
            <a href="dashboard-add-listing.html" className="add-list color-bg">Add Listing <span><i className="fal fa-layer-plus"></i></span></a>
            <div className="cart-btn show-header-modal" data-microtip-position="bottom" role="tooltip" aria-label="Your Wishlist"><i className="fal fa-heart"></i><span className="cart-counter green-bg"></span> </div>
            <div className="header-user-menu">
                <div className={userUl ? "header-user-name hu-menu-visdec" : "header-user-name"} onClick={() => { setUserUl(!userUl); }}>
                    <span><img src={props.user.photoUrl ? props.user.photoUrl : avatar7} alt="" /></span>
                            <p className="display-name">Hello , {props.user.displayName ? props.user.displayName : ''}</p>
                </div>
                <ul className={userUl ? "hu-menu-vis" : ""}>
                    <li><Link to={'/user'}> Edit profile</Link></li>
                    <li><a href="dashboard-add-listing.html"> Add Listing</a></li>
                    <li><a href="dashboard-bookings.html">  Bookings  </a></li>
                    <li><a href="dashboard-review.html"> Reviews </a></li>
                    <li><Link to="/" onClick={() => { props.dispatch({ type: "disconnected" }); } }>Log Out</Link></li>
                </ul>
            </div>
            {/*  lang-wrap */}
            <div className="lang-wrap">
                <div className="show-lang"><span><i className="fal fa-globe-europe"></i><strong>En</strong></span><i className="fa fa-caret-down arrlan"></i></div>
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
            <div className="header-modal-container scrollbar-inner fl-wrap" data-simplebar>
                {/* widget-posts */}
                <div className="widget-posts  fl-wrap">
                    <ul className="no-list-style">
                        <li>
                            <div className="widget-posts-img"><a href="listing-single.html"><img src={thumbnail1} alt="" /></a>
                            </div>
                            <div className="widget-posts-descr">
                                <h4><a href="listing-single.html">Iconic Cafe</a></h4>
                                <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"></i> 40 Journal Square Plaza, NJ, USA</a></div>
                                <div className="widget-posts-descr-link"><a href="listing.html" >Restaurants </a>   <a href="listing.html">Cafe</a></div>
                                <div className="widget-posts-descr-score">4.1</div>
                                <div className="clear-wishlist"><i className="fal fa-times-circle"></i></div>
                            </div>
                        </li>
                        <li>
                            <div className="widget-posts-img"><a href="listing-single.html"><img src={thumbnail1} alt="" /></a>
                            </div>
                            <div className="widget-posts-descr">
                                <h4><a href="listing-single.html">MontePlaza Hotel</a></h4>
                                <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"></i> 70 Bright St New York, USA </a></div>
                                <div className="widget-posts-descr-link"><a href="listing.html" >Hotels </a>  </div>
                                <div className="widget-posts-descr-score">5.0</div>
                                <div className="clear-wishlist"><i className="fal fa-times-circle"></i></div>
                            </div>
                        </li>
                        <li>
                            <div className="widget-posts-img"><a href="listing-single.html"><img src={thumbnail1} alt="" /></a>
                            </div>
                            <div className="widget-posts-descr">
                                <h4><a href="listing-single.html">Rocko Band in Marquee Club</a></h4>
                                <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"></i>75 Prince St, NY, USA</a></div>
                                <div className="widget-posts-descr-link"><a href="listing.html" >Events</a> </div>
                                <div className="widget-posts-descr-score">4.2</div>
                                <div className="clear-wishlist"><i className="fal fa-times-circle"></i></div>
                            </div>
                        </li>
                        <li>
                            <div className="widget-posts-img"><a href="listing-single.html"><img src={thumbnail1} alt="" /></a>
                            </div>
                            <div className="widget-posts-descr">
                                <h4><a href="listing-single.html">Premium Fitness Gym</a></h4>
                                <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"></i> W 85th St, New York, USA</a></div>
                                <div className="widget-posts-descr-link"><a href="listing.html" >Fitness</a> <a href="listing.html" >Gym</a> </div>
                                <div className="widget-posts-descr-score">5.0</div>
                                <div className="clear-wishlist"><i className="fal fa-times-circle"></i></div>
                            </div>
                        </li>
                    </ul>
                </div>
                {/*  widget-posts end */}
            </div>
            {/*  header-modal-container end */}
            <div className="header-modal-top fl-wrap">
                <h4>Your Wishlist : <span><strong></strong> Locations</span></h4>
                <div className="close-header-modal"><i className="far fa-times"></i></div>
            </div>
        </div>
    );
}

function GuestHeader(props) {
    return (
        <>
            <a href="#" className="add-list color-bg">Become Partner <span><i className="fal fa-hands-helping"></i></span></a>
            <div className="cart-btn   show-header-modal" data-microtip-position="bottom" role="tooltip" aria-label="Your Wishlist"><i className="fal fa-heart"></i><span className="cart-counter green-bg"></span> </div>
            <div className="show-reg-form modal-open avatar-img" onClick={() => { $('.modal , .reg-overlay').fadeIn(200); $(".modal_main").addClass("vis_mr"); $("html, body").addClass("hid-body"); }} data-srcav={avatar7}><i className="fal fa-user"></i>Sign In</div>
            {/*  lang-wrap */}
            <div className="lang-wrap">
                <div className="show-lang"><span><i className="fal fa-globe-europe"></i><strong>En</strong></span><i className="fa fa-caret-down arrlan"></i></div>
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
            <div className="header-modal-container scrollbar-inner fl-wrap" data-simplebar>
                {/* widget-posts */}
                <div className="widget-posts  fl-wrap">
                    <ul className="no-list-style">
                        <li>
                            <div className="widget-posts-img"><a href="listing-single.html"><img src={thumbnail1} alt="" /></a>
                            </div>
                            <div className="widget-posts-descr">
                                <h4><a href="listing-single.html">Rocko Band in Marquee Club</a></h4>
                                <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"></i>75 Prince St, NY, USA</a></div>
                                <div className="widget-posts-descr-link"><a href="listing.html" >Events</a> </div>
                                <div className="widget-posts-descr-score">4.2</div>
                                <div className="clear-wishlist"><i className="fal fa-times-circle"></i></div>
                            </div>
                        </li>
                        <li>
                            <div className="widget-posts-img"><a href="listing-single.html"><img src={thumbnail1} alt="" /></a>
                            </div>
                            <div className="widget-posts-descr">
                                <h4><a href="listing-single.html">Premium Fitness Gym</a></h4>
                                <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"></i> W 85th St, New York, USA</a></div>
                                <div className="widget-posts-descr-link"><a href="listing.html" >Fitness</a> <a href="listing.html" >Gym</a> </div>
                                <div className="widget-posts-descr-score">5.0</div>
                                <div className="clear-wishlist"><i className="fal fa-times-circle"></i></div>
                            </div>
                        </li>
                    </ul>
                </div>
                {/*  widget-posts end */}
            </div>
            {/*  header-modal-container end */}
            <div className="header-modal-top fl-wrap">
                <h4>Your Wishlist : <span><strong></strong> Locations</span></h4>
                <div className="close-header-modal"><i className="far fa-times"></i></div>
            </div>
        </div>
    );
}