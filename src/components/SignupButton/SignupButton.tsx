import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/button';

const SignupButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button
            colorScheme='pink'
            variant='solid'
            onClick={() =>
                loginWithRedirect({
                    screen_hint: 'signup',
                })
            }
        >
            Sign Up
        </Button>
    );
};

export default SignupButton;
