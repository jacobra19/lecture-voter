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

import { auth } from './lib/firebase/index';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { Home, NotFoundPage } from '@pages';
import useAuth from './hooks/useAuth/useAuth';
import TopBar from './components/TopBar/TopBar';

function App() {
    const { userCredential, setUserCredential } = useAuth() as any;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('useEffect userCredential :>> ', userCredential);
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('user :>> ', user);
                setUserCredential(user);
            } else {
                console.log('user is null');
            }
        });
    }, []);
    return (
        <div>
            <TopBar />
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
