import React, { createContext, useState, useEffect } from 'react';
import { UserCredential } from 'firebase/auth';
import { IDBLecture } from 'src/types';

export type AppContextType = {
    isAppLoading: boolean;
    setIsAppLoading: (isAppLoading: boolean) => void;
    userCredential: UserCredential | null;
    setUserCredential: (user: UserCredential | null) => void;
    lectures: IDBLecture[];
    setLectures: (lectures: IDBLecture[]) => void;
};

const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAppLoading, setIsAppLoading] = useState(true);
    const [userCredential, setUserCredential] = useState<UserCredential | null>(
        null,
    );
    const [lectures, setLectures] = useState<IDBLecture[]>([]);

    return (
        <AppContext.Provider
            value={{
                isAppLoading,
                setIsAppLoading,
                userCredential,
                setUserCredential,
                lectures,
                setLectures,
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
