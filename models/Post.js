import { Model } from '@vuex-orm/core'

export default class Post extends Model {
  static entity = 'posts'

  static fields () {
    return {
      id: this.increment(),
      title: this.string(''),
      body: this.string(''),
      publish_at: this.string('')
    }
  }

  static methodConf = {
    http: {
      url: '/posts'
    },
    methods: {
      $fetch: {
        name: 'fetch',
        http: {
          url: '',
          method: 'get',
        },
      },
      $get: {
        name: 'get',
        http: {
          url: '/:id',
          method: 'get',
        },
      },
      $create: {
        name: 'create',
        http: {
          url: '',
          method: 'post',
        },
      },
      $update: {
        name: 'update',
        http: {
          url: '/:id',
          method: 'put',
        },
      },
      $delete: {
        name: 'delete',
        http: {
          url: '/:id',
          method: 'delete',
        },
      },
    },
  }
}
