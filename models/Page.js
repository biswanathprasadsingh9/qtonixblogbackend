const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pageSchema = new Schema({
  name:{
    type:String
  },
  url:{
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
  pagetype:{
    type:String
  }
},{timestamps:true});

const Page = mongoose.model('Page',pageSchema);
module.exports = Page;
