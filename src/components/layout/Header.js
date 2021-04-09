import Button from '../shared/Button';
import './Header.css';
import { AuthButton } from '../auth/Auth-button';
import { Link } from 'react-router-dom';

const Header = () => {
	const handleClick = (event) => {
		console.log(event);
	};

	return (
		<header className="header">
			<div className="header-title">Nodepop</div>
			<nav className="header-nav">
				<Button
					variant="primary"
					className="header-button"
					onClick={handleClick}
				>
					Logout
				</Button>
				<Button
					as={Link}
					to="/advert"
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
