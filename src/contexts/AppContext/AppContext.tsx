import React, { createContext, useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { IDBLecture } from '@types';

export type AppContextType = {
    isAppLoading: boolean;
    setIsAppLoading: (isAppLoading: boolean) => void;
    user: User | null;
    setUser: (user: User | null) => void;
    lectures: IDBLecture[];
    setLectures: (lectures: IDBLecture[]) => void;
};

const AppContext = createContext<AppContextType>({
    isAppLoading: true,
    setIsAppLoading: () => {},
    user: null,
    setUser: () => {},
    lectures: [],
    setLectures: () => {},
});

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAppLoading, setIsAppLoading] = useState(true);
    const [user, setUser] = useState<User | null>(
        null,
    );
    const [lectures, setLectures] = useState<IDBLecture[]>([]);

    return (
        <AppContext.Provider
            value={{
                isAppLoading,
                setIsAppLoading,
                user,
                setUser,
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
