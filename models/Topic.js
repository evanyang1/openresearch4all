const { model, Schema } = require('mongoose')

const TopicSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'author', required: true },
    createdAt: { type: Date, default: Date.now() },
    comments: [{ type: Object }]
})


module.exports = model('Topic', TopicSchema)