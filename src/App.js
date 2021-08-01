import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from "./Contexts/AuthContext";
import { UserProvider } from "./Contexts/User/userContext";

import {appendScript} from "./Assets/utils/appendScript";

// Transition between pages
import {CSSTransition, TransitionGroup} from "react-transition-group";

// Private route
import PrivateRoute from './PrivateRoute'

// Preloader
import Preloader from './Components/Layouts/Preloader';

// Not Found
import NotFound from './Components/Layouts/NotFound';

// Layout
import Header from "./Components/Layouts/Header";

// Pages
import Home from './Components/Pages/Home';
import User from './Components/Pages/User';
import Listing from "./Components/Pages/Listing";
import Listing_Single from "./Components/Pages/Listing_Single";
import Author_Single from "./Components/Pages/Author_Single";
import Contact from './Components/Pages/Contact';

const  App = () => {

    useEffect(() => {
        const appendScripts = () => {
            appendScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDagkUmxY8WQ5Th7zIf12QkqctyvDf6P8k&libraries=places&callback=initAutocomplete", false);
        };
        appendScripts();
    },[]);

    return (
        <Router>
            <Preloader />
            <AuthProvider>
                <UserProvider>
                    <div id="main">
                        <Header/>
                        <Route render={(location) =>(
                            <TransitionGroup>
                                <CSSTransition key={location.key} timeout={300} classNames="fade">
                                    <Switch>
                                        <Route exact path="/" component={Home} />
                                        <Route exact path="/listing" component={Listing} />

                                        <Route exact path="/listing-single/:Id/:Mode" component={Listing_Single} />
                                        <Route exact path="/listing-single/:Id" component={Listing_Single} />

                                        <Route exact path="/contact" component={Contact} />
                                        
                                        <Route exact path="/author-single" component={Author_Single} />
                                        <PrivateRoute exact path="/user" component={User} />
                                        <Route component={NotFound} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )}/>
                    </div>
                </UserProvider>
            </AuthProvider>
        </Router>
    );
};

export default App;
