import T from 'prop-types';

import Button from '../../shared/Button';
import FormField from '../../shared/FormField';
import Checkbox from '../../shared/Checkbox';
import TagsAvailable from '../NewAdvertsPage/TagsAvailables';
import { getAdvertsTags } from '../../../api/adverts';
import './FilterForm.css';
import 'rc-slider/assets/index.css';

import React from 'react';

const FilterForm = ({ onSubmit }) => {
	const [tagsAvailable, setTagsAvailable] = React.useState([]);
	React.useEffect(() => {
		getAdvertsTags().then(setTagsAvailable);
	}, []);

	const [tags, setTags] = React.useState([]);

	const handleChangeTags = (event) => {
		if (event.target.checked) {
			setTags((oldTags) => [...oldTags, event.target.value]);
		} else {
			setTags((oldTags) => oldTags.filter((tag) => tag !== event.target.value));
		}
	};

	const [filterAdvert, setFilterAdvert] = React.useState({
		advertName: '',
		sale: false,
		buy: false,
		maxPrice: 0,
		minPrice: 0,
	});

	const handleChange = (event) => {
		setFilterAdvert((oldFilterAdvert) => ({
			...oldFilterAdvert,
			[event.target.name]:
				event.target.type === 'checkbox'
					? event.target.checked
					: event.target.value,
		}));
	};

	const handleSubmit = (event) => {
		console.log(event);
		event.preventDefault();
		onSubmit(filterAdvert, tags);
	};

	return (
		<form className="filterForm" onSubmit={handleSubmit}>
			<FormField
				name="advertName"
				type="text"
				label="name"
				className="filter-nameField"
				value={filterAdvert.advertName}
				onChange={handleChange}
				autofocus={true}
			/>
			<FormField
				name="minPrice"
				type="number"
				label="min-price"
				min="0"
				className="minPrice-value"
				value={filterAdvert.minPrice}
				onChange={handleChange}
				autofocus={false}
			/>

			<FormField
				name="maxPrice"
				label="max-price"
				type="number"
				min="0"
				className="maxPrice-value"
				value={filterAdvert.maxPrice}
				onChange={handleChange}
				autofocus={false}
			/>
			<TagsAvailable
				className="tagsAvailable"
				onChange={handleChangeTags}
				name="tags"
				tags={tagsAvailable}
				checked={tags}
			/>

			<Checkbox
				name="sale"
				label="Sale"
				className="checkbox-sale"
				checked={filterAdvert.sale}
				onChange={handleChange}
			/>

			<Checkbox
				name="buy"
				label="Buy"
				className="checkbox-buy"
				checked={filterAdvert.buy}
				onChange={handleChange}
			/>

			<Button
				type="submit"
				variant="primary"
				className="search-button"
				// disabled={
				// 	!filterAdvert.advertName &&
				// 	!filterAdvert.maxPrice &&
				// 	tags.length === 0 &&
				// 	!filterAdvert.sale &&
				// 	!filterAdvert.buy &&
				// 	!filterAdvert.maxPrice &&
				// 	!filterAdvert.minPrice
				// }
			>
				Search
			</Button>
		</form>
	);
};

FilterForm.propTypes = {
	onSubmit: T.func.isRequired,
};

export default FilterForm;
