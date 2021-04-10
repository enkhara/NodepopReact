import Button from '../shared/Button';
import './Header.css';
import AuthButton from '../auth/Auth-button';
import { Link } from 'react-router-dom';

const Header = ({ className, ...props }) => {
	return (
		<header className="header" {...props}>
			<Link to="/adverts">
				<div className="header-title">Nodepop</div>
			</Link>
			<nav className="header-nav">
				<AuthButton className="header-button" />

				<Button
					as={Link}
					to="/advert/new"
					variant="primary"
					className="header-button"
				>
					New advert
				</Button>
			</nav>
		</header>
	);
};

export default Header;
