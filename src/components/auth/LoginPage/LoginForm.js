import React from 'react';
import T, { func } from 'prop-types';

import './LoginForm.css';
import FormField from '../../shared/FormField';
import Button from '../../shared/Button';
import Checkbox from '../../shared/Checkbox';

const LoginForm = ({ onSubmit }) => {
	const [credentials, setCredentials] = React.useState({
		email: '',
		password: '',
		remind: false,
	});

	const handleChange = (event) => {
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
		console.log('entramos en handlesubmit de longinForm');
		onSubmit(credentials);
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
			>
				Log in
			</Button>
		</form>
	);
};

LoginForm.propTypes = {
	onSubmit: T.func.isRequired,
};

export default LoginForm;
