const mongoose = require('mongoose');
const Schema = mongoose.Schema;

constGoogleNotificationSchema = new Schema({
  name:{
    type:String
  },
  email:{
    type:String
  },
  contact:{
    type:String
  },
},{timestamps:true});

const GoogleNotification = mongoose.model('GoogleNotification',constGoogleNotificationSchema);
module.exports = GoogleNotification;
