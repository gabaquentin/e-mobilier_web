import React, { Component, Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import Header from './Header';
import Footer from './Footer';

import { appendScript } from '../../Assets/utils/appendScript'

class NotFound extends Component {

    componentDidMount() {

        appendScript("/js/jquery.min.js");
        appendScript("/js/plugins.js");
        appendScript("/js/scripts.js");
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
                        <div class="content">
                            <section className="parallax-section small-par" data-scrollax-parent="true">
                                <div className="bg"  data-bg="images/bg/hero/1.jpg" data-scrollax="properties: { translateY: '30%' }"></div>
                                <div className="overlay op7"></div>
                                <div className="container">
                                    <div className="error-wrap">
                                        <div className="bubbles">
                                            <h2>404</h2>
                                        </div>
                                        <p>We're sorry, but the Page you were looking for, couldn't be found.</p>
                                        <div class="clearfix"></div>
                                        <form action="#">
                                            <input name="se" id="se" type="text" className="search" placeholder="Search.." value="Search..." />
                                            <button className="search-submit color-bg" id="submit_btn"><i class="fal fa-search"></i> </button>
                                        </form>
                                        <div className="clearfix"></div>
                                        <p>Or</p>
                                        <a href="index.html" className="btn   color2-bg">Back to Home Page<i className="far fa-home-alt"></i></a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <Footer />
                    <a class="to-top"><i class="fas fa-caret-up"></i></a>
                </div>
            </Fragment>
        );
    }
}

export default NotFound;