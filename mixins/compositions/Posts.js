import {ref, computed} from "@vue/composition-api";
import Post from '@/store/models/Post'

function retrieveById(id, retriever) {
    const post = computed(() => {
        let result = Post.find(id);

        if (!result)
            retriever();

        return result
            ? result
            : new Post
    });

    return {
        post
    };
}

function retrieveAll(retriever, accessor) {
    let postsLoading = ref(true);

    retriever.finally(() => postsLoading.value = false);

    const posts = computed(accessor);

    return {
        postsLoading,
        posts
    };
}

export function showPost(id) {
    return retrieveById(id, () => Post.api().show(id));
}

export function allPosts(id) {
    return retrieveAll(
        Post.api().all(),
        () => {
            return Post.query()
                .whereHas('user', (query) => {
                    query.where('id', id);
                })
                .all()
        })
}

export function showPublishedPost(id, callback) {
    const post = computed(() => {
        const result = Post
            .query()
            .with('user')
            .find(id);

        const nbPosts = Post.all().length;

        if(!result && nbPosts)
            callback();

        return result
            ? result
            : new Post
    });

    return {
        post
    };
}

export function allPublishedPosts(slug) {
    const posts = computed(() => {
        return Post.query()
            .with('user')
            .where((post) => {
              return Date.parse(post.publish_at) < Date.now();
            })
            .whereHas('user', (query) => {
              query.where('slug', slug);
            })
            .all()
    });

    return {
        posts
    };
}
