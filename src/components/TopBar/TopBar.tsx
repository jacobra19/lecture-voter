import React from 'react';
import Brand from '../Brand/Brand';
import { Button } from '@chakra-ui/react';
import {FaGithub} from 'react-icons/fa'

import {
    signInWithGithub,
    gitHubProvider,
    signOut,
    auth,
} from '../../lib/firebase';
import useAuth from '../../hooks/useAuth/useAuth';
import { deleteUser } from 'firebase/auth';

const AuthButton = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    const { userCredential, setUserCredential } = useAuth();
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
        <div>
            {isLoggedIn ? (
                <Button onClick={handleSignOut}>Sign Out  ({userCredential?._tokenResponse.displayName }/@{userCredential?._tokenResponse.screenName })</Button>
            ) : (
                <Button style={{display:'flex', gap:10}} onClick={handleSignIn}><FaGithub/>Sign In with GitHub</Button>
            )}
        </div>
    );
};

const TopBar = () => {
    const { userCredential } = useAuth();
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
            <AuthButton isLoggedIn={userCredential} />
        </div>
    );
};

export default TopBar;
