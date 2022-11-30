import { createSlice, createAction } from '@reduxjs/toolkit';
import { roundNumber } from '../utils/roundNumber';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        totalPrice: localStorage.cart ? JSON.parse(localStorage.cart).totalPrice : 0,
        items: localStorage.cart ? JSON.parse(localStorage.cart).items : [],
    },
    reducers: {
        addItem: (state, action) => {
            const productId = state.items.findIndex((item) => item.productId === action.payload.id);
            state.totalPrice = roundNumber(state.totalPrice + action.payload.price, 2);
            if (productId !== -1) {
                state.items[productId].quantity++;
            } else {
                state.items.push({ productId: action.payload.id, quantity: 1 });
            }
            console.log('asd');
            localStorage.cart = JSON.stringify({ ...state });
        },
        removeItem: (state, action) => {
            const productId = state.items.findIndex((item) => item.productId === action.payload.id);
            state.totalPrice = roundNumber(state.totalPrice - action.payload.price, 2);
            state.items[productId].quantity--;
            if (state.items[productId].quantity === 0) {
                state.items.splice(productId, 1);
            }
            localStorage.cart = JSON.stringify({ ...state });
        },
        removeAllItem: (state, action) => {
            const productId = state.items.findIndex(
                (item) => item.productId === action.payload.productId,
            );
            state.totalPrice = roundNumber(
                state.totalPrice - action.payload.price * action.payload.quantity,
                2,
            );
            state.items.splice(productId, 1);
            localStorage.cart = JSON.stringify({ ...state });
        },
        clearCart: (state, action) => {
            state.items = [];
            state.totalPrice = 0;
            localStorage.cart = {};
        },
    },
});

const { reducer: cartReducer, actions } = cartSlice;
export const { addItem, removeItem, clearCart, removeAllItem } = actions;

// export const addProductToCart = (data) => async (dispatch) => {
//     dispatch(cartAddProduct(data));
// };

export const getTotalPrice = () => (state) => state.cart.totalPrice;
export const getItemsCount = () => (state) =>
    state.cart.items.reduce((counter, item) => counter + item.quantity, 0);
export const getItemsList = () => (state) => state.cart.items;

export const getProduct = (id) => (state) => {
    return state.cart.items.find((item) => item.productId === id);
};
// export const getProductsLoading = () => (state) => state.products.isLoading;

export default cartReducer;
