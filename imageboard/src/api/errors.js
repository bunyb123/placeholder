import api from './index';

// here we can add something before every request is sent
api.interceptors.request.use(function (config) {
        // if success
        return config;
    }, function (error) {
        // if error
        return Promise.reject(error);
    }
);

// and here we can add something before every response is handled
api.interceptors.response.use(function (response) {
        // if success (200-299 HTTP status codes)
        return response;
    }, function (error) {
        // if error - anything else
        if (error.response.status === 404) {
            // not found!! :(
        }
        return Promise.reject(error);
    }
);