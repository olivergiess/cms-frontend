export default function ({ $axios, store, redirect }) {
  $axios.onRequest(config => {
    const token = store.state.auth.access_token

    if (token)
      config.headers.common['Authorization'] = `Bearer ${token}`
  })
}
