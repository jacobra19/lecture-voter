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

const Voter = ({ votes, style = {}, onChange, documentId }: IVoter) => {
    const [isLoading, setIsLoading] = useState(false);
    const { userCredential, setLectures } = useAppContext() as any;
    if (!userCredential) return null;
    const hasVoted =
        votes.includes(userCredential?.email) ||
        votes.includes(userCredential?.user?.email);
    const handleVote = async () => {
        setIsLoading(true);
        await updateVote({ documentId, isVote: !hasVoted });
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
            >
                {hasVoted ? 'UNVOTE' : 'VOTE'}
            </Button>
        </div>
    );
};

export default Voter;
