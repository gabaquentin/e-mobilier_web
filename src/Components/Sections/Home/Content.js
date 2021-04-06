import React, { Component, Fragment } from 'react';
import { AuthProvider } from "../../../Contexts/AuthContext"
import Hero from './Hero';
import Sec1 from './Sec1';
import Sec2 from './Sec2';
import Sec3 from './Sec3';
import Sec4 from './Sec4';
import Sec5 from './Sec5';
import Sec6 from './Sec6';
import Sec7 from './Sec7';
import Sec8 from './Sec8';
import Sec9 from './Sec9';

class Content extends Component {
    render() {
        return (
            <AuthProvider>
                <Fragment>
                    <Hero />
                    <Sec1 />
                    <div className="sec-circle fl-wrap"/>
                    <Sec2 />
                    <Sec3 />
                    <Sec4 />
                    <Sec5 />
                    <Sec6 />
                    <Sec7 />
                    <Sec8 />
                    <Sec9 />
                </Fragment >
            </AuthProvider>
        );
    }
}

export default Content;