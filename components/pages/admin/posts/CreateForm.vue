<script>
    import Form from './Form'
    import Post from '@/store/models/Post'

    export default {
        extends: Form,
        data: () => {
            return {
                prefix: 'Create'
            }
        },
        methods: {
            action() {
                return Post.api().create(this.post);
            }
        }
    }
</script>
