const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const blogSchema= new Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    content: {type: String, required: true},
    short_description: {type: String, required: true},
    category: {type: String, required: true},
},
{
    timestamps: true,
});

const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;