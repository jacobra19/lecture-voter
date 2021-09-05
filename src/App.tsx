import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Home, Login, NotFoundPage, Protected } from '@pages';
import AuthProvider from './contexts/AuthContext/AuthContext';

function App() {
    return (
        <AuthProvider>
            <ChakraProvider resetCSS={true}>
                <div style={{ padding: 20 }}>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={Login} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </Router>
                </div>
            </ChakraProvider>
        </AuthProvider>
    );
}

export default App;
