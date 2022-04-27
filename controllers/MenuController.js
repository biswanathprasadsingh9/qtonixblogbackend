const {response} = require('express');
const Menu = require('../models/Menu');

//SHOW ALL BLOGS
const index = (req,res) => {
  res.json({
    response:'Working'
  })
}


//STORE
const store = (req,res) => {

  var menu = new Menu();
  menu.menu = req.body.items;
  menu.save((err,doc)=>{
    if(!err){
      res.json({
        response:true,
        message:'Success.'
      })
    }else{
      res.json({
        response:false
      })
    }
  })

}


//VIEW
const view = (req,res) => {
  Menu.findById(req.params.id, (err,doc) => {
    if(!err){
      res.json({
        response:true,
        data:doc
      })
    }else{
      res.json({
        response:false,

      })
    }
  })
}

//UPDATE
const update = (req,res) => {
  let updatedData = {
    menu:req.body.items,
  }

  Menu.findByIdAndUpdate(req.params.id, {$set: updatedData})
  .then(response=>{
    res.json({
      response:true
    })
  })
}


// **MODULE EXPORTS**
module.exports = {
  index,store,view,update
}
