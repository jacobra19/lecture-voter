import { Heading } from '@chakra-ui/react';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div
            style={{
                width: '100vw',
                height: 'calc( 100vh - 101px )',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection:'column'
            }}
        >
            <Heading size={'4xl'} fontFamily={'"Permanent Marker", cursive'}>
                404
            </Heading>
            <Heading size={'2xl'} fontFamily={'"Permanent Marker", cursive'}>
                page not found
            </Heading>
        </div>
    );
};

export default NotFoundPage;
