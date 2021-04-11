import AdvertList from './AdvertList';
import { getAdverts, getAdvertsTags } from '../../../api/adverts';
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

	return (
		<Layout {...props}>
			<FilterForm />
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
