import { Model } from '@vuex-orm/core'

export default class Published extends Model {
  static entity = 'published'

  static primaryKey = 'id'

  static fields () {
    return {
      id: this.increment(),
      title: this.string(''),
      body: this.string(''),
      publish_at: this.string(''),
      created_at: this.string(''),
      updated_at: this.string(''),
    }
  }

  static methodConf = {
    http: {
      url: '/posts/published'
    },
    methods: {
      $fetch: {
        name: 'fetch',
        http: {
          url: '/:slug',
          method: 'get',
        },
      },
    },
  }
}
