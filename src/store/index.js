import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    repos: []
  },
  mutations: {
    SET_REPOS(state, repos) {
      state.repos = repos
    }
  },
  actions: {
    getRepos({ commit }) {
        axios.get('https://api.github.com/users/jose-27/repos')
            .then(response => {
                commit('SET_REPOS', response.data)
        })
    }
  },
  getters:{
   allRepos: (state) => state.repos
  }
})
