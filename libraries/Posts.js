import {ref, computed} from "@vue/composition-api";
import Post from '@/models/Post'

export function retrievePost(id) {
  const post = computed(() => {
    let result = Post.find(id);

    if (!result)
      Post.api().show(id);

    return result
      ? result
      : new Post
  });

  return {
    post
  };
}

export function retrievePosts() {
  let postsLoading = ref(true);

  Post.api()
    .fetch()
    .finally(() => postsLoading.value = false);

  const posts = computed(() => {
    let result = Post.all();

    return result;
  });

  return {
    postsLoading,
    posts
  };
}

export function retrievePublished(slug) {
  let postsLoading = ref(true);

  Post.api()
    .fetchPublished()
    .finally(() => postsLoading.value = false);

  const posts = computed(() => {
    let result = Post.query()
      .where((post) => {
        return Date.parse(post.publish_at) < Date.now();
      })
      .with('user', (query) => {
        query.where('slug', this.slug);
      })
      .all();

    return result;
  });

  return {
    postsLoading,
    posts
  };
}
