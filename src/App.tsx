import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './style.css';
import UrlInput from './components/UrlInput/UrlInput';

function App() {


	return (
		<ChakraProvider resetCSS={true}>
			<div style={{ padding: 20 }}>
                <UrlInput/>
			</div>
		</ChakraProvider>
	);
}

export default App;
