import React, { useEffect, useRef } from 'react';

import { getAdvertsTags } from '../../../api/adverts';

import Button from '../../shared/Button';
import Checkbox from '../../shared/Checkbox';
import FormField from '../../shared/FormField';
import TagsAvailable from './TagsAvailables';

import './NewAdvertForm.css';

const NewAdvertForm = ({ onSubmit }) => {
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
	const [fileInput, setFileInput] = React.useState('');

	const handleChangeImage = (event) => {
		if (event.target.files[0]) {
			setFileInput(event.target.files[0]);
		} else {
			setFileInput([]);
		}

		//

		console.log(event.target.files[0]);
	};

	const [tags, setTags] = React.useState([]);

	const handleChangeTags = (event) => {
		if (event.target.checked) {
			setTags((oldTags) => [...oldTags, event.target.value]);
		} else {
			setTags((oldTags) => oldTags.filter((tag) => tag !== event.target.value));
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const fileBinary = new Blob([fileInput], { type: 'multipart/form-data' });
		console.log(fileInput, fileBinary);
		console.log('onsubmit', event);
		let newAdvert = new FormData();
		newAdvert.append('name', advertData.advertName);
		newAdvert.append('price', advertData.price);
		newAdvert.append('sale', advertData.sale);
		newAdvert.append('tags', tags);
		if (fileBinary) {
			//newAdvert.append('photo', new Blob([fileInput], {}));
			newAdvert.append('photo', fileBinary);
		}
		onSubmit(newAdvert);
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
				onChange={handleChangeImage}
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
				disabled={
					!advertData.advertName || !advertData.price || tags.length === 0
				}
			>
				Add
			</Button>
		</form>
	);
};

export default NewAdvertForm;
