import React from 'react';
import { Link, useParams } from "react-router-dom";
// Main
import Trainer from "./Main/Trainer";
import Facts from "./Main/Facts";
import Detail from "./Main/Detail";
import Facilities from './Main/Facilities';
import Gallery from "./Main/Gallery";
import Services from "./Main/Services";
import Reviews from "./Main/Reviews/Reviews";
import Menu from "./Main/Menu";
import Video from "./Main/Video";
import Rooms from "./Main/Rooms";

// Widgets
import Opening_Hours from "./Widgets/Opening_Hours";
import Banner from "./Widgets/Banner";
import Book from "./Widgets/Book";
import Location_Contact from "./Widgets/Location_Contact";
import Price_Range from "./Widgets/Price_Range";
import Author from "./Widgets/Author";
import Similar_Listings from "./Widgets/Similar_Listings";
import Tags from "./Widgets/Tags";

const Container = (props) => {
    const { Id, Mode } = useParams();
    return (
<>
        <section className="gray-bg no-top-padding">
            <div className="container">
                <div className="breadcrumbs inline-breadcrumbs fl-wrap">
                    <Link to={"/"}>Home</Link><Link to={"/listing"}>Listings</Link><a href="#">New York</a><span>Listing Single</span>
                </div>
                <div className="clearfix"/>
                <div className="row">
                    {/* list-single-main-wrapper-col */}
                    <div className="col-md-8">
                        {/* list-single-main-wrapper */}
                        <div className="list-single-main-wrapper fl-wrap">
                            {props.listing.Data.Title.Type === "Fitness" ?
                                <Trainer />
                                :""
                            }
                            <Facts />
                            <Detail listing={props.listing} author={props.author} user={props.user} />
                            {props.listing.Data.Title.Type === "House" || props.listing.Data.Title.Type === "Restaurant" ?
                                <Facilities />
                                : ""
                            }
                            {props.listing.Data.Title.Type === "Restaurant" ?
                                <Menu/>
                                : ""
                            }
                            {props.listing.Data.Title.Type === "House" ?
                                <Rooms/>
                                : ""
                            }
                            {props.listing.Data.Content_Widgets.Promo.Display ?
                                <Video/>
                                : ""
                            }
                            {props.listing.Data.Content_Widgets.Gallery.Display ?
                                <Gallery/>
                                : ""
                            }
                            {props.listing.Data.Title.Type === "Service" ?
                                <Services/>
                                : ""
                            }
                            <Reviews/>
                        </div>
                    </div>
                    {/* list-single-main-wrapper-col end */}
                    {/* list-single-sidebar */}
                    <div className="col-md-4">
                            <Opening_Hours listing={props.listing} author={props.author} user={props.user} openned={props.openned}/>
                            <Banner/>
                            <Book/>
                            <Location_Contact listing={props.listing} author={props.author} user={props.user}/>
                            <Price_Range/>
                            <Author/>
                            <Similar_Listings/>
                            <Tags/>
                    </div>
                    {/* list-single-sidebar end */}
                </div>
            </div>
        </section>
        <div className="limit-box fl-wrap"/>
</>
    );
};

export default Container;