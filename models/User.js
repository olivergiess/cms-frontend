import {Model} from '@vuex-orm/core'
import Post from './Post'

export default class User extends Model {
  static entity = 'users'

  static primaryKey = 'id'

  static fields() {
    return {
      id: this.increment(),
      first_name: this.string(''),
      last_name: this.string(''),
      email: this.string(''),
      slug: this.string(''),
      posts: this.hasMany(Post, 'user_id')
    }
  }

  static methodConf = {
    http: {
      url: '/user/current'
    },
    $get: {
      name: 'get',
      http: {
        url: '',
        method: 'get',
      },
    },
    $update: {
      name: 'update',
      http: {
        url: '',
        method: 'put',
      },
    },
  }
}
