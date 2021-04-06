import React, { Fragment } from 'react';
import { AuthProvider } from "../../../Contexts/AuthContext"
import Top from './Top';
import Container from "./Container";

const Content = (props) => {
    return (
        <AuthProvider>
            <Fragment>
                <section className="gray-bg no-top-padding-sec" id="sec1">
                    <div className="container">
                        <Top/>
                        <Container/>
                    </div>
                </section>
            </Fragment >
        </AuthProvider>
    );
};

export default Content;