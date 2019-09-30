import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import database from './database'

Vue.use(Vuex)

VuexORM.use(VuexORMAxios, {
  database,
  http: {
    baseURL: 'http://cms.api/api/',
    access_token: () => { }
  }
})

export default () => new Vuex.Store({
  plugins: [
    VuexORM.install(database)
  ]
})
