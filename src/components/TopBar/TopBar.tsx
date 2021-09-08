import React, { useState } from 'react';
import Brand from '../Brand/Brand';
import AuthButton from '../AuthButton/AuthButton';

const TopBar = () => {
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
            <Brand size={'topbar'} />
            <AuthButton />
        </div>
    );
};

export default TopBar;
