export const advertItem = (advert) => {
	return (
		<div key={advert.id}>
			<div className="image">
				<img src={advert.image} alt="" />
			</div>

			<div className="advert-info">
				<h2 className="advert-price">{advert.price} €</h2>
				<p className="advert-name"> {advert.name} </p>
				<p className="advert-option">{advert.transactionType} </p>
			</div>

			<div className="advert-tags">
				<p className="tag">{advert.tags} </p>
			</div>
		</div>
	);
};
