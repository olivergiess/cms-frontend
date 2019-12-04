export default {
  mode: 'spa',
  generate: {
    fallback: true
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Oliver Giess CMS',
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
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/tip-tap-vuetify.js',
    '~/plugins/vuex-orm-plugin-axios.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  axios: {
    https: true,
    host: 'cms.olivergiess.com',
    port: 443,
    prefix: '/api/'
  },
  auth: {
    redirect: {
      login: '/login',
      home: '/'
    },
    strategies: {
      local: {
        _scheme: '~/app/customScheme.js',
        endpoints: {
          login: { url: 'auth/login', method: 'post', propertyName: 'data' },
          logout: { url: 'auth/logout', method: 'post' },
          refresh: { url: 'auth/refresh', method: 'post', propertyName: 'data' },
          user: { url: 'user/current?expand=blogs.posts', method: 'get', propertyName: 'data' }
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
    customVariables: ['~/assets/variables.scss']
  }
}
