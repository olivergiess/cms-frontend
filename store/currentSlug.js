export const state = () => ({
  slug: false
})

export const mutations = {
  set (state, slug) {
    state.slug = slug
  },
  reset (state) {
    state.slug = false
  }
};

export const getters = {
  get: state => {
    return state.slug
      ? state.slug
      : ''
  }
}


