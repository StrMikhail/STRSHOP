import { createSlice, createAction } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        category: 'all',
        sort: {
            name: 'popular',
            sortProperty: 'popular',
        },
        filter: '',
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        // cartAddProduct: (state, action) => {
        //     state.entities = action.payload;
        // },
    },
});

const { reducer: filterReducer, actions } = filterSlice;
export const { setCategory, setSort, setFilter } = actions;

// export const addProductToCart = (data) => async (dispatch) => {
//     dispatch(cartAddProduct(data));
// };

export const getCategory = () => (state) => state.filter.category;
export const getSort = () => (state) => state.filter.sort;
export const getFilter = () => (state) => state.filter.filter;

// export const getProductsLoading = () => (state) => state.products.isLoading;

export default filterReducer;
