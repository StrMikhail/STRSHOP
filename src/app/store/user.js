import { createSlice } from '@reduxjs/toolkit';
import authService from '../services/auth.service';
import userService from '../services/user.service';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        curretnUser: localStorage.currentUser ? JSON.parse(localStorage.currentUser) : null,
        userError: null,
        currentUserError: null,
        isLoading: true,
    },
    reducers: {
        usersRequested: (state, action) => {
            state.isLoading = action.payload;
        },
        usersReceved: (state, action) => {
            state.users = action.payload;
        },
        signIn: (state, action) => {
            state.curretnUser = state.users.find(
                (user) => user.username === action.payload.username,
            );
            localStorage.currentUser = JSON.stringify({ ...state.curretnUser, ...action.payload });
        },
        logOut: (state) => {
            state.curretnUser = null;
        },
        singInError: (state, action) => {
            state.currentUserError = action.payload;
        },
        clearCurrentUserError: (state) => {
            state.currentUserError = null;
        },
    },
});

const { reducer: usersReducer, actions } = usersSlice;
export const { usersReceved, signIn, logOut, singInError, clearCurrentUserError, usersRequested } =
    actions;

export const fetchUserList = (limit) => async (dispatch) => {
    try {
        const data = await userService.get(limit);
        dispatch(usersReceved(data));
        dispatch(usersRequested(false));
    } catch (error) {
        dispatch(singInError(error.message));
    }
};

export const signUp = (user) => async (dispatch) => {
    dispatch(signIn(user));

    try {
        const data = await authService.login(user);
        dispatch(signIn({ ...user, ...data }));
    } catch (error) {
        dispatch(singInError(error.message));
    }
};

export const logout = () => async (dispatch) => {
    localStorage.clear('currentUser');
    localStorage.clear('cart');
    dispatch(logOut());
};
export const fetchUser = (limit) => async (dispatch) => {
    try {
        const data = await userService.get(limit);
        dispatch(usersReceved(data));
    } catch (error) {
        dispatch(singInError(error.message));
        console.log(error.message);
    }
};

export const getUsers = () => (state) => state.users.users.slice(0, 5);
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;

export const getUser = (currentUser) => (state) => {
    if (currentUser) {
        return state.users.users.find((user) => user.username === currentUser.username);
    }
};

export const getIsLoggedIn = () => (state) => state.users.curretnUser;
export const getIsLoginError = () => (state) => state.users.currentUserError;

// export const getProductsLoading = () => (state) => state.products.isLoading;

export default usersReducer;
