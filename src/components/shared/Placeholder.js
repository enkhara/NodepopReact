import './Placeholder.css';

const Placeholder = (photo) => {
	const image = `http://localhost:3001${photo.src}`;

	return <img className="image-holder" src={image} alt="" />;
};

export default Placeholder;
