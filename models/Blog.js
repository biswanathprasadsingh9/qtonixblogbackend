const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogsSchema = new Schema({
  blogurl:{
    type:String
  },
  categoryurl:{
    type:String
  },
  totalurl:{
    type:String
  },
  title:{
    type:String
  },
  description:{
    type:String
  },
  category:{
    type:String
  },
  imagethumb:{
    type:String
  },
  imagesmall:{
    type:String
  },
  image:{
    type:String
  },
  content:{
    type:String
  },
  metatitle:{
    type:String
  },
  metadescription:{
    type:String
  },
  metakey:{
    type:String
  },
  auth_email:{
    type:String
  },
  auth_id:{
    type:String
  }
},{timestamps:true});

const Blog = mongoose.model('Blog',blogsSchema);
module.exports = Blog;
