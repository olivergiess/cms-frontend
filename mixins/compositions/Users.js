import {computed} from "@vue/composition-api";
import User from '@/mixins/models/User'

function retrieveBySlug(slug, retriever) {
  const user = computed(() => {
    let result = User.query()
      .where('slug', slug)
      .first();

    if (!result)
      retriever();

    return result
      ? result
      : new User
  });

  return {
    user
  };
}

export function showUserBySlug(slug, onError) {
  return retrieveBySlug(slug, () => User.api().showBySlug(slug).catch(onError));
}
