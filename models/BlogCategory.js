const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogCategorySchema = new Schema({
  name:{
    type:String
  },
  url:{
    type:String
  },
  description:{
    type:String
  },
  metatitle:{
    type:String
  },
  metadesc:{
    type:String
  },
  image:{
    type:String
  },
  imagethumb:{
    type:String
  },
  imagesmall:{
    type:String
  }
},{timestamps:true});

const BlogCategory = mongoose.model('BlogCategory',blogCategorySchema);
module.exports = BlogCategory;
