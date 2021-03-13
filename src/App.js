import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from "./Contexts/AuthContext";
import { UserProvider } from "./Contexts/User/userContext";

// Private route
import PrivateRoute from './PrivateRoute'

// Preloader
import Preloader from './Components/Layouts/Preloader';

// Not Found
import NotFound from './Components/Layouts/NotFound';

// Pages
import Home from './Components/Pages/Home';
import User from './Components/Pages/User';

function App() {
    return (
        <Router>
            <Preloader />
            <AuthProvider>
                <UserProvider>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <PrivateRoute exact path="/user" component={User} />
                        <Route component={NotFound} />
                    </Switch>
                </UserProvider>
            </AuthProvider>
        </Router>
    );
}

export default App;
