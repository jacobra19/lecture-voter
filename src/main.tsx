import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Auth0ProviderWithHistory>
                <App />
            </Auth0ProviderWithHistory>
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);
