import React, { Component, Fragment } from 'react';
import { AuthProvider } from "../../../Contexts/AuthContext"
import Hero from './Hero';
import Sec1 from './Sec1';

const Content = (props) => {
    return (
        <AuthProvider>
            <Fragment>
                <Hero user={props.user} state={props.state} dispatch={props.dispatch}/>
                <Sec1 user={props.user} state={props.state} dispatch={props.dispatch}/>
                <div class="limit-box fl-wrap"></div>
            </Fragment >
        </AuthProvider>
    );
}

export default Content;