import React, { createContext, useState, useEffect } from 'react';
import { UserCredential } from 'firebase/auth';

interface IAuthContext {
    userCredential: UserCredential | null;
    setUserCredential: (user: UserCredential | null) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [userCredential, setUserCredential] = useState<UserCredential | null>(
        null,
    );

    useEffect(() => {
        // console.log('AuthProvider useEffect userCredential', userCredential);
    }, [userCredential]);

    const value = {
        userCredential,
        setUserCredential,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
