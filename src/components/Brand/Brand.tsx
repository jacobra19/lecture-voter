import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
const Brand = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
            }}
        >
            <Heading
                size={'4xl'}
                style={{
                    fontFamily: 'Permanent Marker, cursive',
                }}
            >
                Lecture Voter
            </Heading>
            <div style={{ display: 'flex', whiteSpace: 'pre' }}>
                <Text
                    fontSize={'large'}
                    style={{
                        fontFamily: 'Permanent Marker, cursive',
                    }}
                >
                    by {''}
                </Text>
                <Text
                    fontSize={'large'}
                    style={{
                        fontFamily: 'Consolas',
                        fontWeight: 'bold',
                    }}
                >
                    yakov.dev
                </Text>
            </div>
        </div>
    );
};

export default Brand;
