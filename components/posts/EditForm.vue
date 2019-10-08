<script>
    import Form from './Form'
    import Post from '@/models/Post'

    export default {
        extends: Form,
        data: () => {
            return {
                prefix: 'Edit'
            }
        },
        methods: {
            action() {
                return Post.$update({
                    params: {
                        id: this.post.id
                    },
                    data: this.post
                })
            }
        }
    }
</script>
