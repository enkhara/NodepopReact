import React from 'react';
import './FormField.css';

function FormField({ className, label, autofocus, ...props }) {
	const inputRef = React.useRef(null);

	React.useEffect(() => {
		if (autofocus) {
			inputRef.current.focus();
		}
	}, [autofocus]);
	return (
		<div className="formField">
			<label className="formField-label">
				<span>{label}</span>
				<input
					ref={inputRef}
					className="formField-input"
					autoComplete="off"
					{...props}
				/>
			</label>
		</div>
	);
}

export default FormField;
