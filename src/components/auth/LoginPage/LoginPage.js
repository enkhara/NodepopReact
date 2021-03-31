import LoginForm from './LoginForm';
import React from 'react';
import './LoginPage.css';
import { login } from '../../../api/auth';

function LoginPage({ onLogin }) {
	const handleSubmit = (credentials) => {
		login(credentials).then(() => onLogin());
	};

	return (
		<div className="loginPage">
			<h1 className="loginPage-tittle">Log in to Nodepop</h1>
			<LoginForm onSubmit={handleSubmit} />
		</div>
	);
}

export default LoginPage;
