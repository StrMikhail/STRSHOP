import httpService from './http.service';

const productsEndpoint = 'products/';
const producstCategoryEndpoint = 'category/';

const productsService = {
    getAll: async () => {
        const { data } = await httpService.get(productsEndpoint);
        return data;
    },
    getOne: async (id) => {
        const { data } = await httpService.get(productsEndpoint + id);
        return data;
    },
    getCategory: async (categoryActive) => {
        const { data } = await httpService.get(
            productsEndpoint + producstCategoryEndpoint + categoryActive,
        );
        return data;
    },
};

export default productsService;
