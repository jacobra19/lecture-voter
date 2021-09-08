import { Button } from '@chakra-ui/button';
import { UrlInput } from '@components';
import React from 'react';
import LectureCard from '../../components/LectureCard/LectureCard';

const mockLectures = [
    {
        videoId: 'RZk39K5T-5M',
        addedBy: {
            email: 'jacobra19@gmail.com',
            displayName: 'Yakov Rakhamimov',
            screenName: 'jacobra19',
        },
        addedOn: '2021-09-08T22:19:06+03:00',
        votes: ['brady@gmail.com'],
    },
    {
        videoId: 'wv7pvH1O5Ho',
        addedBy: {
            email: 'jacobra19@gmail.com',
            displayName: 'Yakov Rakhamimov',
            screenName: 'jacobra19',
        },
        addedOn: '2021-04-08T22:19:06+03:00',
        votes: [
            'brady@gmail.com',
            'carter@gmail.com',
            'jacobra19@gmail.com',
            'nimni@gmail.com',
            'giggs@gmail.com',
        ],
    },
    {
        videoId: 'jsDgrKdczAE',
        addedBy: {
            email: 'jacobra19@gmail.com',
            displayName: 'Yakov Rakhamimov',
            screenName: 'jacobra19',
        },
        addedOn: '2021-09-01T22:19:06+03:00',
        votes: [],
    },
];

const Home = () => {
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
            {mockLectures.map((lecture) => (
                <LectureCard lecture={lecture} />
            ))}
        </div>
    );
};

export default Home;
