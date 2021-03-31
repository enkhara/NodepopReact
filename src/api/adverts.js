import client from './client';

const advertsBaseUrl = '/api/v1';

export const getAdverts = () => {
	const url = `${advertsBaseUrl}/adverts`;
	console.log(url);
	return client.get(url);
};

export const getAdvertDetail = (advertId) => {
	//TODO: verificar url endpoint
	const url = `${advertsBaseUrl}/v1/adverts/:${advertId}`;
	return client.get(url);
};

export const createAdvert = (advert) => {
	const url = `${advertsBaseUrl}/v1/adverts`;
	return client.post(url, advert);
};

export const getAdvertsTags = (tags) => {
	const url = `${advertsBaseUrl}/v1/adverts/${tags}`;
	return client.get(url);
};
