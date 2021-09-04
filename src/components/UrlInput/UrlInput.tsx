import React, { useState } from 'react';
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';

const UrlInput = () => {
    const [urlAdress, setUrlAdress] = useState<string>('');
    const [urls, setUrls] = useState<string[]>([]);
    return (
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <Input
                value={urlAdress}
                onChange={(event) => {
                    console.log(`event.target.value`, event.target.value);
                    setUrlAdress(event.target.value);
                }}
                placeholder={'youtube url'}
                colorScheme={'messenger'}
            />
            <Button
                variant={'solid'}
                colorScheme={'messenger'}
                onClick={() => {
                    setUrls([...urls, urlAdress]);
                    setUrlAdress('');
                }}
                style={{
                    padding: '0px 20px',
                }}
                width={'fit-content'}
            >
                Add Suggestion
            </Button>
        </div>
    );
};

export default UrlInput;
