export const state = () => ({
  slug: ''
})

export const mutations = {
  set (state, slug) {
    state.slug = slug
  },
  reset (state) {
    state.slug = ''
  }
};

export const getters = {
  get: state => {
    return state.slug
      ? state.slug
      : ''
  }
}


