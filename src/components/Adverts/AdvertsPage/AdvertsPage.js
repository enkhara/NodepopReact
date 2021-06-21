import AdvertList from './AdvertList';
import { getAdverts } from '../../../api/adverts';
import React from 'react';
import Layout from '../../layout/Layout';
import EmptyList from '../../EmptyList/EmptyList';
import FilterForm from './FilterForm';

import './AdvertsPage.css';

const AdvertsPage = ({ ...props }) => {
	const [adverts, setAdverts] = React.useState([]);

	React.useEffect(() => {
		getAdverts().then(setAdverts);
	}, []);

	const [advertsFiltered, setAdvertsFiltered] = React.useState([]);
	const handleSubmit = (filterAdvert, tags) => {
		setAdvertsFiltered(
			adverts
				.filter(
					(advert) =>
						!filterAdvert.advertName ||
						filterAdvert.advertName === advert.name.toLowerCase()
				)
				.filter(
					(advert) =>
						(!filterAdvert.buy && !filterAdvert.sale) ||
						(filterAdvert.buy && filterAdvert.sale) ||
						filterAdvert.buy === !advert.sale ||
						filterAdvert.sale === advert.sale
				)
				.filter(
					(advert) =>
						(!filterAdvert.maxPrice && !filterAdvert.minPrice) ||
						filterAdvert.maxPrice < filterAdvert.minPrice ||
						(advert.price <= filterAdvert.maxPrice &&
							advert.price >= filterAdvert.minPrice)
				)
				.filter(
					(advert) =>
						!tags.length ||
						(tags.length === 1 && advert.tags.find((tag) => tag === tags[0])) ||
						(tags.length === 2 &&
							advert.tags.find((tag) => tag === tags[0]) &&
							advert.tags.find((tag) => tag === tags[1])) ||
						(tags.length === 3 &&
							advert.tags.find((tag) => tag === tags[0]) &&
							advert.tags.find((tag) => tag === tags[1]) &&
							advert.tags.find((tag) => tag === tags[2])) ||
						(tags.length === 4 &&
							advert.tags.find((tag) => tag === tags[0]) &&
							advert.tags.find((tag) => tag === tags[1]) &&
							advert.tags.find((tag) => tag === tags[2]) &&
							advert.tags.find((tag) => tag === tags[3]))
				)
		);
	};
	//console.log('filtrados', advertsFiltered);

	return (
		<Layout {...props}>
			<FilterForm onSubmit={handleSubmit} />
			<div className="advertsPage">
				{adverts.length ? (
					<AdvertList
						className="advert-items"
						adverts={advertsFiltered.length !== 0 ? advertsFiltered : adverts}
					/>
				) : (
					<EmptyList />
				)}
			</div>
		</Layout>
	);
};

export default AdvertsPage;
