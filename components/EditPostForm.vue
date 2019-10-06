<script>
    import BasePostForm from './BasePostForm'
    import Post from '@/models/Post'

    export default {
        extends: BasePostForm,
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