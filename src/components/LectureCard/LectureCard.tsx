import React from 'react';
import { Tooltip, Text, Button } from '@chakra-ui/react';
import dayjs from 'dayjs';
import relateiveTime from 'dayjs/plugin/relativeTime';
import { RiDeleteBin2Fill } from 'react-icons/ri';

import { YoutubeEmbed, VoteButton, DeleteButton } from '@components';
import { IDBLecture } from '@types';
import { useAppContext } from '@contexts';

dayjs.extend(relateiveTime);

const LectureCard = (props: { lecture: IDBLecture }) => {
    const { videoId, addedBy, addedOn, votes, documentId } = props.lecture;
    const { user } = useAppContext();
    const onVoteChange = () => {};

    const renderVotes = (votes: string[]) => {
        if (!votes.length) return null;
        return (
            <div style={{ padding: 5 }}>
                {votes.map((vote, index) => {
                    return (
                        <Text fontSize='sm' key={vote}>
                            {vote}
                        </Text>
                    );
                })}
            </div>
        );
    };

    return (
        <div
            style={{
                display: 'flex',
                border: '1px solid lightgrey',
                borderRadius: 10,
                width: 800,
            }}
        >
            <YoutubeEmbed videoId={videoId} />
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '140px 1fr',
                    padding: 20,
                    flex: 1,
                    gridTemplateRows: `30px 30px 30px 1fr`,
                }}
            >
                <Text fontWeight={'semibold'}>Added By:</Text>
                <Text>{addedBy.displayName}</Text>

                <Text fontWeight={'semibold'}>Date Added:</Text>
                <Text>
                    {dayjs(addedOn).format('DD/MM/YY')} ({dayjs(addedOn).fromNow()})
                </Text>

                <Text fontWeight={'semibold'}>Voters ({votes.length}):</Text>
                <Tooltip label={renderVotes(votes)}>
                    <Text
                        style={{
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                        }}
                    >
                        {votes.join(', ')}
                    </Text>
                </Tooltip>
                <div style={{ gridColumn: `1 / 3`, alignSelf: 'self-end', display: 'flex', gap: 10 }}>
                    {addedBy?.email === user?.email && <DeleteButton documentId={documentId} style={{ flex: 1 }} />}
                    <VoteButton documentId={documentId} onChange={onVoteChange} votes={votes} style={{ flex: 1 }} />
                </div>
            </div>
        </div>
    );
};

export default LectureCard;
