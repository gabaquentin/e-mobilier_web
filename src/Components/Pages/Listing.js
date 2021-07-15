import React, {useEffect} from 'react';

import Content from '../Sections/Listing/Content';
import 'react-notifications/lib/notifications.css';
import Base from '../Layouts/Base';
import {appendScript} from "../../Assets/utils/appendScript";
import AuthForm from "../Layouts/AuthForm";

const Listing = () => {

    useEffect(() => {
        const appendScripts = () => {
            appendScript("/js/map-plugins.js", false);
            appendScript("/js/map-listing.js", false);
        };
        appendScripts();
    },[]);

    return (
        <>
            <Base>
                <Content />
            </Base>
            <AuthForm />

        </>
    );
};

export default Listing;