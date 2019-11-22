// eslint-disable-next-line no-unused-vars
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import { JsonAPIConverter } from '~/helpers/JsonAPIConverter'

import User from '~/models/User'
import Blog from '~/models/Blog'
import Post from '~/models/Post'

VuexORM.use(VuexORMAxios, {
  dataTransformer: (response) => {
    if (response.data === null) {
      return
    }

    return JsonAPIConverter(response)
  }
})

const database = new VuexORM.Database()

database.register(User)
database.register(Blog)
database.register(Post)

export const plugins = [VuexORM.install(database)]

export const strict = false
