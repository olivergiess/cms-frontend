import {ref, computed} from "@vue/composition-api";
import Post from '@/mixins/models/Post';

export const showPostByUser = user_id => id => {
    const loading = ref(false);

    if(!Post.find(id)) {
        loading.value = true;

        Post.api()
            .show(id)
            .catch(() => redirect('/admin/posts'))
            .finally(() => loading.value = false);
    }

    const post = computed(() => {
        let post = Post.query()
            .whereHas('user', query =>
                query.where('id', user_id)
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

export const allPostsByUser = user_id => {
    const loading = ref(true);

    Post.api()
      .all()
      .finally(() => loading.value = false);

    const posts = computed(() => {
        return Post.query()
            .whereHas('user', query =>
                query.where('id', user_id)
            )
            .all()
    });

    return {
        loading,
        posts
    };
};
