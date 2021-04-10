import React, { useEffect } from 'react';

import { getAdvertsTags } from '../../../api/adverts';

import Button from '../../shared/Button';
import Checkbox from '../../shared/Checkbox';
import FormField from '../../shared/FormField';
import TagsAvailable from './TagsAvailables';

import './NewAdvertForm.css';

const NewAdvertForm = () => {
	const [tagsAvailable, setTagsAvailable] = React.useState([]);

	React.useEffect(() => {
		getAdvertsTags().then(setTagsAvailable);
	}, []);

	const [advertData, setAdvertData] = React.useState({
		advertName: '',
		price: 0,
		sale: false,
	});

	const handleChange = (event) => {
		setAdvertData((oldAdvertData) => ({
			...oldAdvertData,
			[event.target.name]:
				event.target.type === 'checkbox'
					? event.target.checked
					: event.target.value,
		}));
	};

	//console.log(advertData);
	const [tags, setTags] = React.useState([]);

	const handleChangeTags = (event) => {
		//console.log(event.target.checked);
		if (event.target.checked) {
			setTags((oldTags) => [...oldTags, event.target.value]);
		} else {
			setTags((oldTags) => oldTags.filter((tag) => tag !== event.target.value));
		}
	};

	console.log('piruli', tags);
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(advertData);
	};

	return (
		<form className="newAdvertForm" onSubmit={handleSubmit}>
			<FormField
				name="advertName"
				type="text"
				label="name"
				className="newAdvertForm-nameField"
				value={advertData.advertName}
				onChange={handleChange}
				autofocus={true}
			/>
			<FormField
				name="price"
				type="number"
				min="0"
				label="price"
				className="newAdvertForm-priceField"
				value={advertData.price}
				onChange={handleChange}
				autofocus={false}
			/>
			<FormField
				name="fileInput"
				type="file"
				className="newAdvertForm-inputField"
				// ref={fileInput}
				autofocus={false}
			/>

			<Checkbox
				name="sale"
				label="Sale"
				className="checkbox-sell"
				checked={advertData.sale}
				onChange={handleChange}
			/>

			<TagsAvailable
				className="tagsAvailable"
				onChange={handleChangeTags}
				name="tags"
				tags={tagsAvailable}
				checked={tags}
			/>

			<Button
				type="submit"
				variant="primary"
				className="newAdvert-submit"

				// disabled={
				// 	//!advertData.advertName || !advertData.price || tags.length === 0
				// }
			>
				Add
			</Button>
		</form>
	);
};

export default NewAdvertForm;
