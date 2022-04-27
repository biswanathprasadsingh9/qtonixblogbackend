const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  menu:{
    type:Array
  }
},{timestamps:true});

const Menu = mongoose.model('Menu',menuSchema);
module.exports = Menu;
