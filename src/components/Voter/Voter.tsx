import React, { useState } from 'react';
import { Button } from '@chakra-ui/button';
import { FaRegThumbsUp } from 'react-icons/fa';
import { useAppContext } from '../../contexts/AppContext/AppContext';

interface IVoter {
    votes: string[];
    style?: React.CSSProperties;
}

const Voter = ({ votes, style = {} }: IVoter) => {
    const [isLoading, setIsLoading] = useState(false);
    const { userCredential } = useAppContext() as any;
    if(!userCredential) return null;
    const hasVoted = votes.includes(userCredential?.email);
    const handleVote = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
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
