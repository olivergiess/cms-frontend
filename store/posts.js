import Vue from 'vue';

export const state = () => ({
  posts: {}
});

export const getters = {
  all: (state) => {
    return state.posts;
  },
  show: (state) => (id) => {
    for (var key in state.posts) {
      if (key == id) {
        return state.props[key];
      }
    }
  },
};

export const mutations = {
  ADD_POST(state, post) {
    Vue.set(state.posts, post.id, post);
  }
};

export const actions = {
  save({ commit }, post){
    this.$axios.$post('posts', post)
      .then((res) => {
        commit('ADD_POST', res.data);

        return true;
      })
      .catch((err) => {
        return false
      });
  },
  get({ commit }, id) {
    this.$axios.$get('posts/' + id)
      .then((res) => {
        commit('ADD_POST', res.data);
      });
  },
  all({ commit }) {
    this.$axios.$get('posts')
      .then((res) => {
        for(var key in res.data) {
         commit('ADD_POST', res.data[key]);
        }
      });
  }
};
