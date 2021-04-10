import './Placeholder.css';

const Placeholder = (photo) => {
	console.log('photo', photo.src);
	return <img className="image-holder" src={photo.src} alt="" />;
};

export default Placeholder;
