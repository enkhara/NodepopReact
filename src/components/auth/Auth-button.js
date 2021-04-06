import Button from '../shared/Button';
import { logout } from '../../api/auth';
import { AuthContextConsumer } from './context';
import { Link } from 'react-router-dom';

export const AuthButton = ({ className, isLogged, onLogout }) => {
	const handleLogoutClick = () => {
		logout().then(onLogout);
	};

	const props = isLogged
		? { onClick: handleLogoutClick, children: 'Log out' }
		: {
				as: Link,
				to: '/login',
				children: 'Log in',
		  };

	return <Button className={className} {...props} />;
};

const ConnectedAuthButton = (props) => {
	return (
		<AuthContextConsumer>
			{(value) => {
				return (
					<AuthButton
						isLogged={value.isLogged}
						onLogout={value.onLogout}
						{...props}
					/>
				);
			}}
		</AuthContextConsumer>
	);
};

export default ConnectedAuthButton;
