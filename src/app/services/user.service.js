import httpService from './http.service';
// import localStorageservice from "./localStorage.service";
const userEndpoint = 'users/';

const userService = {
    get: async (lim) => {
        const { data } = await httpService.get(
            userEndpoint,
            lim !== undefined
                ? {
                      params: {
                          limit: lim,
                      },
                  }
                : null,
        );
        return data;
    },

    // create: async (payload) => {
    //     const { data } = await httpService.put(userEndpoint + payload._id, payload);
    //     return data;
    // },
    // me: async () => {
    //     const { data } = await httpService.get(
    //         userEndpoint + localStorageservice.getUserId()
    //     );
    //     return data;
    // },
    // updateUser: async (payload) => {
    //     const { data } = await httpService.patch(
    //         userEndpoint + localStorageservice.getUserId(),
    //         payload
    //     );
    //     return data;
    // }
};

export default userService;
