import Button from '../shared/Button';
import './Header.css';
import { AuthButton } from '../auth/Auth-button';

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
					variant="primary"
					className="header-button"
					onClick={handleClick}
				>
					New advert
				</Button>
			</nav>
		</header>
	);
};

export default Header;
