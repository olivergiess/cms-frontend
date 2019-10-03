import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import database from '~/store/database'

export default ({ app }) => {
  VuexORM.use(VuexORMAxios, {
    database,
    http: {
      axios: app.$axios,
      onResponse(response) {
        if(response.data != undefined)
          return response.data.data;

        return response;
      }
    }
  })

  new Vuex.Store({
    plugins: [
      VuexORM.install(database)
    ]
  })
}
