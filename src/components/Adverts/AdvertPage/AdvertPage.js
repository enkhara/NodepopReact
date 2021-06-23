import Layout from '../../layout/Layout';
import { getAdvertDetail, deleteAdvert } from '../../../api/adverts';
import AdvertDetail from './Advert';
import Button from '../../shared/Button';
import NotFound from '../../NotFoundPage/NotFound';
import WindowConfirm from '../../shared/WindowConfirm';

import './AdvertPage.css';

import React from 'react';
import { useHistory } from 'react-router';

const AdvertPage = ({ ...RouterProps }) => {
	const history = useHistory();

	const [advert, setAdvert] = React.useState(null);
	const [error, setError] = React.useState();
	const [showDeleteAdvert, setShowDeleteAdvert] = React.useState(false);

	const { match } = RouterProps;

	React.useEffect(() => {
		getAdvertDetail(match.params.id).then(setAdvert).catch(setError);
	}, [match.params.id]);

	const handleClick = () => {
		setShowDeleteAdvert(true);
	};

	const handleDelete = () => {
		deleteAdvert(advert.id).then(history.push('/adverts'));
	};

	const handelCancel = () => {
		setShowDeleteAdvert(false);
	};

	return error ? (
		<NotFound />
	) : (
		<Layout title="Your selected advert" onClick={handleClick}>
			{advert && (
				<div className="advertContainer">
					<AdvertDetail advert={advert} />
					<Button
						className="deleteAdvertButton"
						type="button"
						onClick={handleClick}
					>
						Delete
					</Button>
				</div>
			)}
			{showDeleteAdvert && (
				<WindowConfirm
					className="delete-confirm"
					onConfirm={handleDelete}
					onCancel={handelCancel}
				></WindowConfirm>
			)}
		</Layout>
	);
};

export default AdvertPage;
