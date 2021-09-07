import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import AuthProvider from './contexts/AuthContext/AuthContext';

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider resetCSS={true}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
