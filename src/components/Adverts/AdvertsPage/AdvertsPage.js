import AdvertList from './AdvertList';
import { getAdverts } from '../../../api/adverts';
import React from 'react';
import Layout from '../../layout/Layout';
import EmptyList from '../../EmptyList/EmptyList';
import FilterForm from './FilterForm';
import { initialFilter, filterAdverts } from './filters';
import './AdvertsPage.css';

const AdvertsPage = ({ ...props }) => {
	const [adverts, setAdverts] = React.useState([]);
	const [filters, setFilters] = React.useState(initialFilter);
	const [tags, setTags] = React.useState([]);

	React.useEffect(() => {
		getAdverts().then(setAdverts);
	}, []);

	const filteredAdverts = filterAdverts(adverts, filters, tags);

	const handleSubmit = (filterAdvert, tags) => {
		setFilters(filterAdvert);
		setTags(tags);
	};

	return (
		<Layout {...props}>
			<FilterForm onSubmit={handleSubmit} />
			<div className="advertsPage">
				{adverts.length ? (
					<AdvertList className="advert-items" adverts={filteredAdverts} />
				) : (
					<EmptyList />
				)}
			</div>
		</Layout>
	);
};

export default AdvertsPage;
