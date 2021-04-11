import './Placeholder.css';

const Placeholder = (photo) => {
	console.log(photo);
	const image = `http://localhost:3001${photo.src}`;
	console.log('image', image);

	return <img className="image-holder" src={image} alt="" />;
};

export default Placeholder;
