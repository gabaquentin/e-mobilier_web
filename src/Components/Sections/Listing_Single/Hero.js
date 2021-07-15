import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Edit from './Widgets/Edit';

import Caroussel from './Header/Caroussel';
import Background_Image from './Header/Background_Image';
import Video from './Header/Video';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Hero = (props) => {

    const { Id, Mode } = useParams();
    const classes = useStyles();
    const [editTitle, setEditTitle] = useState(false);

    const handleEditTitle = () => {
        if (editTitle) {
            setEditTitle(false);
        } else {
            setEditTitle(true);
        }
    }

    return (
        <>
            <section className="listing-hero-section hidden-section" data-scrollax-parent="true" id="sec1">
            {props.listing.Data.Header_Media.Type.background_image
                ?
                <Background_Image bg={props.listing.Data.Header_Media.Media} Mode={Mode} />
                : props.listing.Data.Header_Media.Type.caroussel
                    ?
                    <Caroussel bg_list={props.listing.Data.Header_Media.Media} />
                    : props.listing.Data.Header_Media.Type.video
                        ?
                        <Video url={props.listing.Data.Header_Media.Media} />
                        :
                        <></>
            }

                {Mode === "Edit" ? <Edit component="Header_Media" listing={props.listing.Data} />:<></>}

            <div className="container">
                <div className="list-single-header-item  fl-wrap">
                    <div className="row">
                        <div className="col-md-9">
                                {Mode === "Edit" ? 
                                    <h1>
                                        {editTitle ?
                                            <>
                                                <input
                                                    type="text"
                                                    placeholder="Name of your business"
                                                    style={{
                                                        float: "left",
                                                        border: "1px solid #e5e7f2",
                                                        background: "#f9f9f9",
                                                        width: "30%",
                                                        padding: "15px 20px 15px 45px",
                                                        borderRadius: "4px",
	                                                    color: "#7d93b2",
	                                                    fontSize: "12px",
	                                                    WebkitAppearance: "none",
	                                                    outline: "none",
	                                                    overflow: "hidden",
	                                                    zIndex:"1"
                                                    }}
                                                    defaultValue={props.listing.Data.Title.Name}
                                                />
                                            </>
                                            : props.listing.Data.Title.Name
                                        }
                                        
                                        <a href="#Title" onClick={handleEditTitle} className="promo-link big_prom" style={{ marginLeft: "3%" }} >
                                        <i ></i>
                                            <span>{editTitle ? "Save" : "Edit Title"}</span>
                                        </a>
                                    </h1>
                                    :
                                    <h1>{props.listing.Data.Title.Name}<span className="verified-badge"><i className="fal fa-check" /></span></h1>
                            }
                            <div className="geodir-category-location fl-wrap"><a href="#">
                                <i className="fas fa-map-marker-alt" /> {props.listing.Data.Location_Contact.City}</a> <a href="#"> <i className="fal fa-phone" />{props.listing.Data.Location_Contact.Phone}</a> <a href="#"><i className="fal fa-envelope" /> {props.listing.Data.Location_Contact.Email}</a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <a className="fl-wrap list-single-header-column custom-scroll-link " href="#sec6">
                                <div className="listing-rating-count-wrap single-list-count">
                                    <div className="review-score">4.1</div>
                                    <div className="listing-rating card-popup-rainingvis" data-starrating2="4"/>
                                    <br/>
                                        <div className="reviews-count">2 reviews</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="list-single-header_bottom fl-wrap">
                    {props.listing.Data.Title.Type === "Land" ? <a className="listing-item-category-wrap" href="#"><div className="listing-item-category  blue-bg"><i className="fal fa-map" /></div><span>{props.listing.Data.Title.Type}</span></a>
                        : props.listing.Data.Title.Type === "House" ? <a className="listing-item-category-wrap" href="#"><div className="listing-item-category  blue-bg"><i className="fal fa-house-user" /></div><span>{props.listing.Data.Title.Type}</span></a>
                            : props.listing.Data.Title.Type === "Service" ? <a className="listing-item-category-wrap" href="#"><div className="listing-item-category  blue-bg"><i className="fal fa-handshake" /></div><span>{props.listing.Data.Title.Type}</span></a>
                                : props.listing.Data.Title.Type === "Restaurant" ? <a className="listing-item-category-wrap" href="#"><div className="listing-item-category  blue-bg"><i className="fal fa-hamburger" /></div><span>{props.listing.Data.Title.Type}</span></a>
                                    : props.listing.Data.Title.Type === "Fitness" ? <a className="listing-item-category-wrap" href="#"><div className="listing-item-category  blue-bg"><i className="fal fa-dumbbell" /></div><span>{props.listing.Data.Title.Type}</span></a>
                                        : ""
                    }
                    <div className="list-single-author"><a href="author-single.html"><span
                        className="author_avatar"> <img alt='' src={props.author.Data.photoUrl} />  </span>By {props.author.Data.displayName}</a>
                    </div>
                    {props.listing.Data.Plan_Openning.status ?
                        <>
                            <div class="geodir_status_date color-bg"><i class="fal fa-clock"></i>{props.listing.Data.Plan_Openning.value.substr(0, props.listing.Data.Plan_Openning.value.indexOf('T'))}</div>
                            <div class="box-widget counter-widget" data-countDate={props.listing.Data.Plan_Openning.value.substr(0, props.listing.Data.Plan_Openning.value.indexOf('T')) + " " + props.listing.Data.Plan_Openning.value.substr(props.listing.Data.Plan_Openning.value.indexOf('T')+1, props.listing.Data.Plan_Openning.value.indexOf(':')+2)}>
                                <div class="countdown">
                                    <div class="countdown-item">
                                        <span class="days rot">00</span>
                                        <p>days</p>
                                    </div>
                                    <div class="countdown-item">
                                        <span class="hours rot">00</span>
                                        <p>hours </p>
                                    </div>
                                    <div class="countdown-item">
                                        <span class="minutes rot2">00</span>
                                        <p>minutes </p>
                                    </div>
                                    <div class="countdown-item">
                                        <span class="seconds rot2">00</span>
                                        <p>seconds</p>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <div className={props.openned ? "geodir_status_date gsd_open" : "geodir_status_date gsd_close"}><i className={props.openned ? "fal fa-lock-open" : "fal fa-lock"} />{props.openned ? "Open Now" : "Close Now"}</div>
                    }
                    
                    <div className="list-single-stats">
                        <ul className="no-list-style">
                            <li><span className="viewed-counter"><i className="fas fa-eye"/> Viewed -  256 </span>
                            </li>
                            <li><span className="bookmark-counter"><i className="fas fa-heart"/> Bookmark -  445 </span></li>
                        </ul>
                    </div>
                </div>
            </div>
            </section>
        </>

    );
};

export default Hero;