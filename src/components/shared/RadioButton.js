import './RadioButton.css';

const RadioButton = ({ className, label, ...props }) => {
	return (
		<div className={className}>
			<label className="container-label">
				<span>{label}</span>
				<input className="radiobutton-input" type="radio" {...props} />
				<span className="checkMark-radio" />
			</label>
		</div>
	);
};

export default RadioButton;
