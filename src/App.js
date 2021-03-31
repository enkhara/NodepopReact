import React from 'react';
import './App.css';
import LoginPage from './components/auth/LoginPage/LoginPage';
import AdvertsPage from './components/Adverts/AdvertsPage';

function App() {
	return (
		<div className="App">
			{/* <AdvertsPage /> */}
			<LoginPage />
		</div>
	);
}

export default App;
