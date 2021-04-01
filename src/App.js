import React from 'react';
import './App.css';
import LoginPage from './components/auth/LoginPage/LoginPage';
import AdvertsPage from './components/Adverts/AdvertsPage/AdvertsPage';

function App() {
	const [isLogged, setIsLogged] = React.useState(false);

	const handleLogin = () => setIsLogged(true);

	return (
		<div className="App">
			{/* <AdvertsPage /> */}
			{isLogged ? <AdvertsPage /> : <LoginPage onLogin={handleLogin} />}
		</div>
	);
}

export default App;
