import { Model } from '@vuex-orm/core'
import Blog from './Blog'

export default class User extends Model {
  static entity = 'users'

  static primaryKey = 'id'

  static fields () {
    return {
      id: this.increment(),
      first_name: this.string(''),
      last_name: this.string(''),
      email: this.string(''),
      facebook_user_id: this.string('', val => val === 'null' ? '' : val),
      instagram_handle: this.string('', val => val === 'null' ? '' : val),
      blogs: this.hasMany(Blog, 'user_id')
    }
  }

  /**
   * Get full name of the user.
   */
  get fullName () {
    return `${this.first_name} ${this.last_name}`
  }

  static apiConfig = {
    actions: {
      showCurrent () {
        return this.get(`users/current?expand=blogs.posts`)
      },
      updateCurrent (data) {
        return this.put(`users/current`, data)
      },
      updatePasswordCurrent (data) {
        return this.put(`users/current/password`, data)
      },
      create (data) {
        return this.post(`users`, data)
      }
    }
  }
}
