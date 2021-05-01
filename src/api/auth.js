import client, { configureClient, resetClient } from './client';

import storage from '../utils/storage';

export const login = (allCredentials) => {
	const { remind, ...credentials } = allCredentials;
	console.log('credentials', credentials);
	console.log('remind', remind);
	return client.post('/api/auth/login', credentials).then(({ accessToken }) => {
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
