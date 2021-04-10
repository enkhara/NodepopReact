import Button from '../shared/Button';

const WindowConfirm = ({ className, onClick }) => {
	const handleClick = (event) => {
		console.log('hello submit', event.target.value);
		//onClick(event.target.value);
	};

	return (
		<div className={className} onClick={handleClick}>
			<div className="message">
				<span>Are your sure you want to delete this advert</span>
				<Button className="abortedButton" value="false" type="button">
					No
				</Button>
				<Button className="deleteButton" value="true" type="button">
					Delete
				</Button>
			</div>
		</div>
	);
};

export default WindowConfirm;
