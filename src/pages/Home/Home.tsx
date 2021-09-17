import { Spinner } from '@chakra-ui/react';
import React from 'react';

import { useAppContext } from '@contexts';
import { LectureCard, LecturesFeed } from '@components';
import { IDBLecture } from '@types';

const Home = () => {
    const { lectures, isAppLoading } = useAppContext();
    return (
        <div
            style={{
                padding: 20,
            }}
        >
            {isAppLoading ? (
                <div
                    style={{
                        height: 'calc( 100vh - 140px )',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Spinner size={'xl'} />
                </div>
            ) : (
                <LecturesFeed lectures={lectures} />
            )}
        </div>
    );
};

export default Home;
