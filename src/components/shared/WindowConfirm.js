import Button from '../shared/Button';
import './WindowConfirm.css';

const WindowConfirm = ({ onClick }) => {
	const handleClick = (event) => {
		console.log('hello submit', event.target.value);
		onClick(event.target.value);
	};

	return (
		<div className="windowConfirm" onClick={handleClick}>
			<span className="message">
				Are your sure you want to delete this advert
			</span>
			<Button className="abortedButton" value="false" type="button">
				No
			</Button>
			<Button className="deleteButton" value="true" type="button">
				Delete
			</Button>
		</div>
	);
};

export default WindowConfirm;
