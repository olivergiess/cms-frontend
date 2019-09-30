import { Database } from '@vuex-orm/core'
import Post from '@/models/Post'

const database = new Database()

database.register(Post)

export default database
