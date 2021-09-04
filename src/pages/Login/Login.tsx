import { Brand } from '@components';
import React from 'react';
import { Button } from '@chakra-ui/react';
import { signInWithGithub } from '../../lib/firebase';
const Login = () => {
    return (
        <div
            style={{
                width: '100%',
                height: 'calc( 100vh - 40px )',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 40,
            }}
        >
            <Brand />
            <Button
                onClick={() => {
                    signInWithGithub()
                        .then((res) => {
                            console.log(`res`, res);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }}
            >
                Login
            </Button>
        </div>
    );
};

export default Login;
