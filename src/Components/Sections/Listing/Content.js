import React, { Fragment } from 'react';
import { AuthProvider } from "../../../Contexts/AuthContext"
import Map from './Map';
import Search from './Search';
import Listing from './Listing';

const Content = (props) => {
    return (
        <AuthProvider>
            <Fragment>
                <Map/>
                <Search/>
                <Listing/>
            </Fragment >
        </AuthProvider>
    );
};

export default Content;