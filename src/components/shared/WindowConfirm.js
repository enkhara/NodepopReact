import Button from '../shared/Button';
import './WindowConfirm.css';

const WindowConfirm = ({ onConfirm, onCancel }) => {
	return (
		<div className="windowConfirm">
			<span className="message">
				Are your sure you want to delete this advert
			</span>
			<Button
				className="abortedButton"
				value="false"
				type="button"
				onClick={onCancel}
			>
				No
			</Button>
			<Button
				className="deleteButton"
				value="true"
				type="button"
				onClick={onConfirm}
			>
				Delete
			</Button>
		</div>
	);
};

export default WindowConfirm;
