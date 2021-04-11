import AdvertList from './AdvertList';
import { getAdverts, getAdvertsTags } from '../../../api/adverts';
import React from 'react';
import Layout from '../../layout/Layout';
import EmptyList from '../../EmptyList/EmptyList';
import FilterForm from './FilterForm';
import { Filtering } from './FilteringLogica';

import './AdvertsPage.css';

const AdvertsPage = ({ ...props }) => {
	const [adverts, setAdverts] = React.useState([]);

	React.useEffect(() => {
		getAdverts().then(setAdverts);
	}, []);

	const [advertsFiltered, setAdvertsFiltered] = React.useState([]);
	const handleSubmit = (filterAdvert, tags) => {
		console.log('FILTROPS', filterAdvert, tags);
		// const filterAd = [...filterAd, adverts];
		// adverts.forEach((advert) => {
		// 	filterAdvert[tags].filter(tags);
		// 	// setAdvertsFiltered((oldAdvertsFiltered) => {
		// 	// 	[...oldAdvertsFiltered, adverts[tags].filter(tags)];
		// });
		// console.log(filterAd);
		Filtering(adverts, filterAdvert, tags);
	};

	return (
		<Layout {...props}>
			<FilterForm onSubmit={handleSubmit} />
			<div className="advertsPage">
				{adverts.length ? (
					<AdvertList className="advert-items" adverts={adverts} />
				) : (
					<EmptyList />
				)}
			</div>
		</Layout>
	);
};

export default AdvertsPage;
