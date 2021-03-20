import { advertItem } from './advertItem';

const adverts = [
	{
		image: 'http://127.0.0.1:8000//file-1614525603875.jpg',
		name: 'Bicicleta',
		price: '500',
		transactionType: 'compra',
		tags: [],
		userId: 1,
		updatedAt: '2021-02-28T15:20:03.893Z',
		id: 5,
	},
	{
		image: 'http://127.0.0.1:8000//file-1614525625346.jpg',
		name: 'Coche clásico',
		price: '60000',
		transactionType: 'venta',
		tags: [],
		userId: 1,
		updatedAt: '2021-02-28T15:20:25.353Z',
		id: 6,
	},
	{
		image: 'http://127.0.0.1:8000//file-1614525654050.jpg',
		name: 'teléfono',
		price: '300',
		transactionType: 'venta',
		tags: [],
		userId: 1,
		updatedAt: '2021-02-28T15:20:54.058Z',
		id: 7,
	},
	{
		image: 'http://127.0.0.1:8000//file-1614548617878.jpg',
		name: 'Coche',
		price: '45000',
		transactionType: 'venta',
		tags: [],
		userId: 2,
		updatedAt: '2021-02-28T21:43:37.888Z',
		id: 8,
	},
];

const AdvertsPage = () => {
	const listAdverts = adverts.map((advert) => {
		// return (
		// 	<div key={advert.id}>
		// 		<div className="image">
		// 			<img src={advert.image} alt="" />
		// 		</div>

		// 		<div className="advert-info">
		// 			<h2 className="advert-price">{advert.price} €</h2>
		// 			<p className="advert-name"> {advert.name} </p>
		// 			<p className="advert-option">{advert.transactionType} </p>
		// 		</div>

		// 		<div className="advert-tags">
		// 			<p className="tag">{advert.tags} </p>
		// 		</div>
		// 	</div>
		// );
		return advertItem(advert);
	});
	console.log(listAdverts);

	return (
		<div className="advertsPage">
			<div> {listAdverts} </div>
		</div>
	);
};

export default AdvertsPage;
