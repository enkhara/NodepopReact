import React from 'react';
import './App.css';
import LoginPage from './components/auth/LoginPage/LoginPage';
import AdvertsPage from './components/Adverts/AdvertsPage/AdvertsPage';

function App(isInitiallyLogged) {
	const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

	const handleLogin = () => setIsLogged(true);
	console.log('islogged', isLogged);

	const hadleLogout = () => setIsLogged(false);

	return (
		<div className="App">
			{isLogged ? <AdvertsPage /> : <LoginPage onLogin={handleLogin} />}
		</div>
	);
}

export default App;
