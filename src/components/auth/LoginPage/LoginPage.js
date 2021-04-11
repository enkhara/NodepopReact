import LoginForm from './LoginForm';
import React from 'react';
import './LoginPage.css';
import { login } from '../../../api/auth';
import { useAuthContext } from '../context';
import { useHistory, useLocation } from 'react-router';

function LoginPage() {
	const [error, setError] = React.useState(null);
	const isLogged = React.useRef(false);
	const [stateLogin, setStateLogin] = React.useState(false);
	const firstTime = React.useRef(true);

	React.useEffect(() => {
		if (firstTime) {
			firstTime.current = false;
		}
	});

	const history = useHistory();
	const location = useLocation();
	const { onLogin } = useAuthContext();

	//TODO: Solucionar la redirección desde el login mirar los parametros de cuando ejecutar el useEffect()
	React.useEffect(() => {
		if (isLogged.current) {
			onLogin();
			const { from } = location.state || { from: { pathname: '/' } };

			history.replace(from);
		}
	});

	const handleSubmit = async (credentials) => {
		setError(null);
		setStateLogin(true);
		try {
			await login(credentials);
			isLogged.current = true;
		} catch (error) {
			setError(error);
		} finally {
			setStateLogin(false);
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
