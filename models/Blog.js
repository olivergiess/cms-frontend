import { Model } from '@vuex-orm/core'
import User from './User'
import Post from './Post'

export default class Blog extends Model {
  static entity = 'blogs'

  static primaryKey = 'id'

  static fields () {
    return {
      id: this.increment(),
      url_identifier: this.string(''),
      name: this.string(''),
      cover_image: this.string(''),
      about: this.string(''),
      created_at: this.string(''),
      updated_at: this.string(''),
      user: this.belongsTo(User, 'user_id'),
      posts: this.hasMany(Post, 'blog_id')
    }
  }
}
