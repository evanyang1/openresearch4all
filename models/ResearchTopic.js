const { model, schema } = require('mongoose')

const ResearchTopicSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'author', required: true },
    createdAt: { type: Date, default: Date.now() },
    comments: [{ type: Object }]
})


module.exports = mongoose.model('User', UserSchema)