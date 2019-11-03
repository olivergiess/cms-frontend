<script>
    import Form from './Form'
    import Post from '@/store/models/Post'

    export default {
        extends: Form,
        data: () => {
            return {
                prefix: 'Edit'
            }
        },
        methods: {
            action() {
                return Post.api().update(this.post.id, this.form.data);
            }
        }
    }
</script>
