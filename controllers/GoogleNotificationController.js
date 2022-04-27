const {response} = require('express');
const GoogleNotification = require('../models/GoogleNotification');


//INDEX

const index = (req,res) => {
  GoogleNotification.find().sort({createdAt:-1})
  .then(response=>{
    if(response.length>0){
      res.json({
        response:true,
        data:response
      })
    }else{
      res.json({
        response:false,
        data:response
      })
    }
  })
}

//STORE DATA
const store = (req,res) => {

  var body = req.body;

  var data = new GoogleNotification();
  data.name = body.name;
  data.email = body.email;
  data.contact = body.contact;
  data.save((err,doc)=>{
    if(!err){
      res.json({
        response:true
      })
    }else{
      res.json({
        response:false
      })
    }
  })
}

//DELETE DATA
const deleteid = (req,res) => {
  GoogleNotification.findByIdAndRemove(req.params.id,(err,doc)=>{
    if(!err){
      res.json({
        response:'true'
      })
    }else{
      res.json({
        response:'false'
      })
    }
  })


}

module.exports = {index,store,deleteid}
