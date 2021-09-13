import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
type Size = 'hero' | 'topbar';

const Brand = ({ size = 'hero' }: { size: Size }) => {
    const getSize = (size: Size, typography: 'heading' | 'text') => {
        switch (size) {
            case 'hero':
                return typography === 'heading' ? '4xl' : 'large';

            case 'topbar':
                return typography === 'heading' ? '2xl' : 'small';
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                width: 'fit-content',
            }}
        >
            <Heading
                size={getSize(size, 'heading')}
                style={{
                    fontFamily: 'Permanent Marker, cursive',
                }}
            >
                Lecture Voter
            </Heading>
            <div style={{ display: 'flex', whiteSpace: 'pre' }}>
                <Text
                    fontSize={getSize(size, 'text')}
                    style={{
                        fontFamily: 'Permanent Marker, cursive',
                    }}
                >
                    by {''}
                </Text>
                <Text
                    fontSize={getSize(size, 'text')}
                    style={{
                        fontFamily: 'Consolas',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                    }}
                    onClick={() => {
                        window.open('https://www.yakov.dev', '_blank');
                    }}
                >
                    yakov.dev
                </Text>
            </div>
        </div>
    );
};

export default Brand;
