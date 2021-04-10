import Layout from '../../layout/Layout';
import { getAdvertDetail } from '../../../api/adverts';
import Advert from './Advert';
import Button from '../../shared/Button';
import NotFound from '../../NotFoundPage/NotFound';
import WindowConfirm from '../../shared/WindowConfirm';

import React from 'react';

const AdvertPage = ({ ...RouterProps }) => {
	const [advert, setAdvert] = React.useState();
	const [error, setError] = React.useState();

	const { match } = RouterProps;

	React.useEffect(() => {
		getAdvertDetail(match.params.id).then(setAdvert).catch(setError);
	}, [match.params.id]);

	console.log(advert);

	const handleClick = (event) => {
		console.log('hello world', event);
		// const confirmDelete = window.confirm('Are you sure');
		// console.log('hellllllo', window.confirm);
		// if (confirmDelete) {
		// 	console.log('yes');
		// } else {
		// 	console.log('no');
		// }
	};

	const handleSubmit = (event) => {
		console.log('el botton', event);
		if (event) {
			//TODO:eliminar advert
			//TODO: redireccionar a advertspage
		} else {
			//TODO:esconder windowconfirm
		}
	};

	return error ? (
		<NotFound />
	) : (
		<Layout title="Your selected advert">
			<Advert {...advert} />
			<Button className="deleteButton" type="button" onClick={handleClick}>
				Delete
			</Button>
			<WindowConfirm
				className="delete-confirm"
				onSubmit={handleSubmit}
			></WindowConfirm>
		</Layout>
	);
};

export default AdvertPage;
