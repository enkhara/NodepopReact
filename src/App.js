import React from 'react';
import T from 'prop-types';

import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';
import './App.css';
import LoginPage from './components/auth/LoginPage/LoginPage';
import AdvertsPage from './components/Adverts/AdvertsPage/AdvertsPage';
import NewAdvertPage from './components/Adverts/NewAdvertsPage/NewAdvertPage';
import AdvertPage from './components/Adverts/AdvertPage/AdvertPage';
import NotFound from './components/NotFoundPage/NotFound';
import { AuthContextProvider } from './components/auth/context';

function App({ isInitiallyLogged }) {
	const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

	const handleLogin = () => setIsLogged(true);

	const handleLogout = () => setIsLogged(false);

	const authValue = {
		isLogged,
		onLogout: handleLogout,
		onLogin: handleLogin,
	};

	return (
		<div className="App">
			<AuthContextProvider value={authValue}>
				<Switch>
					<PrivateRoute path="/advert/new">
						<NewAdvertPage />
					</PrivateRoute>
					<PrivateRoute path="/advert/:id">
						{(routerProps) => <AdvertPage {...routerProps} />}
					</PrivateRoute>
					<Route path="/404" component={NotFound} />
					<Route exact path="/login">
						{({ history, location }) => (
							<LoginPage history={history} location={location} />
						)}
					</Route>
					<PrivateRoute path="/adverts">
						<AdvertsPage />
					</PrivateRoute>
					<Route exact path="/">
						<Redirect to="/adverts" />
					</Route>

					<Route>
						<Redirect to="/404" />
					</Route>
				</Switch>
			</AuthContextProvider>
		</div>
	);
}

App.propTypes = {
	isInitiallyLogged: T.bool.isRequired,
};

export default App;
