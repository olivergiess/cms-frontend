import {computed} from "@vue/composition-api";
import Post from '@/mixins/models/Post';

export const showPostByUser = user_id => id => {
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
        post
    };
};

export const allPostsByUser = user_id => {
    const posts = computed(() => {
        return Post.query()
            .whereHas('user', query =>
                query.where('id', user_id)
            )
            .all()
    });

    return {
        posts
    };
};