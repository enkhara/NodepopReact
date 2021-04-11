import Button from '../../shared/Button';
import FormField from '../../shared/FormField';
import Checkbox from '../../shared/Checkbox';
import TagsAvailable from '../NewAdvertsPage/TagsAvailables';
import { getAdvertsTags } from '../../../api/adverts';
import './FilterForm.css';

import React from 'react';

const FilterForm = () => {
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
		price: 0,
		sale: false,
		buy: false,
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
		event.preventDefault();
	};

	return (
		<div className="filterForm" onSubmit={handleSubmit}>
			<FormField
				name="advertName"
				type="text"
				label="name"
				className="filter-nameField"
				value={filterAdvert.advertName}
				onChange={handleChange}
				autofocus={true}
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
				className="checkbox-sell"
				checked={filterAdvert.sale}
				onChange={handleChange}
			/>

			<Checkbox
				name="Buy"
				label="Buy"
				className="checkbox-buy"
				checked={filterAdvert.buy}
				onChange={handleChange}
			/>

			<Button type="submit" variant="primary" className="search-button">
				Search
			</Button>
		</div>
	);
};

export default FilterForm;
