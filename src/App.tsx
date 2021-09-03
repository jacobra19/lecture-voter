import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './style.css';
import UrlInput from './components/UrlInput/UrlInput';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
// import Protected from './pages/Protected/Protected';


function App() {
	return (
		<ChakraProvider resetCSS={true}>
			<div style={{ padding: 20 }}>
				<Router>
					<Route exact path='/' component={Login} />
				</Router>
			</div>
		</ChakraProvider>
	);
}

export default App;
