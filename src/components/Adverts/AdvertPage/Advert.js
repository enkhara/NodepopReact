import Placeholder from '../../shared/Placeholder';
import './Advert.css';

const AdvertDetail = (advert) => {
	//console.log(advert);
	return (
		<div className="container">
			<div className="advert-image">
				<Placeholder src={advert.photo} />
			</div>
			<div className="advertInfo" key={advert.id}>
				<div className="advertPrice">{advert.price}€</div>
				<div className="advertName">{advert.name}</div>
				<div className="advertSale">{advert.sale ? 'Sale' : 'Buy'}</div>
				<div className="advertTags">{advert.tags}</div>
			</div>
		</div>
	);
};

export default AdvertDetail;
