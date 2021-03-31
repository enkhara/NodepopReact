import React from 'react';
import './App.css';
import LoginPage from './components/auth/LoginPage/LoginPage';
import AdvertsPage from './components/Adverts/AdvertsPage';

function App() {
	const [isLogged, setIsLogged] = React.useState(false);

	const handleLogin = () => setIsLogged(true);

	return (
		<div className="App">
			{/* <AdvertsPage /> */}
			<LoginPage onLogin={handleLogin} />
		</div>
	);
}

export default App;
