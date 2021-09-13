import React from 'react';
import Brand from './Brand';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

test('loads and displays heading', async () => {
    render( <Brand size={'hero'}/> );
    expect(screen.getByRole('heading')).toHaveTextContent('Lecture Voter');
});
