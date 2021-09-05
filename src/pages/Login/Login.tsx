import { Brand } from '@components';
import React from 'react';
import { Button } from '@chakra-ui/react';
import {
    signInWithGithub,
    gitHubProvider,
    signOut,
    auth,
} from '../../lib/firebase';
import useAuth from '../../hooks/useAuth/useAuth';
import { deleteUser } from 'firebase/auth';

const Login = () => {
    console.log('gitHubProvider :>> ', gitHubProvider);
    const { userCredential, setUserCredential } = useAuth();
    console.log(`userCredential`, userCredential);

    const handleSignIn = async () => {
        const userCredential = await signInWithGithub();
        console.log(`userCredential`, userCredential);
        setUserCredential(userCredential);
    };

    const handleSignOut = async () => {
        await deleteUser(userCredential.user);
        setUserCredential(null);
    };

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
            <div>
                <Button onClick={handleSignIn}>Login</Button>
                <Button onClick={handleSignOut}>Logout</Button>
            </div>
        </div>
    );
};

export default Login;
