import Button from '../shared/Button';
import './Header.css';

const Header = () => {
	return (
		<header className="header">
			<div className="header-title">Nodepop</div>
			<nav className="header-nav">
				<Button variant="primary" className="header-button">
					Log out
				</Button>
			</nav>
		</header>
	);
};

export default Header;
