import Layout from '../../layout/Layout';
import NewAdvertForm from './NewAdvertForm';

import { useHistory } from 'react-router-dom';

import { createAdvert } from '../../../api/adverts';

const NewAdvertPage = ({ ...props }) => {
	const history = useHistory();

	const handleSubmit = (newAdvert) => {
		console.log(newAdvert);
		createAdvert(newAdvert).then(history.push('/adverts'));
	};

	return (
		<Layout title="Add your Advert" {...props}>
			<NewAdvertForm onSubmit={handleSubmit} />
		</Layout>
	);
};

export default NewAdvertPage;
