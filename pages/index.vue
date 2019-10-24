<template>
    <LoginForm/>
</template>

<script>
  import LoginForm from '~/components/LoginForm'

  export default {
    layout: 'landing',
    auth: 'guest',
    components: {
      LoginForm
    }
  }
</script>
