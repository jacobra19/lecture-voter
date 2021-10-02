import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { useAppContext } from '@contexts';
import { updateVote, getLectures } from '@lib';

interface IVoter {
    votes: string[];
    style?: React.CSSProperties;
    onChange: () => void;
    documentId: string;
}

const VoteButton = ({ votes, style = {}, onChange, documentId }: IVoter) => {
    const [isLoading, setIsLoading] = useState(false);
    const { user, setLectures } = useAppContext();
    if (!user) return null;
    const { email } = user;
    const hasVoted = votes.includes(email || '');
    const handleVote = async () => {
        setIsLoading(true);
        await updateVote({ documentId });
        const lectures = await getLectures();
        setLectures(lectures);
        setIsLoading(false);
    };
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                ...style,
            }}
        >
            <Button
                leftIcon={<FaRegThumbsUp />}
                isLoading={isLoading}
                onClick={handleVote}
                size={'xs'}
                colorScheme={hasVoted ? 'green' : 'blue'}
            >
                {hasVoted ? 'UNVOTE' : 'VOTE'}
            </Button>
        </div>
    );
};

export default VoteButton;
