import React, { createContext, useState, useEffect } from 'react';
import { UserCredential } from 'firebase/auth';

type ContextType = {
    isAppLoading: boolean;
    setIsAppLoading: (isAppLoading: boolean) => void;
    userCredential: UserCredential | null;
    setUserCredential: (user: UserCredential | null) => void;
};

const AppContext = createContext<ContextType | null>(null);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAppLoading, setIsAppLoading] = useState(true);
    const [userCredential, setUserCredential] = useState<UserCredential | null>(
        null,
    );

    return (
        <AppContext.Provider
            value={{
                isAppLoading,
                setIsAppLoading,
                userCredential,
                setUserCredential,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    const context = React.useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within a AppProvider');
    }
    return context;
};

export { AppContextProvider, useAppContext };
