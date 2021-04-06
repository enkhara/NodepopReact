import client, { configureClient, resetClient } from './client';

import storage from '../utils/storage';

export const login = (credentials) => {
	return client.post('/api/auth/login', credentials).then(({ accessToken }) => {
		console.log(accessToken);
		configureClient({ accessToken });
		if (credentials.remind) {
			storage.set('auth', accessToken);
		}
	});
};

export const logout = () => {
	return Promise.resolve().then(() => {
		resetClient();
		storage.remove('auth');
	});
};
