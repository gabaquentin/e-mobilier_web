import React, { useEffect } from 'react';
import { appendScript } from "../../../../Assets/utils/appendScript";
import {Link} from "react-router-dom";

const Listing_Card = (props) => {
    useEffect(() => {
        const lightGalleryScript = () => {
            appendScript("https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.3.2/js/lightgallery.js", false);
        };
        lightGalleryScript();
    });
    const idTag = "#"+props.id;
    return (
    <div className="listing-item" >
            <article className="geodir-category-listing fl-wrap">
                <div className="geodir-category-img">
                    <div className="geodir-js-favorite_btn"><i className="fal fa-heart"/><span>Save</span></div>
                    <Link to={"/listing-single"} className="geodir-category-img-wrap fl-wrap">
                        <img src={props.image} alt="" />
                    </Link>
                    <div className="listing-avatar"><Link to={"/author-single"}><img src={props.owner.avatar} alt="" /></Link>
                        <span className="avatar-tooltip">Added By  <strong>{props.owner.name}</strong></span>
                    </div>
                    {props.status === "1" ? <div className="geodir_status_date gsd_open"><i className="fal fa-lock-open"/>Open Now</div>
                        : props.status === "0" ? <div className="geodir_status_date gsd_close"><i className="fal fa-lock"/>Close Now</div>
                        : <div className="geodir_status_date color-bg"><i className="fal fa-clock"/>{props.status}</div>
                    }
                    <div className="geodir-category-opt">
                        <div className="listing-rating-count-wrap">
                            <div className="review-score">{props.score}</div>
                            <div className="listing-rating card-popup-rainingvis" data-starrating2={props.score}/>
                            <br/>
                            <div className="reviews-count">{props.reviews} reviews</div>
                        </div>
                    </div>
                </div>
                <div className="geodir-category-content fl-wrap title-sin_item">
                    <div className="geodir-category-content-title fl-wrap">
                        <div className="geodir-category-content-title-item">
                            <h3 className="title-sin_map"><Link to={"/listing-single"}> {props.name} </Link> {props.verified ? <span className="verified-badge"><i className="fal fa-check"/></span> : ""}</h3>
                            <div className="geodir-category-location fl-wrap"><a href="#1" className="map-item"><i className="fas fa-map-marker-alt"/> {props.address}</a></div>
                        </div>
                    </div>
                    <div className="geodir-category-text fl-wrap">
                        <p className="small-text">{props.description}</p>
                        <div className="facilities-list fl-wrap">
                            <div className="facilities-list-title">Facilities :</div>
                            <ul className="no-list-style">
                                {props.facilities.map(item => {
                                    return item === "pets" ? <li className="tolt" data-microtip-position="top" data-tooltip="Pets Friendly"><i className="fal fa-dog-leashed"/></li>
                                        : item === "parking" ? <li className="tolt" data-microtip-position="top" data-tooltip="Parking"><i className="fal fa-parking"/></li>
                                        : item === "smoke" ? <li className="tolt" data-microtip-position="top" data-tooltip="Non-smoking Rooms"><i className="fal fa-smoking-ban"/></li>
                                        : item === "wifi" ? <li className="tolt" data-microtip-position="top" data-tooltip="Free WiFi"><i className="fal fa-wifi"/></li>
                                        : ""
                                })}

                            </ul>
                        </div>
                    </div>
                    <div className="geodir-category-footer fl-wrap">
                        <a className="listing-item-category-wrap">
                            {props.category === "Restaurants" ? <><div className="listing-item-category red-bg"><i className="fal fa-cheeseburger"/></div> <span> {props.category} </span></>
                                : props.category === "Shopping" ? <><div className="listing-item-category green-bg"><i className="fal fa-cart-arrow-down"/></div><span>{props.category}</span></>
                                : props.category === "Hotels" ? <><div className="listing-item-category  yellow-bg"><i className="fal fa-bed"/> </div> <span>{props.category}</span></>
                                : props.category === "Fitness / Gym" ? <><div className="listing-item-category blue-bg"><i className="fal fa-dumbbell"/></div> <span>{props.category}</span></>
                                : props.category === "Events" ? <><div className="listing-item-category purp-bg"><i className="fal fa-cocktail"/></div> <span>{props.category}</span></>
                                : ""
                            }

                        </a>
                        <div className="geodir-opt-list">
                            <ul className="no-list-style">
                                <li><a href="#" className="show_gcc"><i className="fal fa-envelope"/><span className="geodir-opt-tooltip">Contact Info</span></a> </li>
                                <li>
                                    {props.map ? <a href={idTag} className="map-item"><i className="fal fa-map-marker-alt"/><span className="geodir-opt-tooltip">On the map <strong>2</strong></span></a>
                                        : <a href="#" className="single-map-item" data-newlatitude={props.location[0]} data-newlongitude={props.location[1]}><i className="fal fa-map-marker-alt"/><span className="geodir-opt-tooltip">On the map <strong>4</strong></span></a>
                                    }
                                </li>
                                <li>
                                    <div className="dynamic-gal gdop-list-link" data-dynamicPath="[{'src': 'images/all/1.jpg'},{'src': 'images/all/1.jpg'}, {'src': 'images/all/1.jpg'}]"> <i className="fal fa-search-plus"/><span className="geodir-opt-tooltip">Gallery</span></div>
                                </li>
                            </ul>
                        </div>
                        <div className="price-level geodir-category_price">
                            <span className="price-level-item" data-pricerating="2"/>
                            <span className="price-name-tooltip">{props.price.amount} {props.price.currency}</span>
                        </div>
                        <div className="geodir-category_contacts">
                            <div className="close_gcc"><i className="fal fa-times-circle"/></div>
                            <ul className="no-list-style">
                                <li><span><i className="fal fa-phone"/> Call : </span><a
                                    href="#">{props.owner.phone}</a></li>
                                <li><span><i className="fal fa-envelope"/> Write : </span><a
                                    href="#">{props.owner.email}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Listing_Card;