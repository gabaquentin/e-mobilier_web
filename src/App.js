import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from "./Contexts/AuthContext"

// Private route
import PrivateRoute from './PrivateRoute'

// Preloader
import Preloader from './Components/Layouts/Preloader';

// Not Found
import NotFound from './Components/Layouts/NotFound';

// Pages
import Home from './Components/Pages/Home';

function App() {
    return (
        <Router>
            <Preloader />
            <AuthProvider>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </AuthProvider>
        </Router>
    );
}

export default App;
