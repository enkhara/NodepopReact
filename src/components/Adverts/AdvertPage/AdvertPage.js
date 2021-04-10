import Layout from '../../layout/Layout';
import { getAdvertDetail, deleteAdvert } from '../../../api/adverts';
import Advert from './Advert';
import Button from '../../shared/Button';
import NotFound from '../../NotFoundPage/NotFound';
import WindowConfirm from '../../shared/WindowConfirm';

import './AdvertPage.css';

import React from 'react';
import { useHistory } from 'react-router';

const AdvertPage = ({ ...RouterProps }) => {
	const history = useHistory();

	const [advert, setAdvert] = React.useState();
	const [error, setError] = React.useState();
	const [showDeleteAdvert, setShowDeleteAdvert] = React.useState(false);

	const { match } = RouterProps;

	React.useEffect(() => {
		getAdvertDetail(match.params.id).then(setAdvert).catch(setError);
	}, [match.params.id]);

	const handleClick = () => {
		setShowDeleteAdvert(true);
	};

	const handleDeleteClick = (event) => {
		if (event === 'true') {
			deleteAdvert(advert.id).then(history.push('/adverts'));
		} else {
			setShowDeleteAdvert(false);
		}
	};

	return error ? (
		<NotFound />
	) : (
		<Layout title="Your selected advert" onClick={handleDeleteClick}>
			<div className="advertContainer">
				<Advert {...advert} />
				<Button
					className="deleteAdvertButton"
					type="button"
					onClick={handleClick}
				>
					Delete
				</Button>
			</div>
			{showDeleteAdvert ? (
				<WindowConfirm
					className="delete-confirm"
					onClick={handleDeleteClick}
				></WindowConfirm>
			) : (
				<div />
			)}
		</Layout>
	);
};

export default AdvertPage;
