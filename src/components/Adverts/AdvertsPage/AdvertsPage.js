import AdvertList from './AdvertList';
import { getAdverts } from '../../../api/adverts';
import React from 'react';
import Layout from '../../layout/Layout';
import EmptyList from '../../EmptyList/EmptyList';
import FilterForm from './FilterForm';

// const adverts = [
// 	{
// 		image: 'http://127.0.0.1:8000//file-1614525603875.jpg',
// 		name: 'Bicicleta',
// 		price: '500',
// 		transactionType: 'compra',
// 		tags: [],
// 		userId: 1,
// 		updatedAt: '2021-02-28T15:20:03.893Z',
// 		id: 5,
// 	},
// 	{
// 		image: 'http://127.0.0.1:8000//file-1614525625346.jpg',
// 		name: 'Coche clásico',
// 		price: '60000',
// 		transactionType: 'venta',
// 		tags: [],
// 		userId: 1,
// 		updatedAt: '2021-02-28T15:20:25.353Z',
// 		id: 6,
// 	},
// 	{
// 		image: 'http://127.0.0.1:8000//file-1614525654050.jpg',
// 		name: 'teléfono',
// 		price: '300',
// 		transactionType: 'venta',
// 		tags: [],
// 		userId: 1,
// 		updatedAt: '2021-02-28T15:20:54.058Z',
// 		id: 7,
// 	},
// 	{
// 		image: 'http://127.0.0.1:8000//file-1614548617878.jpg',
// 		name: 'Coche',
// 		price: '45000',
// 		transactionType: 'venta',
// 		tags: [],
// 		userId: 2,
// 		updatedAt: '2021-02-28T21:43:37.888Z',
// 		id: 8,
// 	},
// ];

const AdvertsPage = ({ ...props }) => {
	const [adverts, setAdverts] = React.useState([]);
	console.log('lenght', adverts.length);

	React.useEffect(() => {
		getAdverts().then(setAdverts);
		console.log('peticion');
	}, []);

	console.log(adverts.length);

	return (
		<Layout {...props}>
			<FilterForm />
			<div className="advertsPage">
				{adverts.length ? <AdvertList adverts={adverts} /> : <EmptyList />}
			</div>
		</Layout>
	);
};

export default AdvertsPage;
