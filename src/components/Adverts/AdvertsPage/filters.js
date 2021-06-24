export const initialFilter = {
	advertName: '',
	sale: false,
	buy: false,
	maxPrice: 0,
	minPrice: 0,
	//tags: [],
};

// export const filterAdverts = (adverts, filterAdvert, tags) => {
// 	return adverts
// 		.filter(
// 			(advert) =>
// 				!filterAdvert.advertName ||
// 				filterAdvert.advertName === advert.name.toLowerCase()
// 		)
// 		.filter(
// 			(advert) =>
// 				(!filterAdvert.buy && !filterAdvert.sale) ||
// 				(filterAdvert.buy && filterAdvert.sale) ||
// 				filterAdvert.buy === !advert.sale ||
// 				filterAdvert.sale === advert.sale
// 		)
// 		.filter(
// 			(advert) =>
// 				(!filterAdvert.maxPrice && !filterAdvert.minPrice) ||
// 				filterAdvert.maxPrice < filterAdvert.minPrice ||
// 				(advert.price <= filterAdvert.maxPrice &&
// 					advert.price >= filterAdvert.minPrice)
// 		)
// 		.filter(
// 			//(advert) =>	!tags.length || advert.tags.every((tags) => tags.includes(tags))
// 			(advert) => !tags.length || advert.tags.every((tag) => tags.includes(tag))
// 			// (tags.length === 1 && advert.tags.find((tag) => tag === tags[0])) ||
// 			// (tags.length === 2 &&
// 			// 	advert.tags.find((tag) => tag === tags[0]) &&
// 			// 	advert.tags.find((tag) => tag === tags[1])) ||
// 			// (tags.length === 3 &&
// 			// 	advert.tags.find((tag) => tag === tags[0]) &&
// 			// 	advert.tags.find((tag) => tag === tags[1]) &&
// 			// 	advert.tags.find((tag) => tag === tags[2])) ||
// 			// (tags.length === 4 &&
// 			// 	advert.tags.find((tag) => tag === tags[0]) &&
// 			// 	advert.tags.find((tag) => tag === tags[1]) &&
// 			// 	advert.tags.find((tag) => tag === tags[2]) &&
// 			// 	advert.tags.find((tag) => tag === tags[3]))
// 		);
// };

export const filterAdverts = (adverts, filterAdvert, tags) => {
	return adverts
		.filter(
			(advert) =>
				!filterAdvert.advertName ||
				filterAdvert.advertName === advert.name.toLowerCase()
		)
		.filter(
			(advert) =>
				(!filterAdvert.buy && !filterAdvert.sale) ||
				(filterAdvert.buy && filterAdvert.sale) ||
				filterAdvert.buy === !advert.sale ||
				filterAdvert.sale === advert.sale
		)
		.filter(
			(advert) =>
				(!filterAdvert.maxPrice && !filterAdvert.minPrice) ||
				filterAdvert.maxPrice < filterAdvert.minPrice ||
				(advert.price <= filterAdvert.maxPrice &&
					advert.price >= filterAdvert.minPrice)
		)
		.filter(
			(advert) => !tags.length || advert.tags.some((tag) => tags.includes(tag))
		);
};
