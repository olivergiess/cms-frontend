export default function ({ store, redirect }) {
  if (!store.state.auth.access_token) {
    return redirect('/login');
  }
}
