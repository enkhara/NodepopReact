import './AdvertList.css';
import { Link } from 'react-router-dom';

const AdvertList = ({ adverts }) => {
	return (
		<div className="advert-list">
			{adverts.map((advert) => (
				<div key={advert.id} className="advert">
					<Link to={`/advert/${advert.id}`}>
						<div className="advert-info">
							<h2 className="advert-price">
								{advert.price} <span>€</span>
							</h2>
							<p className="advert-name"> {advert.name} </p>
							<p className="advert-option">{advert.transactionType} </p>
						</div>

						<div className="advert-tags">
							<p className="tag">{advert.tags} </p>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
};

export default AdvertList;
