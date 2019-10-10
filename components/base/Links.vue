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
                        icon: 'mdi-rss',
                        title: 'Blog',
                        to: 'http://google.com'
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
