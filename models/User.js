const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sharp = require('sharp');

const usersSchema = new Schema({
  name:{
    type:String
  },
  email:{
    type:String
  },
  email_verify:{
    type:String
  },
  email_code:{
    type:String
  },
  image:{
    type:String
  },
  imagethumb:{
    type:String
  },
  imagemedium:{
    type:String
  },
  imagelarge:{
    type:String
  },
  contact:{
    type:String
  },
  password:{
    type:String
  },
  usertype:{
    type:String
  },
  city:{
    type:String
  },
  state:{
    type:String
  },
  country:{
    type:String
  }
},{timestamps:true});

const User = mongoose.model('User',usersSchema);
module.exports = User;
