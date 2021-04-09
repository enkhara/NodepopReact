import React from 'react';
import Button from '../../shared/Button';
import Checkbox from '../../shared/Checkbox';
import FormField from '../../shared/FormField';
import RadioButton from '../../shared/RadioButton';
import './NewAdvertForm.css';

const NewAdvertForm = () => {
	const [advertData, setAdvertData] = React.useState({
		advertName: '',
		price: 0,
		sell: false,
	});

	const [tags, setTags] = React.useState(['hello']);

	const handleChangeTags = (event) => {
		setTags((oldTags) => {
			console.log('oldtags', oldTags);
			oldTags.push(event.target.value);
			console.log(oldTags);
		});
		console.log('tags', tags);
	};

	// const fileInput = React.createRef();
	// console.log(fileInput);

	const handleChange = (event) => {
		console.log('evento', event.target.value);
		setAdvertData((oldAdvertData) => ({
			...oldAdvertData,
			[event.target.name]:
				event.target.type === 'checkbox'
					? event.target.checked
					: event.target.value,
		}));
	};
	console.log('!', !advertData.advertName, tags.length === 0);

	return (
		<form className="newAdvertForm">
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
				name="sell"
				label="Sell"
				className="checkbox-sell"
				checked={advertData.sell}
				onChange={handleChange}
			/>

			<RadioButton
				name="motor"
				label="Motor"
				className="radioButton-motor"
				onChange={handleChangeTags}
				value={'motor'}
			/>
			<RadioButton
				name="work"
				label="Work"
				className="radioButton-motor"
				onChange={handleChangeTags}
				value={'work'}
			/>
			<RadioButton
				name="lifestyle"
				label="Lifestyle"
				className="radioButton-motor"
				onChange={handleChangeTags}
				value={'lifestyle'}
			/>
			<RadioButton
				name="mobile"
				label="Mobile"
				className="radioButton-motor"
				onChange={handleChangeTags}
				value={'mobile'}
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
