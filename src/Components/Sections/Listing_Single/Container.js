import React from 'react';
import {Link} from "react-router-dom";
// Main
import Trainer from "./Main/Trainer";
import Detail from "./Main/Detail";
import Gallery from "./Main/Gallery";
import Services from "./Main/Services";
import Reviews from "./Main/Reviews";
import Menu from "./Main/Menu";
import Video from "./Main/Video";
import Rooms from "./Main/Rooms";

// Widgets
import Opening_Hours from "./Widgets/Opening_Hours";
import Banner from "./Widgets/Banner";
import Book from "./Widgets/Book";
import Author_Contact from "./Widgets/Author_Contact";
import Price_Range from "./Widgets/Price_Range";
import Author from "./Widgets/Author";
import Similar_Listings from "./Widgets/Similar_Listings";
import Tags from "./Widgets/Tags";

const Container = () => {

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
                            <Trainer/>
                            <Detail/>
                            <Menu/>
                            <Rooms/>
                            <Video/>
                            <Gallery/>
                            <Services/>
                            <Reviews/>
                        </div>
                    </div>
                    {/* list-single-main-wrapper-col end */}
                    {/* list-single-sidebar */}
                    <div className="col-md-4">
                        <Opening_Hours/>
                        <Banner/>
                        <Book/>
                        <Author_Contact/>
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