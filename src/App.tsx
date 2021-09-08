import React, { useState, useEffect, ContextType } from 'react';
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
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

import { auth } from './lib/firebase/index';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { Home, NotFoundPage } from '@pages';
import TopBar from './components/TopBar/TopBar';
import { useAppContext } from './contexts/AppContext/AppContext';

function App() {
    const { isAppLoading, setIsAppLoading, userCredential, setUserCredential } =
        useAppContext() as any;

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
            setIsAppLoading(false);
        });
    }, []);
    return (
        <div>
            <TopBar />
            <div
                style={{
                    overflow: 'auto',
                    height: 'calc( 100vh - 100px )',
                }}
            >
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
