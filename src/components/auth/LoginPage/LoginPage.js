import LoginForm from './LoginForm';
import React from 'react';
import './LoginPage.css';

function LoginPage() {
	return (
		<div className="loginPage">
			<h1 className="loginPage-tittle">Log in to Nodepop</h1>
			<LoginForm />
		</div>
	);
}

export default LoginPage;
