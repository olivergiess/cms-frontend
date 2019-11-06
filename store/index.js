import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import {JsonAPIConverter} from '@/mixins/helpers/JsonAPIConverter'

import User from '@/mixins/models/User'
import Post from '@/mixins/models/Post'

VuexORM.use(VuexORMAxios, {
    dataTransformer: function (response) {
        if(response.data === null)
            return;

        return new JsonAPIConverter(response);
    }
});

const database = new VuexORM.Database();

database.register(User);
database.register(Post);

export const plugins = [VuexORM.install(database)];

export const strict = false;
