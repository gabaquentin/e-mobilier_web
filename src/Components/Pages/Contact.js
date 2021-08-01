import React, {useEffect} from 'react';

import Content from '../Sections/Contact/Content';
import 'react-notifications/lib/notifications.css';
import Base from '../Layouts/Base';
import {appendScript} from "../../Assets/utils/appendScript";
import Footer from "../Layouts/Footer";
import AuthForm from "../Layouts/AuthForm";

const Contact = () => {
    return (
        <>
            <Base>
                <Content />
            </Base>
            <AuthForm />

        </>
    );
};

export default Contact;