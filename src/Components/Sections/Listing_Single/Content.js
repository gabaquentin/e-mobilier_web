import React, { Fragment } from 'react';
import { AuthProvider } from "../../../Contexts/AuthContext"
import Hero from './Hero';
import Scroll_Nav from './Scroll_Nav';
import Container from './Container';

const Content = (props) => {
    return (
        <AuthProvider>
            <Fragment>
                <Hero listing={props.listing} author={props.author} user={props.user} openned={props.openned} />
                <Scroll_Nav listing={props.listing}/>
                <Container listing={props.listing} author={props.author} user={props.user} openned={props.openned}/>
            </Fragment >
        </AuthProvider>
    );
};

export default Content;