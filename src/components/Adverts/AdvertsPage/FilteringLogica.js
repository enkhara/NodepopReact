// const adverts = [
// 	{
// 		id: '6e4d57fe-eb3b-4767-a687-3d0f1a25a5c3',
// 		createdAt: '2021-04-10T19:46:30.000Z',
// 		name: 'Volvo',
// 		sale: true,
// 		price: 3000,
// 		tags: ['lifestyle', 'mobile', 'motor', 'work'],
// 		photo: '/public/1618083990427-78806358.jpg',
// 	},
// 	{
// 		id: '20a16413-8aa2-4f37-87f2-ac1bd1d636fd',
// 		createdAt: '2021-04-10T19:46:32.000Z',
// 		name: 'Volvo',
// 		sale: true,
// 		price: 3000,
// 		tags: ['lifestyle', 'mobile', 'motor', 'work'],
// 		photo: '/public/1618083992400-623391083.jpg',
// 	},
// 	{
// 		id: '879d8c48-a567-4f8c-8e29-1b546380407c',
// 		createdAt: '2021-04-11T02:03:35.000Z',
// 		name: 'porche',
// 		sale: true,
// 		price: 1003434,
// 		tags: ['lifestyle', 'motor'],
// 		photo: '/public/1618106615067-441601074.jpg',
// 	},
// 	{
// 		id: '56dddea1-c40b-4130-875c-50fb5003235c',
// 		createdAt: '2021-04-11T08:10:18.000Z',
// 		name: 'coche clasico',
// 		sale: true,
// 		price: 100000,
// 		tags: ['lifestyle', 'motor'],
// 		photo: '/public/1618128618817-480428196',
// 	},
// ];

import AdvertsPage from "./AdvertsPage";

// adverts.filter(advert => !filtros.advertName || filtros.advertName === advert.name.toLowerCase)

// adverts.filter(advert => !filtros.buy && !filtros.sale || filtros.buy && filtros.sale || filtros.buy === !advert.sale || filtros.sale === advert.sale)

// adverts.filter(advert => !filtros.maxPrice && !filtros.minPrice || filtros.maxPrice < filtros.minPrice || advert.price <= filtros.maxPrice && advert.price >= filtros.minPrice)

// adverts.filter(advert => !tags.length ||

// 	filtros = {advertName: "volvo", sale: true, buy: false, maxPrice: 0, minPrice: 0}
adverts.filter( advert => function (advert) =>{
	for (tag in tags){

	}
})

adverts.filter(advert => !tags.length || 
	tags.length === 1 && advert.tags.find(tag => tag === tags[0]) ||
	tags.length === 2 && advert.tags.find(tag => tag === tags[0]) && advert.tags.find(tag => tag === tags[1]) ||
	tags.length === 3 && advert.tags.find(tag => tag === tags[0]) && advert.tags.find(tag => tag === tags[1]) && advert.tags.find(tag => tag === tags[2]) ||
	tags.length === 4 && advert.tags.find(tag => tag === tags[0]) && advert.tags.find(tag => tag === tags[1]) && advert.tags.find(tag => tag === tags[2]) && advert.tags.find(tag => tag === tags[3]))
