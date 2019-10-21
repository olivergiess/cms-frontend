import { Model } from '@vuex-orm/core'
import User from './User'

export default class Post extends Model {
  static entity = 'posts'

  static primaryKey = 'id'

  static fields () {
    return {
      id: this.increment(),
      title: this.string(''),
      body: this.string(''),
      publish_at: this.string(''),
      user: this.belongsTo(User, 'user_id')
    }
  }

  static apiConfig = {
    actions: {
      fetchPublished(user) {
        return this.get(`users/${user}/published`);
      },
      fetch() {
        return this.get(`posts`);
      },
      show(id) {
        return this.get(`posts/${id}`);
      },
      create(data) {
        return this.post(`posts`, data);
      },
      update(id, data) {
        return this.put(`posts/${id}`, data);
      }
    }
  };
}
