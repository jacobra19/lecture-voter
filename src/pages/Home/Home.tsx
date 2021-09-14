import { Spinner } from '@chakra-ui/react';
import React from 'react';

import { useAppContext } from '@contexts';
import { LectureCard } from '@components';
import { IDBLecture } from '@types';

const Home = () => {
    const { lectures, isAppLoading } = useAppContext();
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 20,
                padding: 20,
            }}
        >
            {isAppLoading ? (
                <div
                    style={{
                        height: 'calc( 100vw - 140px )',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Spinner size={'xl'} />
                </div>
            ) : (
                lectures.map((lecture: IDBLecture) => (
                    <LectureCard key={lecture.documentId} lecture={lecture} />
                ))
            )}
        </div>
    );
};

export default Home;
