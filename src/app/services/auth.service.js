import axios from 'axios';
// import localStorageservice from './localStorage.service';
import httpService from './http.service';

const loginEndpoint = 'auth/login/';

const authService = {
    // register: async ({ email, password }) => {
    //     const { data } = await httpAuth.post("accounts:signUp", {
    //         email,
    //         password,
    //         returnSecureToken: true
    //     })
    //     return data
    // },
    login: async (user) => {
        console.log(user);
        const { data } = await httpService.post(loginEndpoint, {
            username: user.username,
            password: user.password,
        });
        return data;
    },
    // refresh: async () => {
    //     const { data } = await httpAuth.post('token', {
    //         grant_type: 'refresh_token',
    //         refresh_token: localStorageservice.getRefreshToken(),
    //     });
    //     return data;
    // },
};

export default authService;
