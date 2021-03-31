import React from 'react';
import './LoginForm.css';
import FormField from '../../shared/FormField';
import Button from '../../shared/Button';

function LoginForm() {
	const [credentials, setCredentials] = React.useState({
		username: '',
		password: '',
	});

	const handleChange = (event) => {
		setCredentials((oldCredentials) => ({
			...oldCredentials,
			[event.target.name]: event.target.value,
		}));
	};

	return (
		<form className="loginForm">
			<FormField
				name="username"
				type="text"
				label="Email"
				className="loginForm-field"
				value={credentials.username}
				onChange={handleChange}
			/>
			<FormField
				name="password"
				type="password"
				label="password"
				className="loginForm-field"
				value={credentials.password}
				onChange={handleChange}
			/>
			<Button
				type="submit"
				variant="primary"
				className="loginForm-submit"
				//disabled={isLoading || !username || !password}
			>
				Log in
			</Button>
		</form>
	);
}

export default LoginForm;
