import { Brand } from '@components';
import React from 'react';

const Login = () => {
    return (
        <div
            style={{
                width: '100%',
                height: 'calc( 100vh - 40px )',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Brand/>
        </div>
    );
};

export default Login;
