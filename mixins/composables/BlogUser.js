import {computed} from "@vue/composition-api";
import User from '@/mixins/models/User'

export const showUserBySlug = slug => {
    const user = computed(() => {
        let user = User.query()
            .where('slug', slug)
            .first();

        return user
            ? user
            : new User
    });

    return {
        user
    };
};
