const state = () => ({
  access_token: null,
  expires_at: null,
})

export const actions = {
  login({ commit }, credentials) {
    this.$axios.post("/login", credentials)
      .then(({ data }) => {
        const auth = {
          access_token: data.data.access_token,
          expires_at: true
        }

        commit("SAVE_AUTH", auth)
      })
      .catch()
  },
};

export const mutations = {
  SAVE_AUTH(state, auth) {
    state.access_token = auth.access_token
    state.expires_at = auth.expires_at
  },
  RESET_AUTH(state) {
    state.auth = null
  },
}

export const getters = {
  isAuthenticated(state) {
    return !!state.auth
  },
  accessToken(state) {
    return state.auth.access_token
  }
}
