import React, { Component } from 'react';

import avatar1 from '../../../Assets/images/avatar/1.jpg';
import all1 from '../../../Assets/images/all/1.jpg';

import $ from "jquery";

const Sec4 = (props) => {

    const gallery = {
        
            'Alisa': [
                { 'src': "https://firebasestorage.googleapis.com/v0/b/e-mobilier-web.appspot.com/o/Users%2F1.jpg?alt=media&token=178e846f-9db8-4b40-81ce-344baec4e88a" },
                { 'src': "https://firebasestorage.googleapis.com/v0/b/e-mobilier-web.appspot.com/o/Users%2F1.jpg?alt=media&token=178e846f-9db8-4b40-81ce-344baec4e88a" },
                { 'src': "https://firebasestorage.googleapis.com/v0/b/e-mobilier-web.appspot.com/o/Users%2F1.jpg?alt=media&token=178e846f-9db8-4b40-81ce-344baec4e88a" }
            ],
            'Mark': [
                { 'src': "https://firebasestorage.googleapis.com/v0/b/e-mobilier-web.appspot.com/o/Users%2F1.jpg?alt=media&token=178e846f-9db8-4b40-81ce-344baec4e88a" },
                { 'src': "https://firebasestorage.googleapis.com/v0/b/e-mobilier-web.appspot.com/o/Users%2F1.jpg?alt=media&token=178e846f-9db8-4b40-81ce-344baec4e88a"}
            ],
            'Lisa': [
                { 'src': "https://firebasestorage.googleapis.com/v0/b/e-mobilier-web.appspot.com/o/Users%2F1.jpg?alt=media&token=178e846f-9db8-4b40-81ce-344baec4e88a" },
                { 'src': "https://firebasestorage.googleapis.com/v0/b/e-mobilier-web.appspot.com/o/Users%2F1.jpg?alt=media&token=178e846f-9db8-4b40-81ce-344baec4e88a" }
            ],
            'Kliff': [
                { 'src': "https://firebasestorage.googleapis.com/v0/b/e-mobilier-web.appspot.com/o/Users%2F1.jpg?alt=media&token=178e846f-9db8-4b40-81ce-344baec4e88a" },
                { 'src': "https://firebasestorage.googleapis.com/v0/b/e-mobilier-web.appspot.com/o/Users%2F1.jpg?alt=media&token=178e846f-9db8-4b40-81ce-344baec4e88a" }
            ],
            'Nasty': [
                { 'src': "https://firebasestorage.googleapis.com/v0/b/e-mobilier-web.appspot.com/o/Users%2F1.jpg?alt=media&token=178e846f-9db8-4b40-81ce-344baec4e88a" },
                { 'src': "https://firebasestorage.googleapis.com/v0/b/e-mobilier-web.appspot.com/o/Users%2F1.jpg?alt=media&token=178e846f-9db8-4b40-81ce-344baec4e88a" }
            ],
        
    }

    let Alisa = "[";
    for (let i = 0; i < gallery.Alisa.length; i++) {
        Alisa += "{'src': '" + gallery.Alisa[i].src + "'},";
    }
    Alisa += "]";

    let Mark = "[";
    for (let i = 0; i < gallery.Mark.length; i++) {
        Mark += "{'src': '" + gallery.Mark[i].src + "'},";
    }
    Mark += "]";

    let Lisa = "[";
    for (let i = 0; i < gallery.Lisa.length; i++) {
        Lisa += "{'src': '" + gallery.Lisa[i].src + "'},";
    }
    Lisa += "]";

    let Kliff = "[";
    for (let i = 0; i < gallery.Kliff.length; i++) {
        Kliff += "{'src': '" + gallery.Kliff[i].src + "'},";
    }
    Kliff += "]";

    let Nasty = "[";
    for (let i = 0; i < gallery.Nasty.length; i++) {
        Nasty += "{'src': '" + gallery.Nasty[i].src + "'},";
    }
    Nasty += "]";

    return (
        <section>
            <div className="container big-container">
                <div className="section-title">
                    <h2><span>Most Popular Palces</span></h2>
                    <div className="section-subtitle">Best Listings</div>
                    <span className="section-separator"></span>
                    <p>Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus tellus ut, convallis eros sollicitudin turpis.</p>
                </div>
                <div className="listing-filters gallery-filters fl-wrap">
                    <a href="#" className="gallery-filter  gallery-filter-active" data-filter="*">All Categories</a>
                    <a href="#" className="gallery-filter" data-filter=".restaurant">Restaurants </a>
                    <a href="#" className="gallery-filter" data-filter=".hotels">Hotels</a>
                    <a href="#" className="gallery-filter" data-filter=".events">Events</a>
                    <a href="#" className="gallery-filter" data-filter=".fitness">Fitness</a>
                </div>
                <div className="grid-item-holder gallery-items fl-wrap">
                    {/*  gallery-item */}
                    <div className="gallery-item restaurant events">
                        {/* listing-item   */}
                        <div className="listing-item">
                            <article className="geodir-category-listing fl-wrap">
                                <div className="geodir-category-img">
                                    <div className="geodir-js-favorite_btn"><i className="fal fa-heart"></i><span>Save</span></div>
                                    <a href="listing-single.html" className="geodir-category-img-wrap fl-wrap">
                                    <img src={all1} alt="" /> 
                                    </a>
                                    <div className="listing-avatar"><a href="author-single.html"><img src={avatar1} alt="" /></a>
                                        <span className="avatar-tooltip">Added By  <strong>Alisa Noory</strong></span>
                                    </div>
                                    <div className="geodir_status_date gsd_open"><i className="fal fa-lock-open"></i>Open Now</div>
                                    <div className="geodir-category-opt">
                                        <div className="listing-rating-count-wrap">
                                            <div className="review-score">4.8</div>
                                            <div className="listing-rating card-popup-rainingvis" data-starrating2="5"></div>
                                            <br/>
                                            <div className="reviews-count">12 reviews</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="geodir-category-content fl-wrap title-sin_item">
                                    <div className="geodir-category-content-title fl-wrap">
                                        <div className="geodir-category-content-title-item">
                                            <h3 className="title-sin_map"><a href="listing-single.html">Luxary Resaturant</a><span className="verified-badge"><i className="fal fa-check"></i></span></h3>
                                            <div className="geodir-category-location fl-wrap"><a href="#" ><i className="fas fa-map-marker-alt"></i> 27th Brooklyn New York, USA</a></div>
                                        </div>
                                    </div>
                                    <div className="geodir-category-text fl-wrap">
                                        <p className="small-text">Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.</p>
                                        <div className="facilities-list fl-wrap">
                                            <div className="facilities-list-title">Facilities : </div>
                                            <ul className="no-list-style">
                                                <li className="tolt" data-microtip-position="top" data-tooltip="Free WiFi"><i className="fal fa-wifi"></i></li>
                                                <li className="tolt" data-microtip-position="top" data-tooltip="Parking"><i className="fal fa-parking"></i></li>
                                                <li className="tolt" data-microtip-position="top" data-tooltip="Non-smoking Rooms"><i className="fal fa-smoking-ban"></i></li>
                                                <li className="tolt" data-microtip-position="top" data-tooltip="Pets Friendly"><i className="fal fa-dog-leashed"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="geodir-category-footer fl-wrap">
                                        <a className="listing-item-category-wrap">
                                            <div className="listing-item-category red-bg"><i className="fal fa-cheeseburger"></i></div>
                                            <span>Restaurants</span>
                                        </a>
                                        <div className="geodir-opt-list">
                                            <ul className="no-list-style">
                                                <li><a href="#" className="show_gcc"><i className="fal fa-envelope"></i><span className="geodir-opt-tooltip">Contact Info</span></a></li>
                                                <li><a href="#1" className="single-map-item" data-newlatitude="40.72956781" data-newlongitude="-73.99726866"><i className="fal fa-map-marker-alt"></i><span className="geodir-opt-tooltip">On the map <strong>1</strong></span> </a></li>
                                                <li>
                                                    <div className="dynamic-gal gdop-list-link" data-dynamicPath={Alisa}><i className="fal fa-search-plus"></i><span className="geodir-opt-tooltip">Gallery</span></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="price-level geodir-category_price">
                                            <span className="price-level-item" data-pricerating="3"></span>
                                            <span className="price-name-tooltip">Pricey</span>
                                        </div>
                                        <div className="geodir-category_contacts">
                                            <div className="close_gcc"><i className="fal fa-times-circle"></i></div>
                                            <ul className="no-list-style">
                                                <li><span><i className="fal fa-phone"></i> Call : </span><a href="#">+38099231212</a></li>
                                                <li><span><i className="fal fa-envelope"></i> Write : </span><a href="#">yourmail@domain.com</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* listing-item end  */}                              
                    </div>
                    {/* gallery-item  end */}
                    {/*  gallery-item */}
                    <div className="gallery-item events">
                        {/* listing-item   */}
                        <div className="listing-item">
                            <article className="geodir-category-listing fl-wrap">
                                <div className="geodir-category-img">
                                    <div className="geodir-js-favorite_btn"><i className="fal fa-heart"></i><span>Save</span></div>
                                    <a href="listing-single.html" className="geodir-category-img-wrap fl-wrap">
                                    <img src={all1} alt="" /> 
                                    </a>
                                    <div className="listing-avatar"><a href="author-single.html"><img src={avatar1} alt="" /></a>
                                        <span className="avatar-tooltip">Added By  <strong>Mark Rose</strong></span>
                                    </div>
                                    <div className="geodir_status_date color-bg"><i className="fal fa-clock"></i>27 may 2019</div>
                                    <div className="geodir-category-opt">
                                        <div className="listing-rating-count-wrap">
                                            <div className="review-score">4.2</div>
                                            <div className="listing-rating card-popup-rainingvis" data-starrating2="4"></div>
                                            <br/>                                                
                                            <div className="reviews-count">6 reviews</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="geodir-category-content fl-wrap title-sin_item">
                                    <div className="geodir-category-content-title fl-wrap ">
                                        <div className="geodir-category-content-title-item">
                                            <h3 className="title-sin_map"><a href="listing-single.html">Rocko Band in Marquee Club</a></h3>
                                            <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"></i>  75 Prince St,  NY, USA</a></div>
                                        </div>
                                    </div>
                                    <div className="geodir-category-text fl-wrap">
                                        <p className="small-text">Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.</p>
                                        <div className="facilities-list fl-wrap">
                                            <div className="facilities-list-title">Facilities : </div>
                                            <ul className="no-list-style">
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Free WiFi"><i className="fal fa-wifi"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Parking"><i className="fal fa-parking"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Non-smoking Rooms"><i className="fal fa-smoking-ban"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Pets Friendly"><i className="fal fa-dog-leashed"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="geodir-category-footer fl-wrap">
                                        <a className="listing-item-category-wrap">
                                            <div className="listing-item-category purp-bg"><i className="fal fa-cocktail"></i></div>
                                            <span>Events</span>
                                        </a>
                                        <div className="geodir-opt-list">
                                            <ul className="no-list-style">
                                                <li><a href="#" className="show_gcc"><i className="fal fa-envelope"></i><span className="geodir-opt-tooltip">Contact Info</span></a></li>
                                                <li><a href="#" className="single-map-item" data-newlatitude="40.88496706" data-newlongitude="-73.88191222"><i className="fal fa-map-marker-alt"></i><span className="geodir-opt-tooltip">On the map <strong>2</strong></span></a></li>
                                                <li>
                                                    <div className="dynamic-gal gdop-list-link" data-dynamicPath={Mark}><i className="fal fa-search-plus"></i><span className="geodir-opt-tooltip">Gallery</span></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="price-level geodir-category_price">
                                            <span className="price-level-item" data-pricerating="4"></span>
                                            <span className="price-name-tooltip">Ultra High</span>
                                        </div>
                                        <div className="geodir-category_contacts">
                                            <div className="close_gcc"><i className="fal fa-times-circle"></i></div>
                                            <ul className="no-list-style">
                                                <li><span><i className="fal fa-phone"></i> Call : </span><a href="#">+38099231212</a></li>
                                                <li><span><i className="fal fa-envelope"></i> Write : </span><a href="#">yourmail@domain.com</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* listing-item end  */}  
                    </div>
                    {/* gallery-item  end */}        
                    {/* gallery-item   */}
                    <div className="gallery-item fitness">
                        {/* listing-item   */}
                        <div className="listing-item">
                            <article className="geodir-category-listing fl-wrap">
                                <div className="geodir-category-img">
                                    <div className="geodir-js-favorite_btn"><i className="fal fa-heart"></i><span>Save</span></div>
                                    <a href="listing-single.html" className="geodir-category-img-wrap fl-wrap">
                                    <img src={all1} alt="" /> 
                                    </a>
                                    <div className="listing-avatar"><a href="author-single.html"><img src={avatar1} alt="" /></a>
                                        <span className="avatar-tooltip">Added By  <strong>Lisa Smith</strong></span>
                                    </div>
                                    <div className="geodir_status_date gsd_close"><i className="fal fa-lock"></i>Close Now</div>
                                    <div className="geodir-category-opt">
                                        <div className="listing-rating-count-wrap">
                                            <div className="review-score">3.8</div>
                                            <div className="listing-rating card-popup-rainingvis" data-starrating2="3"></div>
                                            <br/>
                                            <div className="reviews-count">4 reviews</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="geodir-category-content fl-wrap title-sin_item">
                                    <div className="geodir-category-content-title fl-wrap">
                                        <div className="geodir-category-content-title-item">
                                            <h3 className="title-sin_map"><a href="listing-single.html">Premium Fitness Gym</a><span className="verified-badge"><i className="fal fa-check"></i></span></h3>
                                            <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"></i> W 85th St, New York,  USA</a></div>
                                        </div>
                                    </div>
                                    <div className="geodir-category-text fl-wrap">
                                        <p className="small-text">Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.</p>
                                        <div className="facilities-list fl-wrap">
                                            <div className="facilities-list-title">Facilities : </div>
                                            <ul className="no-list-style">
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Free WiFi"><i className="fal fa-wifi"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Parking"><i className="fal fa-parking"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Non-smoking Rooms"><i className="fal fa-smoking-ban"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Pets Friendly"><i className="fal fa-dog-leashed"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="geodir-category-footer fl-wrap">
                                        <a className="listing-item-category-wrap">
                                            <div className="listing-item-category blue-bg"><i className="fal fa-dumbbell"></i></div>
                                            <span>Fitness / Gym</span>
                                        </a>
                                        <div className="geodir-opt-list">
                                            <ul className="no-list-style">
                                                <li><a href="#" className="show_gcc"><i className="fal fa-envelope"></i><span className="geodir-opt-tooltip">Contact Info</span></a></li>
                                                <li><a href="#" className="single-map-item" data-newlatitude="40.94982541" data-newlongitude="-73.84357452"><i className="fal fa-map-marker-alt"></i><span className="geodir-opt-tooltip">On the map <strong>3</strong></span> </a></li>
                                                <li>
                                                    <div className="dynamic-gal gdop-list-link" data-dynamicPath={Lisa}><i className="fal fa-search-plus"></i><span className="geodir-opt-tooltip">Gallery</span></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="price-level geodir-category_price">
                                            <span className="price-level-item" data-pricerating="2"></span>
                                            <span className="price-name-tooltip">Moderate</span>
                                        </div>
                                        <div className="geodir-category_contacts">
                                            <div className="close_gcc"><i className="fal fa-times-circle"></i></div>
                                            <ul className="no-list-style">
                                                <li><span><i className="fal fa-phone"></i> Call : </span><a href="#">+38099231212</a></li>
                                                <li><span><i className="fal fa-envelope"></i> Write : </span><a href="#">yourmail@domain.com</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* listing-item end  */}                                   
                    </div>
                    {/* gallery-item  end */}  
                    {/* gallery-item   */}
                    <div className="gallery-item hotels">
                        {/* listing-item   */}
                        <div className="listing-item">
                            <article className="geodir-category-listing fl-wrap">
                                <div className="geodir-category-img">
                                    <div className="geodir-js-favorite_btn"><i className="fal fa-heart"></i><span>Save</span></div>
                                    <a href="listing-single.html" className="geodir-category-img-wrap fl-wrap">
                                    <img src={all1} alt="" /> 
                                    </a>
                                    <div className="listing-avatar"><a href="author-single.html"><img src={avatar1} alt="" /></a>
                                        <span className="avatar-tooltip">Added By  <strong>Kliff Antony</strong></span>
                                    </div>
                                    <div className="geodir_status_date gsd_open"><i className="fal fa-lock-open"></i>Open Now</div>
                                    <div className="geodir-category-opt">
                                        <div className="listing-rating-count-wrap">
                                            <div className="review-score">5.0</div>
                                            <div className="listing-rating card-popup-rainingvis" data-starrating2="5"></div>
                                            <br/>                                                
                                            <div className="reviews-count">4 reviews</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="geodir-category-content fl-wrap title-sin_item">
                                    <div className="geodir-category-content-title fl-wrap">
                                        <div className="geodir-category-content-title-item">
                                            <h3 className="title-sin_map"><a href="listing-single.html">MontePlaza Hotel</a><span className="verified-badge"><i className="fal fa-check"></i></span></h3>
                                            <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"></i>  70 Bright St New York, USA</a></div>
                                        </div>
                                    </div>
                                    <div className="geodir-category-text fl-wrap">
                                        <p className="small-text">Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.</p>
                                        <div className="facilities-list fl-wrap">
                                            <div className="facilities-list-title">Facilities : </div>
                                            <ul className="no-list-style">
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Free WiFi"><i className="fal fa-wifi"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Parking"><i className="fal fa-parking"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Non-smoking Rooms"><i className="fal fa-smoking-ban"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Pets Friendly"><i className="fal fa-dog-leashed"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="geodir-category-footer fl-wrap">
                                        <a className="listing-item-category-wrap">
                                            <div className="listing-item-category  yellow-bg"><i className="fal fa-bed"></i></div>
                                            <span>Hotels</span>
                                        </a>
                                        <div className="geodir-opt-list">
                                            <ul className="no-list-style">
                                                <li><a href="#" className="show_gcc"><i className="fal fa-envelope"></i><span className="geodir-opt-tooltip">Contact Info</span></a></li>
                                                <li><a href="#" className="single-map-item" data-newlatitude="40.72228267" data-newlongitude="-73.99246214"><i className="fal fa-map-marker-alt"></i><span className="geodir-opt-tooltip">On the map <strong>4</strong></span></a></li>
                                                <li>
                                                    <div className="dynamic-gal gdop-list-link" data-dynamicPath={Kliff}><i className="fal fa-search-plus"></i><span className="geodir-opt-tooltip">Gallery</span></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="price-level geodir-category_price">
                                            <span className="price-level-item" data-pricerating="4"></span>
                                            <span className="price-name-tooltip">Ultra High</span>
                                        </div>
                                        <div className="geodir-category_contacts">
                                            <div className="close_gcc"><i className="fal fa-times-circle"></i></div>
                                            <ul className="no-list-style">
                                                <li><span><i className="fal fa-phone"></i> Call : </span><a href="#">+38099231212</a></li>
                                                <li><span><i className="fal fa-envelope"></i> Write : </span><a href="#">yourmail@domain.com</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* listing-item end  */}                                                            
                    </div>
                    {/* gallery-item  end */}                                  
                    {/* gallery-item   */}
                    <div className="gallery-item hotels">
                        {/* listing-item   */}
                        <div className="listing-item">
                            <article className="geodir-category-listing fl-wrap">
                                <div className="geodir-category-img">
                                    <div className="geodir-js-favorite_btn"><i className="fal fa-heart"></i><span>Save</span></div>
                                    <a href="listing-single.html" className="geodir-category-img-wrap fl-wrap">
                                    <img src={all1} alt="" /> 
                                    </a>
                                    <div className="listing-avatar"><a href="author-single.html"><img src={avatar1} alt="" /></a>
                                        <span className="avatar-tooltip">Added By  <strong>Nasty Wood</strong></span>
                                    </div>
                                    <div className="geodir_status_date gsd_open"><i className="fal fa-lock-open"></i>Open Now</div>
                                    <div className="geodir-category-opt">
                                        <div className="listing-rating-count-wrap">
                                            <div className="review-score">4.7</div>
                                            <div className="listing-rating card-popup-rainingvis" data-starrating2="5"></div>
                                            <br/>
                                            <div className="reviews-count">9 reviews</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="geodir-category-content fl-wrap title-sin_item">
                                    <div className="geodir-category-content-title fl-wrap">
                                        <div className="geodir-category-content-title-item">
                                            <h3 className="title-sin_map"><a href="listing-single.html">Handmade Shop</a></h3>
                                            <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"></i>  34-42 Montgomery St , NY, USA</a></div>
                                        </div>
                                    </div>
                                    <div className="geodir-category-text fl-wrap">
                                        <p className="small-text">Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.</p>
                                        <div className="facilities-list fl-wrap">
                                            <div className="facilities-list-title">Facilities : </div>
                                            <ul className="no-list-style">
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Free WiFi"><i className="fal fa-wifi"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Parking"><i className="fal fa-parking"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Non-smoking Rooms"><i className="fal fa-smoking-ban"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Pets Friendly"><i className="fal fa-dog-leashed"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="geodir-category-footer fl-wrap">
                                        <a className="listing-item-category-wrap">
                                            <div className="listing-item-category green-bg"><i className="fal fa-cart-arrow-down"></i></div>
                                            <span>Shopping</span>
                                        </a>
                                        <div className="geodir-opt-list">
                                            <ul className="no-list-style">
                                                <li><a href="#" className="show_gcc"><i className="fal fa-envelope"></i><span className="geodir-opt-tooltip">Contact Info</span></a></li>
                                                <li><a href="#" className="single-map-item" data-newlatitude="40.88496706" data-newlongitude="-73.88191222"><i className="fal fa-map-marker-alt"></i><span className="geodir-opt-tooltip">On the map <strong>5</strong></span> </a></li>
                                                <li>
                                                    <div className="dynamic-gal gdop-list-link" data-dynamicPath={Nasty}><i className="fal fa-search-plus"></i><span className="geodir-opt-tooltip">Gallery</span></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="price-level geodir-category_price">
                                            <span className="price-level-item" data-pricerating="3"></span>
                                            <span className="price-name-tooltip">Pricey</span>
                                        </div>
                                        <div className="geodir-category_contacts">
                                            <div className="close_gcc"><i className="fal fa-times-circle"></i></div>
                                            <ul className="no-list-style">
                                                <li><span><i className="fal fa-phone"></i> Call : </span><a href="#">+38099231212</a></li>
                                                <li><span><i className="fal fa-envelope"></i> Write : </span><a href="#">yourmail@domain.com</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* listing-item end  */}                                           
                    </div>
                    {/* gallery-item  end */}                                 
                    {/* gallery-item   */}
                    <div className="gallery-item  restaurant hotels">
                        {/* listing-item   */}
                        <div className="listing-item">
                            <article className="geodir-category-listing fl-wrap">
                                <div className="geodir-category-img">
                                    <div className="geodir-js-favorite_btn"><i className="fal fa-heart"></i><span>Save</span></div>
                                    <a href="listing-single.html" className="geodir-category-img-wrap fl-wrap">
                                    <img src={all1} alt="" /> 
                                    </a>
                                    <div className="listing-avatar"><a href="author-single.html"><img src={avatar1} alt="" /></a>
                                        <span className="avatar-tooltip">Added By  <strong>Alisa Noory</strong></span>
                                    </div>
                                    <div className="geodir_status_date gsd_close"><i className="fal fa-lock-open"></i>Close Now</div>
                                    <div className="geodir-category-opt">
                                        <div className="listing-rating-count-wrap">
                                            <div className="review-score">4.1</div>
                                            <div className="listing-rating card-popup-rainingvis" data-starrating2="4"></div>
                                            <br/>
                                            <div className="reviews-count">26 reviews</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="geodir-category-content fl-wrap title-sin_item">
                                    <div className="geodir-category-content-title fl-wrap">
                                        <div className="geodir-category-content-title-item">
                                            <h3 className="title-sin_map"><a href="listing-single.html">Iconic Cafe in Manhattan</a><span className="verified-badge"><i className="fal fa-check"></i></span></h3>
                                            <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"></i> 40 Journal Square Plaza, NJ,  USA</a></div>
                                        </div>
                                    </div>
                                    <div className="geodir-category-text fl-wrap">
                                        <p className="small-text">Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.</p>
                                        <div className="facilities-list fl-wrap">
                                            <div className="facilities-list-title">Facilities : </div>
                                            <ul className="no-list-style">
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Free WiFi"><i className="fal fa-wifi"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Parking"><i className="fal fa-parking"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Non-smoking Rooms"><i className="fal fa-smoking-ban"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Pets Friendly"><i className="fal fa-dog-leashed"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="geodir-category-footer fl-wrap">
                                        <a className="listing-item-category-wrap">
                                            <div className="listing-item-category red-bg"><i className="fal fa-cheeseburger"></i></div>
                                            <span>Restaurants</span>
                                        </a>
                                        <div className="geodir-opt-list">
                                            <ul className="no-list-style">
                                                <li><a href="#" className="show_gcc"><i className="fal fa-envelope"></i><span className="geodir-opt-tooltip">Contact Info</span></a></li>
                                                <li><a href="#" className="single-map-item" data-newlatitude="40.76221766" data-newlongitude="-73.96511769"><i className="fal fa-map-marker-alt"></i><span className="geodir-opt-tooltip">On the map <strong>6</strong></span> </a></li>
                                                <li>
                                                    <div className="dynamic-gal gdop-list-link" data-dynamicPath={Alisa}><i className="fal fa-search-plus"></i><span className="geodir-opt-tooltip">Gallery</span></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="price-level geodir-category_price">
                                            <span className="price-level-item" data-pricerating="2"></span>
                                            <span className="price-name-tooltip">Moderate</span>
                                        </div>
                                        <div className="geodir-category_contacts">
                                            <div className="close_gcc"><i className="fal fa-times-circle"></i></div>
                                            <ul className="no-list-style">
                                                <li><span><i className="fal fa-phone"></i> Call : </span><a href="#">+38099231212</a></li>
                                                <li><span><i className="fal fa-envelope"></i> Write : </span><a href="#">yourmail@domain.com</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* listing-item end  */}                                                        
                    </div>
                    {/* gallery-item  end */}
                    {/* gallery-item   */}
                    <div className="gallery-item fitness">
                        {/* listing-item   */}
                        <div className="listing-item">
                            <article className="geodir-category-listing fl-wrap">
                                <div className="geodir-category-img">
                                    <div className="geodir-js-favorite_btn"><i className="fal fa-heart"></i><span>Save</span></div>
                                    <a href="listing-single.html" className="geodir-category-img-wrap fl-wrap">
                                    <img src={all1} alt="" /> 
                                    </a>
                                    <div className="listing-avatar"><a href="author-single.html"><img src={avatar1} alt="" /></a>
                                        <span className="avatar-tooltip">Added By  <strong>Lisa Smith</strong></span>
                                    </div>
                                    <div className="geodir_status_date gsd_close"><i className="fal fa-lock"></i>Close Now</div>
                                    <div className="geodir-category-opt">
                                        <div className="listing-rating-count-wrap">
                                            <div className="review-score">4.1</div>
                                            <div className="listing-rating card-popup-rainingvis" data-starrating2="4"></div>
                                            <br/>
                                            <div className="reviews-count">56 reviews</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="geodir-category-content fl-wrap title-sin_item">
                                    <div className="geodir-category-content-title fl-wrap">
                                        <div className="geodir-category-content-title-item">
                                            <h3 className="title-sin_map"><a href="listing-single.html">BodyStrong Gym</a><span className="verified-badge"><i className="fal fa-check"></i></span></h3>
                                            <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"></i> W 85th St, New York,  USA</a></div>
                                        </div>
                                    </div>
                                    <div className="geodir-category-text fl-wrap">
                                        <p className="small-text">Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.</p>
                                        <div className="facilities-list fl-wrap">
                                            <div className="facilities-list-title">Facilities : </div>
                                            <ul className="no-list-style">
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Free WiFi"><i className="fal fa-wifi"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Parking"><i className="fal fa-parking"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Non-smoking Rooms"><i className="fal fa-smoking-ban"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Pets Friendly"><i className="fal fa-dog-leashed"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="geodir-category-footer fl-wrap">
                                        <a className="listing-item-category-wrap">
                                            <div className="listing-item-category blue-bg"><i className="fal fa-dumbbell"></i></div>
                                            <span>Fitness / Gym</span>
                                        </a>
                                        <div className="geodir-opt-list">
                                            <ul className="no-list-style">
                                                <li><a href="#" className="show_gcc"><i className="fal fa-envelope"></i><span className="geodir-opt-tooltip">Contact Info</span></a></li>
                                                <li><a href="#" className="single-map-item" data-newlatitude="40.94982541" data-newlongitude="-73.84357452"><i className="fal fa-map-marker-alt"></i><span className="geodir-opt-tooltip">On the map <strong>7</strong></span> </a></li>
                                                <li>
                                                    <div className="dynamic-gal gdop-list-link" data-dynamicPath={Alisa}><i className="fal fa-search-plus"></i><span className="geodir-opt-tooltip">Gallery</span></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="price-level geodir-category_price">
                                            <span className="price-level-item" data-pricerating="2"></span>
                                            <span className="price-name-tooltip">Moderate</span>
                                        </div>
                                        <div className="geodir-category_contacts">
                                            <div className="close_gcc"><i className="fal fa-times-circle"></i></div>
                                            <ul className="no-list-style">
                                                <li><span><i className="fal fa-phone"></i> Call : </span><a href="#">+38099231212</a></li>
                                                <li><span><i className="fal fa-envelope"></i> Write : </span><a href="#">yourmail@domain.com</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* listing-item end  */}                                   
                    </div>
                    {/* gallery-item  end */} 
                    {/* gallery-item   */}
                    <div className="gallery-item hotels">
                        {/* listing-item   */}
                        <div className="listing-item">
                            <article className="geodir-category-listing fl-wrap">
                                <div className="geodir-category-img">
                                    <div className="geodir-js-favorite_btn"><i className="fal fa-heart"></i><span>Save</span></div>
                                    <a href="listing-single.html" className="geodir-category-img-wrap fl-wrap">
                                    <img src={all1} alt="" /> 
                                    </a>
                                    <div className="listing-avatar"><a href="author-single.html"><img src={avatar1} alt="" /></a>
                                        <span className="avatar-tooltip">Added By  <strong>Nasty Wood</strong></span>
                                    </div>
                                    <div className="geodir_status_date gsd_open"><i className="fal fa-lock-open"></i>Open Now</div>
                                    <div className="geodir-category-opt">
                                        <div className="listing-rating-count-wrap">
                                            <div className="review-score">4.7</div>
                                            <div className="listing-rating card-popup-rainingvis" data-starrating2="5"></div>
                                            <br/>
                                            <div className="reviews-count">9 reviews</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="geodir-category-content fl-wrap title-sin_item">
                                    <div className="geodir-category-content-title fl-wrap">
                                        <div className="geodir-category-content-title-item">
                                            <h3 className="title-sin_map"><a href="listing-single.html">Family Store</a></h3>
                                            <div className="geodir-category-location fl-wrap"><a href="#"><i className="fas fa-map-marker-alt"></i>  34-42 Montgomery St , NY, USA</a></div>
                                        </div>
                                    </div>
                                    <div className="geodir-category-text fl-wrap">
                                        <p className="small-text">Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.</p>
                                        <div className="facilities-list fl-wrap">
                                            <div className="facilities-list-title">Facilities : </div>
                                            <ul className="no-list-style">
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Free WiFi"><i className="fal fa-wifi"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Parking"><i className="fal fa-parking"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Non-smoking Rooms"><i className="fal fa-smoking-ban"></i></li>
                                                <li className="tolt"  data-microtip-position="top" data-tooltip="Pets Friendly"><i className="fal fa-dog-leashed"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="geodir-category-footer fl-wrap">
                                        <a className="listing-item-category-wrap">
                                            <div className="listing-item-category green-bg"><i className="fal fa-cart-arrow-down"></i></div>
                                            <span>Shopping</span>
                                        </a>
                                        <div className="geodir-opt-list">
                                            <ul className="no-list-style">
                                                <li><a href="#" className="show_gcc"><i className="fal fa-envelope"></i><span className="geodir-opt-tooltip">Contact Info</span></a></li>
                                                <li><a href="#" className="single-map-item" data-newlatitude="40.88496706" data-newlongitude="-73.88191222"><i className="fal fa-map-marker-alt"></i><span className="geodir-opt-tooltip">On the map <strong>5</strong></span> </a></li>
                                                <li>
                                                    <div className="dynamic-gal gdop-list-link" data-dynamicPath={Nasty}><i className="fal fa-search-plus"></i><span className="geodir-opt-tooltip">Gallery</span></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="price-level geodir-category_price">
                                            <span className="price-level-item" data-pricerating="3"></span>
                                            <span className="price-name-tooltip">Pricey</span>
                                        </div>
                                        <div className="geodir-category_contacts">
                                            <div className="close_gcc"><i className="fal fa-times-circle"></i></div>
                                            <ul className="no-list-style">
                                                <li><span><i className="fal fa-phone"></i> Call : </span><a href="#">+38099231212</a></li>
                                                <li><span><i className="fal fa-envelope"></i> Write : </span><a href="#">yourmail@domain.com</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* listing-item end  */}                                           
                    </div>
                    {/* gallery-item  end */} 								
                </div>
                <a href="listing.html" className="btn  dec_btn  color2-bg">Check Out All Listings<i className="fal fa-arrow-alt-right"></i></a>
            </div>
        </section>
    );
}

export default Sec4;