import Layout from '../../layout/Layout';
import NewAdvertForm from './NewAdvertForm';

const NewAdvertPage = ({ ...props }) => {
	return (
		<Layout title="Add your Advert" {...props}>
			<NewAdvertForm />
		</Layout>
	);
};

export default NewAdvertPage;
