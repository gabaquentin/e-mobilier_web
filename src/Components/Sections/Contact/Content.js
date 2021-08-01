import React, { Fragment } from 'react';
import { AuthProvider } from "../../../Contexts/AuthContext";
import  Contact from "./Contact"


const Content = (props) => {
    return (
        <AuthProvider>
            <Fragment>
                <Contact />
            </Fragment >
        </AuthProvider>
    );
};

export default Content;