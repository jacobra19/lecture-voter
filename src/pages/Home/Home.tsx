import { Button } from '@chakra-ui/button';
import { UrlInput } from '@components';
import React from 'react';
import { useAppContext } from '../../contexts/AppContext/AppContext';
import LectureCard from '../../components/LectureCard/LectureCard';
import { IDBLecture } from 'src/types';


const Home = () => {
    const { lectures } = useAppContext() as any;
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
            {lectures.map((lecture: IDBLecture) => (
                <LectureCard key={lecture.documentId} lecture={lecture} />
            ))}
        </div>
    );
};

export default Home;
