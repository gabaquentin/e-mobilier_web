import React, { Fragment } from 'react';
import { AuthProvider } from "../../../Contexts/AuthContext"
import Hero from './Hero';
import Sec1 from './Sec1';

const Content = (props) => {
    return (
        <AuthProvider>
            <Fragment>
                <Hero user={props.user} state={props.state} dispatch={props.dispatch}/>
                <Sec1 user={props.user} state={props.state} dispatch={props.dispatch}/>
                <div className="limit-box fl-wrap"/>
            </Fragment >
        </AuthProvider>
    );
};

export default Content;