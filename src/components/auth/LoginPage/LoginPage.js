import LoginForm from './LoginForm';
import React from 'react';
import './LoginPage.css';
import { login } from '../../../api/auth';

function LoginPage({ onLogin }) {
	const [error, setError] = React.useState(null);

	const handleSubmit = (credentials) => {
		console.log(credentials);
		login(credentials)
			.then(() => onLogin())
			.catch((error) => {
				setError(error);
			});
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
