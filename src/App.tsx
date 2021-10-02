import './style.css';

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { getAuth, onAuthStateChanged } from 'firebase/auth'; // TODO: relocate to lib/firebase

import { getLectures } from '@lib';
import { Home, NotFoundPage } from '@pages';
import { TopBar } from '@components';
import { useAppContext } from '@contexts';
import { IDBLecture } from '@types';

function App() {
    const { setIsAppLoading, setUser, setLectures } = useAppContext();

    const loadInitialData = async (cb: () => void) => {
        const auth = getAuth();
        const lectures = await getLectures();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('user :>> ', user);
                setUser(user);
            } else {
                console.log('user is null');
            }
        });
        setLectures(lectures);
        cb();
    };

    useEffect(() => {
        loadInitialData(() => {
            setIsAppLoading(false);
        });
    }, []);
    return (
        <div>
            <TopBar />
            <div
                style={{
                    overflow: 'auto',
                    height: 'calc( 100vh - 101px )',
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
