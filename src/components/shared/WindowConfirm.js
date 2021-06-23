import Button from '../shared/Button';
import './WindowConfirm.css';

const WindowConfirm = ({ onConfirm, onCancel }) => {
	function handleCancel() {
		onCancel();
	}
	function handleDelete() {
		onConfirm();
	}

	return (
		<div className="windowConfirm">
			<span className="message">
				Are your sure you want to delete this advert
			</span>
			<Button
				className="abortedButton"
				value="false"
				type="button"
				onClick={handleCancel}
			>
				No
			</Button>
			<Button
				className="deleteButton"
				value="true"
				type="button"
				onClick={handleDelete}
			>
				Delete
			</Button>
		</div>
	);
};

export default WindowConfirm;
