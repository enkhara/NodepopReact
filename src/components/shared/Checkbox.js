import React from 'react';
import './Checkbox.css';

function Checkbox({ label, ...props }) {
	return (
		<div className="checkbox">
			<label className="checkbox-label">
				<span>{label}</span>
				<input type="checkbox" className="checkbox-input" {...props} />
			</label>
		</div>
	);
}

export default Checkbox;
