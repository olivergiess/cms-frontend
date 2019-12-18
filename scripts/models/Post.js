import moment from 'moment'
import { Model } from '@vuex-orm/core'
import Blog from './Blog'

export default class Post extends Model {
  static entity = 'posts'

  static primaryKey = 'id'

  static fields () {
    return {
      id: this.increment(),
      title: this.string(''),
      cover_image: this.string(''),
      body: this.string(null),
      publish_at: this.string(''),
      updated_at: this.string(''),
      blog_id: this.number(null),
      blog: this.belongsTo(Blog, 'blog_id')
    }
  }

  get formattedPublishAt () {
    return moment(this.publish_at).format('Do MMM YYYY')
  }

  get formattedUpdatedAt () {
    return moment(this.updated_at).format('Do MMM YYYY')
  }

  static apiConfig = {
    actions: {
      create (data) {
        return this.post(`posts`, data)
      },
      update (id, data) {
        return this.put(`posts/${id}`, data)
      }
    }
  }
}
