export default ({app}) => {
  app.$axios.interceptors.response.use(
    undefined,
    async (error) => {
      let res = error.response;

      if (res.status !== 401) {
        return error
      }

      app.$axios.$post('auth/refresh')
        .then(tokenResponse => {
          console.log(tokenResponse);
          let token = 'Bearer ' + tokenResponse.data.access_token;

          app.$auth.setToken('local', token);

          error.config.headers.Authorization = token;

          return app.$axios(error.config);
        })
        .catch((tokenError) => {
          app.$auth.reset();

          return error;
        })
    }
  )
}
