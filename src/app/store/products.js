import { createSlice, createAction } from '@reduxjs/toolkit';
// import authService from "../services/auth.service";
// import { generateAuthError } from "../services/generateAuthError";
// import localStorageservice from "../services/localStorage.service";
import productsService from '../services/products.service';
// import history from "../utils/history";
// import randomInt from "../utils/randomInt";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
    },
    reducers: {
        productsRequested: (state) => {
            state.isLoading = true;
        },
        productsReceved: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
    },
});

const { reducer: productsReducer, actions } = productsSlice;
const { productsRequested, productsReceved } = actions;

// const authRequested = createAction("users/authRequested");
// const userCreateRequested = createAction("users/userCreateRequested");
// const createUserFailed = createAction("users/createUserFailed");
// const updateUserData = createAction("users/updateUserData");
// const updateUserDataFailed = createAction("users/userUpdateDataFailed");

export const fetchAllProducts = (category) => (dispatch) => {
    dispatch(productsRequested());
    category === 'all' ? dispatch(getAllProducts()) : dispatch(getCategoryProducts(category));
};

const getAllProducts = () => async (dispatch) => {
    try {
        const data = await productsService.getAll();
        dispatch(productsReceved(data));
    } catch (error) {
        console.log(error);
    }
};
const getCategoryProducts = (category) => async (dispatch) => {
    try {
        const data = await productsService.getCategory(category);
        dispatch(productsReceved(data));
    } catch (error) {
        console.log(error);
    }
};


export const getProducts = () => (state) => state.products.entities;
export const getProductsLoading = () => (state) => state.products.isLoading;
export const getSortProducts = () => (state) =>
    state.products.entities.slice().sort((a, b) => a.price - b.price);

export default productsReducer;
