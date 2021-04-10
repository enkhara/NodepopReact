import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuthContext } from '../auth/context';

const PrivateRoute = (props) => {
	const { isLogged } = useAuthContext();
	console.log(isLogged ? 'hole' : 'adios');
	console.log(isLogged);
	return isLogged ? (
		<Route {...props} />
	) : (
		<Route>
			{({ location }) => (
				<Redirect to={{ pathname: '/login', state: { from: location } }} />
			)}
		</Route>
	);
};

export default PrivateRoute;
