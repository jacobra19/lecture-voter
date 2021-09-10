import { Text } from '@chakra-ui/layout';
import React from 'react';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';

import dayjs from 'dayjs';
import relateiveTime from 'dayjs/plugin/relativeTime';
import Voter from '../Voter/Voter';
import { Tooltip } from '@chakra-ui/tooltip';
dayjs.extend(relateiveTime);
import { IDBLecture } from '../../types';

const LectureCard = (props: { lecture: IDBLecture }) => {
    const { videoId, addedBy, addedOn, votes, documentId } = props.lecture;

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
                    {dayjs(addedOn).format('DD/MM/YY')} (
                    {dayjs(addedOn).fromNow()})
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

                <Voter
                    documentId={documentId}
                    onChange={onVoteChange}
                    votes={votes}
                    style={{ gridColumn: `1 / 3`, alignSelf: 'self-end' }}
                />
            </div>
        </div>
    );
};

export default LectureCard;
