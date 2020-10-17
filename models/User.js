const { model, Schema } = require('mongoose')

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    bio: String,
    password: { type: String, required: true},
    topics: [String]
})

UserSchema.plugin(require('passport-local-mongoose'))

module.exports = model('User', UserSchema)