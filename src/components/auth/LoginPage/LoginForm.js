import React from 'react';
import './LoginForm.css';
import FormField from '../../shared/FormField';
import Button from '../../shared/Button';
import Checkbox from '../../shared/Checkbox';

function LoginForm({ onSubmit }) {
	const [credentials, setCredentials] = React.useState({
		email: '',
		password: '',
		remind: true,
	});

	console.log(credentials);
	console.log();

	const handleChange = (event) => {
		console.log(event);
		setCredentials((oldCredentials) => ({
			...oldCredentials,
			[event.target.name]:
				event.target.type === 'checkbox'
					? event.target.checked
					: event.target.value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(credentials);
		console.log(credentials);
	};

	return (
		<form className="loginForm" onSubmit={handleSubmit}>
			<FormField
				name="email"
				type="text"
				label="Email"
				className="loginForm-field"
				value={credentials.email}
				onChange={handleChange}
				autofocus={true}
			/>
			<FormField
				name="password"
				type="password"
				label="password"
				className="loginForm-field"
				value={credentials.password}
				onChange={handleChange}
			/>
			<Checkbox
				name="remind"
				label="Remind me"
				className="checkbox-field"
				checked={credentials.remind}
				onChange={handleChange}
			/>
			<Button
				type="submit"
				variant="primary"
				className="loginForm-submit"
				disabled={!credentials.email || !credentials.password}
				//disabled={isLoading || !username || !password}
			>
				Log in
			</Button>
		</form>
	);
}

export default LoginForm;
