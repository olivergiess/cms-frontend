import User from '~/mixins/models/User'

const DEFAULTS = {
  tokenName: 'Authorization',
  tokenType: 'Bearer',
  expiresConversion: 1000,
  endpoints: {
    login: false,
    refresh: false,
    logout: false,
    user: {}
  }
}

export default class CustomScheme {
  constructor (auth, options) {
    this.$auth = auth
    this.name = options._name

    this.options = Object.assign({}, DEFAULTS, options)

    this._validateConfig()
  }

  async mounted () {
    const token = this.$auth.syncToken(this.name)
    this._setToken(token)

    if (token) {
      await this.refresh()

      return this.$auth.fetchUserOnce()
    }
  }

  async login (endpoint) {
    await this._logoutLocally()

    const result = await this.$auth
      .request(endpoint, this.options.endpoints.login)

    this._handleTokenResponse(result)

    return this.fetchUser()
  }

  async refresh () {
    const result = await this.$auth
      .requestWith(this.name, {}, this.options.endpoints.refresh)

    this._handleTokenResponse(result)
  }

  async logout (endpoint) {
    await this.$auth
      .requestWith(this.name, endpoint, this.options.endpoints.logout)
      .catch(() => {})

    return this._logoutLocally()
  }

  async fetchUser (endpoint) {
    if (!this.$auth.getToken(this.name)) {
      return
    }

    const result = await User.api().showCurrent()

    const id = result.response.data.data.id

    const user = User.find(id)

    this.$auth.setUser(user)
  }

  _validateConfig () {

    if (!this.options.endpoints.login) {
      throw new Error('@nuxtjs/auth Custom Scheme requires the Login endpoint to be configured.')
    }

    if (!this.options.endpoints.refresh) {
      throw new Error('@nuxtjs/auth Custom Scheme requires the Refresh endpoint to be configured.')
    }

    if (!this.options.endpoints.logout) {
      throw new Error('@nuxtjs/auth Custom Scheme requires the Logout endpoint to be configured.')
    }

    if (!this.options.endpoints.user) {
      throw new Error('@nuxtjs/auth Custom Scheme requires the User endpoint to be configured.')
    }
  }

  _handleTokenResponse (res) {
    const token = this.options.tokenType + ' ' + res.access_token

    this.$auth.setToken(this.name, token)
    this._setToken(token)

    const expiresIn = res.expires_in * this.options.expiresConversion

    setTimeout(() => this.refresh(), expiresIn)
  }

  _setToken (token) {
    this.$auth.ctx.app.$axios.setHeader(this.options.tokenName, token)
  }

  async _logoutLocally () {
    this._clearToken()

    return this.$auth.reset()
  }

  _clearToken () {
    this.$auth.ctx.app.$axios.setHeader(this.options.tokenName, false)
  }
}
