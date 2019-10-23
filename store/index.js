import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'

import User from '@/models/User'
import Post from '@/models/Post'

VuexORM.use(VuexORMAxios, {
    dataTransformer: function (response) {
        let data = response.data;

        if(!data.relationships)
            return data;

        for(var relationship in data.relationships) {
            data[relationship] = data.relationships[relationship].data;
        }

        delete data.relationships;

        return data;
    }
});

const database = new VuexORM.Database();

database.register(User);
database.register(Post);

export const plugins = [VuexORM.install(database)];

export const strict = false;
