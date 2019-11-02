export default ({app}) => {
  app.$axios.interceptors.response.use(response => response.data,
    function (error) {
      const status = error.response ? error.response.status : null;

      if (status === 401) {
        return app.$axios.post('auth/refresh')
          .then(
            (refreshSuccess) => {
              let token = 'Bearer ' + refreshSuccess.data.access_token;

              app.$auth.setToken('local', token);
              app.$axios.setHeader('Authorization', token);

              let replay = error.config;
              replay.headers['Authorization'] = token;

              return Promise.resolve(app.$axios.request(replay));
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


