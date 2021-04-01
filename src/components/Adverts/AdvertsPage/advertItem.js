import './advertItem.css';

export const advertItem = (advert) => {
	console.log(advert.tags);
	return (
		<div key={advert.id} className="advert">
			{/* <div className="image">
				<img src={advert.image} alt="" />
			</div> */}

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
		</div>
	);
};
