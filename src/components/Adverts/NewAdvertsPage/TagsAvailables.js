import Checkbox from '../../shared/Checkbox';
import './TagsAvailables.css';

const TagsAvailable = ({ tags, onChange, checked }) => {
	const handleChangeTags = (event) => {
		onChange(event);
	};

	console.log('checked', checked);

	return (
		<div className="tags-list">
			{tags.map((tag) => (
				<div key={tag} className="tag">
					<Checkbox
						className="tagCheckBox"
						name={tag}
						label={tag}
						onChange={handleChangeTags}
						checked={checked.includes(tag)}
						value={tag}
					/>
				</div>
			))}
		</div>
	);
};

export default TagsAvailable;
