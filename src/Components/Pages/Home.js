import React, { Component, Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
import AuthForm from '../Layouts/AuthForm';
import Content from '../Sections/Home/Content';

import { appendScript } from '../../Assets/utils/appendScript'

class Home extends Component {

    componentDidMount() {

        appendScript("/js/jquery.min.js");
        appendScript("/js/plugins.js");
        appendScript("/js/scripts.js");
        appendScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDagkUmxY8WQ5Th7zIf12QkqctyvDf6P8k&libraries=places&callback=initAutocomplete");
        appendScript("/js/map-single.js");
    }

    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>E-Mobilier</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <div id="main">
                    <Header />
                    <div id="wrapper">
                        <div className="content">
                            <Content />
                        </div>
                    </div>
                    <Footer />
                    <div className="map-modal-wrap">
                        <div className="map-modal-wrap-overlay"></div>
                        <div className="map-modal-item">
                            <div className="map-modal-container fl-wrap">
                                <div className="map-modal fl-wrap">
                                    <div id="singleMap" data-latitude="40.7" data-longitude="-73.1"></div>
                                </div>
                                <h3><span>Location for : </span><a href="#">Listing Title</a></h3>
                                <div className="map-modal-close"><i className="fal fa-times"></i></div>
                            </div>
                        </div>
                    </div>
                    <AuthForm />

                    <a className="to-top"><i className="fas fa-caret-up"></i></a>  
                </div>
            </Fragment>
        );
    }
}

export default Home;