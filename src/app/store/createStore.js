import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import goodsReducer from './products';
import filterReducer from './filter';
import usersReducer from './user';

const rootReducer = combineReducers({
    products: goodsReducer,
    cart: cartReducer,
    filter: filterReducer,
    users: usersReducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
