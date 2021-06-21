import React from 'react';
import T from 'prop-types';

import './Checkbox.css';

function Checkbox({ className, label, ...props }) {
	return (
		<div className={className}>
			<label className="checkbox-label">
				<span className="checkbox-span">{label}</span>
				<input type="checkbox" className="checkbox-input" {...props} />
				<span className="checkMark"></span>
			</label>
		</div>
	);
}

Checkbox.propTypes = {
	className: T.string,
	label: T.string.isRequired,
};

export default Checkbox;
