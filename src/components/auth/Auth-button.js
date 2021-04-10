import T from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../components/shared/Button';
import { logout } from '../../api/auth';
import { AuthContextConsumer } from '../auth/context';

const AuthButton = ({ className, isLogged, onLogout }) => {
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

	return <Button className={className} variant="primary" {...props} />;
};

AuthButton.propTypes = {
	className: T.string,
	isLogged: T.bool,
	onLogout: T.func.isRequired,
};

AuthButton.defaultProps = {
	isLogged: false,
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
