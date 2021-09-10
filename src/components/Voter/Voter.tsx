import React, { useState } from 'react';
import { Button } from '@chakra-ui/button';
import { FaRegThumbsUp } from 'react-icons/fa';
import { useAppContext } from '../../contexts/AppContext/AppContext';
import { updateVote, getLectures } from '../../lib/firebase';
interface IVoter {
    votes: string[];
    style?: React.CSSProperties;
    onChange: () => void;
    documentId: string;
    email: string;
}

const Voter = ({ votes, style = {}, onChange, documentId, email }: IVoter) => {
    const [isLoading, setIsLoading] = useState(false);
    const { userCredential, setLectures } = useAppContext() as any;
    if (!userCredential) return null;
    const hasVoted = votes.includes(userCredential?.email);
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
