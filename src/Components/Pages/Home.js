import React, {useEffect} from 'react';

import Content from '../Sections/Home/Content';
import 'react-notifications/lib/notifications.css';
import Base from '../Layouts/Base';
import {appendScript} from "../../Assets/utils/appendScript";
import Footer from "../Layouts/Footer";
import AuthForm from "../Layouts/AuthForm";

const Home = () => {

    useEffect(() => {
        const appendScripts = () => {
            appendScript("/js/map-single.js", false);
        };
        appendScripts();
    },[]);

    return (
        <>
            <Base>
                <Content />
            </Base>
            <Footer />
            <div className="map-modal-wrap">
                <div className="map-modal-wrap-overlay"/>
                <div className="map-modal-item">
                    <div className="map-modal-container fl-wrap">
                        <div className="map-modal fl-wrap">
                            <div id="singleMap" data-latitude="40.7" data-longitude="-73.1"/>
                        </div>
                        <h3><span>Location for : </span><a href="#">Listing Title</a></h3>
                        <div className="map-modal-close"><i className="fal fa-times"/></div>
                    </div>
                </div>
            </div>
            <AuthForm />
            <a className="to-top"><i className="fas fa-caret-up"/></a>
        </>
    );
};

export default Home;