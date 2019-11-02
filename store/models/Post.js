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
      user: this.belongsTo(User, 'user_id'),
      user_id: this.number(null)
    }
  }

  static apiConfig = {
    actions: {
      allPublished(slug) {
        return this.get(`/posts/published?expand=user&filter[user.slug]=${slug}`);
      },
      showPublished(id) {
        return this.get(`/posts/published/${id}?expand=user`);
      },
      all() {
        return this.get(`posts?expand=user`);
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
