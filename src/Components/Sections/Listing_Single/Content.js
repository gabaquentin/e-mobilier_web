import React, { Fragment } from 'react';
import { AuthProvider } from "../../../Contexts/AuthContext"
import Hero from './Hero';
import Scroll_Nav from './Scroll_Nav';
import Container from './Container';

const Content = (props) => {
    return (
        <AuthProvider>
            <Fragment>
                <Hero/>
                <Scroll_Nav/>
                <Container/>
            </Fragment >
        </AuthProvider>
    );
};

export default Content;