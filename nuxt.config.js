const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loadingIndicator: {
    name: 'circle',
    color: 'rgb(25, 118, 210)',
    background: '#fff'
  },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/mixins/plugins/axios-refresh-interceptor.js',
    '@/mixins/plugins/tip-tap-vuetify.js',
    '@/mixins/plugins/vue-composition-api.js',
    '@/mixins/plugins/vuex-orm-plugin-axios.js',
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  axios: {
      prefix: '/api/',
      host: 'cms-backend.test',
      port: 80
  },

  auth: {
    redirect: {
      login: '/login',
      home: '/admin',
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: 'auth/login', method: 'post', propertyName: 'access_token' },
          logout: { url: 'auth/logout', method: 'post' },
          user: { url: 'user/current', method: 'get', propertyName: '' }
        }
      }
    }
  },

  router: {
    middleware: [
      'auth'
    ]
  },

  /*
  ** Vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
