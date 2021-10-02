import React from 'react';
import { mount } from '@cypress/react';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { AppContextProvider, useAppContext } from '../src/contexts';
import user from '../mock-user.env.json';

it('renders learn react link', () => {
    mount(
        <ChakraProvider resetCSS={true}>
            <AppContextProvider overrideValue={{ user }}>
                <App />
            </AppContextProvider>
        </ChakraProvider>,
    );

    cy.get('h2').contains('Lecture Voter');
});
