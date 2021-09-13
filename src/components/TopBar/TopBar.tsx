import React, { useState } from 'react';
import { Skeleton } from '@chakra-ui/react';

import { Brand, AuthButton, AddLectureButton } from '@components';
import { useAppContext } from '@contexts';

const TopBar = () => {
    const { isAppLoading } = useAppContext() as any;
    return (
        <div
            style={{
                width: '100%',
                // backgroundColor: 'yellow',
                display: 'flex',
                padding: '16px',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #ccc',
            }}
        >
            <Skeleton isLoaded={!isAppLoading}>
                <Brand size={'topbar'} />
            </Skeleton>
            <Skeleton isLoaded={!isAppLoading}>
                <div style={{ display: 'flex', gap: 20 }}>
                    <AddLectureButton />
                    <AuthButton />
                </div>
            </Skeleton>
        </div>
    );
};

export default TopBar;
