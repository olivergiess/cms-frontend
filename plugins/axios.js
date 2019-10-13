export default ({app}) => {
    app.$axios.interceptors.response.use(
        undefined,
        function (error) {
            const status = error.response ? error.response.status : null

            if (status === 401) {
                return app.$axios.post('auth/refresh')
                    .then(
                        (refreshSuccess) => {
                            let token = 'Bearer ' + refreshSuccess.data.access_token;

                            let request = error.config;

                            request.headers['Authorization'] = token;

                            app.$auth.setToken('local', token);

                            return Promise.resolve(app.$axios.request(request));
                        })
                    .catch(
                        (refreshError) => {
                            return Promise.reject(error);
                        }
                    );
            }

            return Promise.reject(error);
        }
    )
}


