import React from 'react';
import { mount } from '@cypress/react';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { AppContextProvider } from '../src/contexts';

it('renders learn react link', () => {
    mount(
        <ChakraProvider resetCSS={true}>
            <AppContextProvider>
                <App />
            </AppContextProvider>
        </ChakraProvider>,
    );
    cy.visit('/');
    cy.get('h2').contains('Lecture Voter');
});
