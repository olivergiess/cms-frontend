<script>
    import BasePostForm from './BasePostForm'
    import Post from '@/models/Post'

    export default {
        extends: BasePostForm,
        data: () => {
            return {
                prefix: 'Create'
            }
        },
        methods: {
            action() {
                return Post.$create({
                    data: this.post
                })
            }
        }
    }
</script>