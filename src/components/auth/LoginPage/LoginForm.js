import React from 'react';
import './LoginForm.css';
import FormField from '../../shared/FormField';
import Button from '../../shared/Button';

function LoginForm() {
	return (
		<form className="loginForm">
			<FormField
				name="username"
				type="text"
				label="Email"
				className="loginForm-field"
			/>
			<FormField
				name="password"
				type="password"
				label="password"
				className="loginForm-field"
			/>
			<Button
				type="submit"
				//variant="primary"
				className="loginForm-submit"
				// disabled={isLoading || !username || !password}
			>
				Log in
			</Button>
		</form>
	);
}

export default LoginForm;
