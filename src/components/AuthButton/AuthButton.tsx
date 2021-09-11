import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

import { signInWithGithub, signOut, auth } from '../../lib/firebase';
import { useAppContext } from '../../contexts/AppContext/AppContext';

const AuthButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { userCredential, setUserCredential } = useAppContext() as any;
    const handleSignIn = async () => {
        setIsLoading(true);
        const userCredential = await signInWithGithub();
        setUserCredential(userCredential);
        setIsLoading(false);
    };

    const handleSignOut = async () => {
        setIsLoading(true);
        await signOut(auth);
        setUserCredential(null);
        setIsLoading(false);
    };
    const signOutLabel = `Sign Out (${
        userCredential?.email || userCredential?.user?.email || ''
    })`;
    const signInLabel = 'Sign In with GitHub';
    return (
        <div>
            {userCredential ? (
                <Button onClick={handleSignOut} isLoading={isLoading}>
                    {signOutLabel}
                </Button>
            ) : (
                <Button
                    style={{ display: 'flex', gap: 10 }}
                    onClick={handleSignIn}
                    isLoading={isLoading}
                >
                    <FaGithub />
                    {signInLabel}
                </Button>
            )}
        </div>
    );
};

export default AuthButton;
