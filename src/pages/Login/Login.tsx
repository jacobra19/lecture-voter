import React from 'react';
import { HStack, PinInput, PinInputField } from '@chakra-ui/react';
const Login = () => {
    return (
        <div
            style={{
                width: '100%',
                height: 'calc( 100vh - 40px )',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <HStack>
                <PinInput
                    autoFocus
                    otp
                    onChange={(value) => {
                        console.log(`onChange value`, value);
                    }}
                    onComplete={(value) => {
                        console.log(`onComplete value`, value);
                        // TODO: handle redirect to home page
                    }}
                >
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </HStack>
        </div>
    );
};

export default Login;
