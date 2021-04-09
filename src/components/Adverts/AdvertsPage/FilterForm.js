import Button from '../../shared/Button';
import FormField from '../../shared/FormField';
import RadioButton from '../../shared/RadioButton';
import './FilterForm.css';

const FilterForm = () => {
	return (
		<div className="filterForm">
			<FormField className="text-search" type="text" />
			<RadioButton className="sell" label="sell" />
			<RadioButton className="buy" label="buy" />
			<RadioButton className="motor" label="motor" />
			<RadioButton className="work" label="work" />
			<RadioButton className="lifestyle" label="lifestyle" />
			<RadioButton className="mobile" label="mobile" />
			<Button type="submit" variant="primary" className="search-button">
				Search
			</Button>
		</div>
	);
};

export default FilterForm;
