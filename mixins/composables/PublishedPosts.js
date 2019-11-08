import {ref, computed} from '@vue/composition-api';
import Post from '@/mixins/models/Post';

export const showPublishedPostForUser = slug => id => {
    const loading = ref(false);

    if(!Post.find(id)) {
        loading.value = true;

        Post.api()
            .showPublished(slug, id)
            .catch(() => redirect(`/${slug}`))
            .finally(() => loading.value = false);
    }

    const post = computed(() => {
        let post = Post.query()
            .whereHas('user', query =>
                query.where('slug', slug)
            )
            .find(id);

        return post
            ? post
            : new Post
    });

    return {
        loading,
        post
    };
};

export const allPublishedPostsForUser = slug => {
    const posts = computed(() => {
        return Post.query()
            .where(post => {
                return Date.parse(post.publish_at) < Date.now();
            })
            .with('user')
            .whereHas('user', query =>
                query.where('slug', slug)
            )
            .all()
    });

    return {
        posts
    };
};
