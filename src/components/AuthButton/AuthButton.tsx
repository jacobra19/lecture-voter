import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

import { signInWithGithub } from '../../lib/firebase';
import { deleteUser } from 'firebase/auth';
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
        await deleteUser(userCredential.user);
        setUserCredential(null);
        setIsLoading(false);
    };
    console.log(`userCredential`, userCredential);
    return (
        <div>
            {userCredential ? (
                <Button onClick={handleSignOut} isLoading={isLoading}>
                    Sign Out ({userCredential?.email}
                    {/* /@
                    {userCredential?._tokenResponse.screenName}) */}
                </Button>
            ) : (
                <Button
                    style={{ display: 'flex', gap: 10 }}
                    onClick={handleSignIn}
                    isLoading={isLoading}
                >
                    <FaGithub />
                    Sign In with GitHub
                </Button>
            )}
        </div>
    );
};

export default AuthButton;
