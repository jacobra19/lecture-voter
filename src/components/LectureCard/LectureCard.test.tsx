import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import LectureCard from './LectureCard';
import { ChakraProvider } from '@chakra-ui/react';
import { AppContextProvider } from '@contexts';
import { IDBLecture } from '@types';

import user from '../../../mock-user.env.json';

const lectureMock: IDBLecture = {
    votesCount: 4,
    addedOn: '2021-09-12T01:31:14+03:00',
    votes: ['jacobra19@gmail.com', 'sdfs@fdsfds.com', 'sdf3fsd@333.com', 'sdfdf@g.com'],
    videoId: 'ejNF1Vtupgs',
    addedBy: {
        displayName: 'Yakov Rakhamimov',
        email: 'jacobra19@gmail.com',
    },
    documentId: '001',
};
const RenderedLectureCard = ({ user = null }: { user?: object | null }) => {
    return (
        <ChakraProvider resetCSS={true}>
            <AppContextProvider
                overrideValue={{
                    user: user || null,
                }}
            >
                <LectureCard lecture={lectureMock} />
            </AppContextProvider>
        </ChakraProvider>
    );
};

describe('LectureCard', () => {
    it('should render added by', () => {
        const { getByText } = render(<RenderedLectureCard />);
        const addedByField = getByText('Added By:');
        const addedByValue = getByText('Yakov Rakhamimov');
        expect(addedByField).toHaveTextContent('Added By:');
        expect(addedByValue).toHaveTextContent('Yakov Rakhamimov');
    });

    it('should render added on', () => {
        const { getByText } = render(<RenderedLectureCard />);
        const addedByField = getByText('Date Added:');
        const addedByValue = getByText('12/09/21');
        expect(addedByField).toHaveTextContent('Date Added:');
        expect(addedByValue).toHaveTextContent('12/09/21');
    });

    it('should render votes count', () => {
        const { getByText } = render(<RenderedLectureCard />);
        // screen.debug();
        const votes = lectureMock.votes;
        const votesCountField = getByText(/Voters/i);
        const votesCountValue = getByText(votes.join(', '));
        expect(votesCountField).toHaveTextContent(/Voters/i);
        expect(votesCountValue).toHaveTextContent(votes.join(', '));
    });
});
