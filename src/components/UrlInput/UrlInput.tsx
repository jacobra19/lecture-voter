import React, { useState } from 'react';
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';

const UrlInput = () => {
	const [urlAdress, setUrlAdress] = useState<string>('');
	return (
		<InputGroup size='md'>
			<Input
				onChange={(event) => {
					console.log(`event.target.value`, event.target.value);
					setUrlAdress(event.target.value);
				}}
				placeholder={'youtube url'}
				colorScheme={'twitter'}
			/>
			<InputRightElement width='4.5rem'>
				<Button
					onClick={() => {}}
					style={{
						height: 38,
						marginRight: 1,
					}}
				>
					suggest
				</Button>
			</InputRightElement>
		</InputGroup>
	);
};

export default UrlInput;
