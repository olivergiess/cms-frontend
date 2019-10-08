<script>
    import Form from './Form'
    import Post from '@/models/Post'

    export default {
        extends: Form,
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
