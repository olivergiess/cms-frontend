<script>
import AppForm from '~/components/ui/forms/AppForm'

export default {
  components: {
    AppForm
  },
  data () {
    return {
      loading: false,
      redirectTo: '',
      form: {
        data: {},
        errors: {}
      }
    }
  },
  methods: {
    submit () {
      this.loading = true

      this.action()
        .then(() => {
          this.$router.push(this.redirectTo)
        })
        .catch((error) => {
          const errors = error.response.data.errors

          for (const field in this.form.errors) {
            if (errors[field] !== undefined) {
              this.form.errors[field] = errors[field]
            }
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
    action () {
      return Promise.reject(Error('Form Action must be defined.'))
    }
  }
}
</script>
