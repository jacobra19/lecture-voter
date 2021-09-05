import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = React.useState(null);

    const login = (user: any) => {
        setUser(user);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
