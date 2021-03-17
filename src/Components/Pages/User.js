import React, { useEffect, Fragment, useContext, useState } from 'react';
import app from '../../firebase';
import MetaTags from 'react-meta-tags';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
import AuthForm from '../Layouts/AuthForm';
import Content from '../Sections/User/Content';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';
import { UserContext } from "../../Contexts/User/userContext";

import { appendScript } from '../../Assets/utils/appendScript';

import $ from "jquery";

const User = () => {

    const [state, dispatch] = useContext(UserContext);
    const [user, setUser] = useState('');
    useEffect(() => {
        const fetchUser = async () => {
            if (state.user.email) {
                const db = app.firestore()
                const userRef = db.collection('Users');
                const snapshot = await userRef.where('Email', '==', state.user.email).get();
                if (snapshot.empty) {
                    NotificationManager.error('Verify your connection');
                    return;
                }

                snapshot.forEach(doc => {
                    setUser(doc.data())
                });
            }
        }
        fetchUser()
    })

    useEffect(() => {
        const headerScripts = () => {
            $(".more-filter-option").on("click", function () {
                $(".hidden-listing-filter").slideToggle(500);
                $(this).find("span").toggleClass("mfilopact");
            });
            var headSearch = $(".header-search"),
                ssbut = $(".show-search-button"),
                wlwrp = $(".header-modal"),
                wllink = $(".show-header-modal"),
                mainheader = $(".main-header");
            function showSearch() {
                headSearch.addClass("vis-head-search").removeClass("vis-search");
                ssbut.find("span").text("Close");
                ssbut.find("i").addClass("vis-head-search-close");
                mainheader.addClass("vis-searchdec");
                hideWishlist();
            }
            function hideSearch() {
                headSearch.removeClass("vis-head-search").addClass("vis-search");
                ssbut.find("span").text("Search");
                ssbut.find("i").removeClass("vis-head-search-close");
                mainheader.removeClass("vis-searchdec");
            }
            ssbut.on("click", function () {
                if ($(".header-search").hasClass("vis-search")) showSearch();
                else hideSearch();
            });
            $(".header-search_close").on("click", function () {
                hideSearch();
            });
            function showWishlist() {
                wlwrp.fadeIn(1).addClass("vis-wishlist").removeClass("novis_wishlist")
                hideSearch();
                wllink.addClass("scwllink");
            }
            function hideWishlist() {
                wlwrp.fadeOut(1).removeClass("vis-wishlist").addClass("novis_wishlist");
                wllink.removeClass("scwllink");
            }
            wllink.on("click", function () {
                if (wlwrp.hasClass("novis_wishlist")) showWishlist();
                else hideWishlist();
            });
            $(".close-header-modal").on("click", function () {
                hideWishlist();
            });
            var wlitle = $(".novis_wishlist .widget-posts li").length;
            $(".header-modal-top h4 strong , .cart-btn span.cart-counter").text(wlitle);
            $(".act-hiddenpanel").on("click", function () {
                $(this).toggleClass("active-hidden-opt-btn").find("span").text($(this).find("span").text() === 'Close options' ? 'More options' : 'Close options');
                $(".hidden-listing-filter").slideToggle(400);
            });

        }
        headerScripts();
    }, [state]);

    return (
        <Fragment>
            <MetaTags>
                <title>E-Mobilier</title>
                <meta
                    name="description"
                    content="User"
                />
            </MetaTags>
            <div id="main">
                <Header user={user} state={state} dispatch={dispatch} />
                <NotificationContainer />
                <div id="wrapper">
                    <div className="content">
                        <Content user={user} state={state} dispatch={dispatch} />
                    </div>
                </div>
                <Footer />
                <AuthForm state={state} dispatch={dispatch} />
                <a className="to-top"><i className="fas fa-caret-up"></i></a>
            </div>
        </Fragment>
    );
}

export default User;