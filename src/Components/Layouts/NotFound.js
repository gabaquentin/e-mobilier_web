import React, { useEffect, Fragment, useContext, useState } from 'react';
import 'react-notifications/lib/notifications.css';
import Base from '../Layouts/Base';
import { Link } from 'react-router-dom';

import hero1 from '../../Assets/images/bg/hero/1.jpg'

const NotFound = () => {
    return (
        <Base>
            <Content />
        </Base>
    );
}

export default NotFound;

const Content = () => {

    return (
        <section className="parallax-section small-par" data-scrollax-parent="true">
            <div className="bg" data-bg={hero1} data-scrollax="properties: { translateY: '30%' }"></div>
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
    );

}