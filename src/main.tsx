import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { AppContextProvider } from './contexts/AppContext/AppContext';

ReactDOM.render(
    <React.StrictMode>
        <AppContextProvider>
            <ChakraProvider resetCSS={true}>
                <App />
            </ChakraProvider>
        </AppContextProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
