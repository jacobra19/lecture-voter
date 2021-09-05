import React, { createContext, useState } from 'react';
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

    return (
        <AuthContext.Provider value={{ userCredential, setUserCredential }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
