import client from './client';

const advertsBaseUrl = '/api/v1';

export const getAdverts = () => {
	const url = `${advertsBaseUrl}/adverts`;
	console.log(client.get(url));
	return client.get(url);
};

export const getAdvertDetail = (advertId) => {
	const url = `${advertsBaseUrl}/adverts/:${advertId}`;
	return client.get(url);
};

export const createAdvert = (advert) => {
	const url = `${advertsBaseUrl}/adverts`;
	return client.post(url, advert);
};

export const getAdvertsTags = (tags) => {
	const url = `${advertsBaseUrl}/adverts/${tags}`;
	return client.get(url);
};
