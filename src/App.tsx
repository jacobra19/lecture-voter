import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Home, Login, NotFoundPage, Protected } from '@pages';

function App() {
    return (
        <ChakraProvider resetCSS={true}>
            <div style={{ padding: 20 }}>
                <Router>
                    <Route exact path='/' component={Login} />
                    <Route component={NotFoundPage} />
                </Router>
            </div>
        </ChakraProvider>
    );
}

export default App;
