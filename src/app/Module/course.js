const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema

mongoose.plugin(slug)
const BlogPost = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    Image: { type: String },
    slug: { type: String, slug:'name', unique:true },
    videoID: { type: String, required: true },
    level: { type: String },

},
    {
        timestamps: true,
        collection: 'course'
    }
)

BlogPost.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidtype = ['asc', 'desc'].includes(req.query.type)
        return this.sort({
            [req.query.column]: isValidtype ? req.query.type : 'desc',
        })
    }
    return this
}

BlogPost.plugin(mongooseDelete,{
    deletedAt: true,
    overrideMethods: 'all',
}) 


module.exports = mongoose.model('course', BlogPost)