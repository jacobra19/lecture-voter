import React, { useState, useEffect } from 'react';
import './style.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
} from 'react-router-dom';

import { Home, NotFoundPage } from '@pages';
import useAuth from './hooks/useAuth/useAuth';
import TopBar from './components/TopBar/TopBar';

function App() {
    const { user } = useAuth() as any;

    useEffect(() => {
        console.log('useEffect user :>> ', user);
    }, []);
    return (
        <div >
            <TopBar/>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
