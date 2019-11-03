<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'mdi-home',
                        title: 'Home',
                        to: '/admin'
                    },
                    {
                        icon: 'mdi-wall',
                        title: 'Blog',
                        to: '/' + this.$auth.user.slug
                    },
                    {
                        icon: 'mdi-notebook',
                        title: 'Posts',
                        to: '/admin/posts'
                    },
                ],
            }
        }
    }
</script>
