import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../style.css';
import Brand from './Brand';
import { ChakraProvider } from '@chakra-ui/react';

export default {
    title: 'Components/Brand',
    component: Brand,
    argTypes: {
        size: {
            options: ['hero', 'topbar'],
            control: { type: 'radio' },
        },
    },
};

export const SizeProps: ComponentStory<typeof Brand> = (args) => (
    <ChakraProvider resetCSS={true}>
        <Brand {...args} />
    </ChakraProvider>
);
