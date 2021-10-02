import React from 'react';

import { LectureCard } from '@components';
import { IDBLecture } from '@types';

const LecturesFeed = ({ lectures }: { lectures: IDBLecture[] }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 20,
            }}
        >
            {lectures.map((lecture: IDBLecture) => (
                <LectureCard key={lecture.documentId} lecture={lecture} />
            ))}
        </div>
    );
};

export default LecturesFeed;
