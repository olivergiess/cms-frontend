import { Database } from '@vuex-orm/core'
import User from '@/models/User'
import Post from '@/models/Post'
import Published from '@/models/Published'

const database = new Database()

database.register(User)
database.register(Post)
database.register(Published)

export default database
