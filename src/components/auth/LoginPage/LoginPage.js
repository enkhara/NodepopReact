import LoginForm from './LoginForm';
import React from 'react';
import './LoginPage.css';
import { login } from '../../../api/auth';
import { useAuthContext } from '../context';
import { useHistory, useLocation } from 'react-router';

function LoginPage() {
	const [error, setError] = React.useState(null);
	const isLogged = React.useRef(false);
	console.log('is logged ref', isLogged);
	const firstTime = React.useRef(true);

	const history = useHistory();
	const location = useLocation();
	const { onLogin } = useAuthContext();
	console.log('onlogin', onLogin);
	//TODO: Solucionar la redirección desde el login mirar los parametros de cuando ejecutar el useEffect()
	React.useEffect(() => {
		if (isLogged.current) {
			onLogin();
			const { from } = location.state || { from: { pathname: '/' } };

			history.replace('from', from);
		}
	});

	React.useEffect(() => {
		if (firstTime) {
			// Do things only the first time
			firstTime.current = false;
		}
	});

	const handleSubmit = async (credentials) => {
		try {
			await login(credentials);
			isLogged.current = true;
		} catch (error) {
			setError(error);
		}
	};

	return (
		<div className="loginPage">
			<h1 className="loginPage-tittle">Log in to Nodepop</h1>
			<LoginForm onSubmit={handleSubmit} />
			{error && <div className="loginPage-error">{error.message}</div>}
		</div>
	);
}

export default LoginPage;
