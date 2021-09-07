import { UrlInput } from '@components';
import React from 'react';
import useAuth from '../../hooks/useAuth/useAuth';

const Home = () => {
    const { user } = useAuth() as any;
    return (
        <div>
            <h1>Home</h1>
            <UrlInput />
        </div>
    );
};

export default Home;
