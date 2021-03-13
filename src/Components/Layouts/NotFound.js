import React, { useEffect, Fragment, useContext } from 'react';
import { UserContext } from "../../Contexts/User/userContext";
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import Header from './Header';
import AuthForm from '../Layouts/AuthForm';
import Footer from './Footer';
import { NotificationContainer } from 'react-notifications';
import { appendScript } from '../../Assets/utils/appendScript'

import hero1 from '../../Assets/images/bg/hero/1.jpg'

const NotFound = () => {

    const[state, dispatch] = useContext(UserContext);

    useEffect(() => {
        const appendScripts = async () => {

            //appendScript("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");
            appendScript("/js/jquery.min.js", false);
            appendScript("/js/plugins.js");
            //appendScript("/js/jquery.matchHeight.js");
            appendScript("/js/scripts.js");

        }
        appendScripts();
    },[]);

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
                <Header state={state} dispatch={dispatch} />
                <NotificationContainer />
                <div id="wrapper">
                    <div class="content">
                        <section className="parallax-section small-par" data-scrollax-parent="true">
                            <div className="bg" data-bg={ hero1 } data-scrollax="properties: { translateY: '30%' }"></div>
                            <div className="overlay op7"></div>
                            <div className="container">
                                <div className="error-wrap">
                                    <div className="bubbles">
                                        <h2>404</h2>
                                    </div>
                                    <p>We're sorry, but the Page you were looking for, couldn't be found.</p>
                                    <div class="clearfix"></div>
                                    <form action="#">
                                        <input name="se" id="se" type="text" className="search" placeholder="Search.." />
                                        <button className="search-submit color-bg" id="submit_btn"><i class="fal fa-search"></i> </button>
                                    </form>
                                    <div className="clearfix"></div>
                                    <p>Or</p>
                                    <Link to={"/"} className="btn   color2-bg">Back to Home Page<i className="far fa-home-alt"></i></Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <Footer />
                <AuthForm state={state} dispatch={dispatch} />
                <a class="to-top"><i class="fas fa-caret-up"></i></a>
            </div>
        </Fragment>
    );

}

export default NotFound;