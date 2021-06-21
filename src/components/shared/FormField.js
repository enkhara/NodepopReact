import React from 'react';
import T from 'prop-types';
import './FormField.css';

function FormField({ className, label, autofocus, ...props }) {
	const inputRef = React.useRef(null);

	React.useEffect(() => {
		if (autofocus) {
			inputRef.current.focus();
		}
	}, [autofocus]);
	return (
		<div className={className}>
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

FormField.propTypes = {
	className: T.string,
	label: T.string.isRequired,
	autofocus: T.bool,
};

export default FormField;
