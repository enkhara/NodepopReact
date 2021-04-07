import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import LoginPage from './components/auth/LoginPage/LoginPage';
import AdvertsPage from './components/Adverts/AdvertsPage/AdvertsPage';
import NewAdvertPage from './components/Adverts/NewAdvertsPage/NewAdvertPage';
import AdvertPage from './components/Adverts/AdvertPage/AdvertPage';
import NotFound from './components/NotFoundPage/NotFound';

function App(isInitiallyLogged) {
	const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

	const handleLogin = () => setIsLogged(true);
	console.log('islogged', isLogged);

	const handleLogout = () => setIsLogged(false);

	return (
		<div className="App">
			<Switch>
				<Route path="/advert/:advertId" component={AdvertPage}></Route>
				<Route path="/advert" component={NewAdvertPage}></Route>
				<Route path="/404" component={NotFound} />
				<Route path="/" component={LoginPage} />
				<Route>
					<Redirect to="/404" />
				</Route>
				{/* {isLogged ? <AdvertsPage /> : <LoginPage onLogin={handleLogin} />} */}
			</Switch>
		</div>
	);
}

export default App;
