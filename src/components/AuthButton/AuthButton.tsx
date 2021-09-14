import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

import { signInWithGithub, signOut, auth } from '@lib';
import { useAppContext } from '@contexts';

const AuthButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { user, setUser } = useAppContext();
    const handleSignIn = async () => {
        setIsLoading(true);
        try {
            const user = await signInWithGithub();
            setUser(user || null);
        } catch (error) {}
        setIsLoading(false);
    };

    const handleSignOut = async () => {
        setIsLoading(true);
        await signOut(auth);
        setUser(null);
        setIsLoading(false);
    };
    const signOutLabel = `Sign Out (${user?.email || ''})`;
    const signInLabel = 'Sign In with GitHub';
    return (
        <div>
            {user ? (
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
