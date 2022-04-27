const {response} = require('express');
const Page = require('../models/Page');

//SHOW ALL PAGES
const index = (req,res) => {
  Page.find().sort({createdAt:-1})
  .then(response=>{
    if(response.length>0){
      res.json({
        response:true,
        data:response
      })
    }else{
      res.json({
        response:false,
        data:'No records found'
      })
    }
  })
}


//VIEW PAGE BY URL
const viewpagebyurl = (req,res) => {

  var url='/'+req.params.pageurl;

  Page.findOne({url:url},(err,doc)=>{
    if(!err){
      res.json({
        response:true,
        data:doc
      })
    }else{
      res.json({
        response:false,
        data:false
      })
    }
  })


}


//VIEW PAGE
const view = (req,res) => {
  Page.findById(req.params.id,(err,doc)=>{
    if(!err){
      res.json({
        response:true,
        data:doc
      })
    }else{
      res.json({
        response:false,
        data:'No records found'
      })
    }
  })
}


//UPDATE PAGE
const update = (req,res) => {

  var urlLower = req.body.name.toLowerCase();
  var url = urlLower.replace(/ /g,'-');

  let updateData = {
    name:req.body.name,
    content:req.body.content,
    metatitle:req.body.metatitle,
    metadescription:req.body.metadescription,
    metakey:req.body.metakey,
    // url:url
  }

  Page.findByIdAndUpdate(req.params.id, {$set:updateData})
  .then(response=>{
    res.json({
      response:true,
      message:'Successfully updated'
    })
  })
}


//CREATE PAGE
const store = (req,res) => {

  // var urlLower = req.body.name.toLowerCase();
  // var url = urlLower.replace(/ /g,'-');

  var page = new Page();
  page.name = req.body.name;
  page.url = '/'+req.body.url;
  page.content = req.body.content;
  page.metatitle = req.body.metatitle;
  page.pagetype = req.body.pagetype;
  page.metadescription = req.body.metadescription;
  page.metakey = req.body.metakey;
  page.save((err,doc)=>{
    if(!err){
      res.json({
        response:'true',
        message:'Successfully created'
      })
    }else{
      res.json({
        response:'false',
        message:'Failed'
      })
    }
  })

}


//DELETE PAGE
const remove = (req,res) => {
  Page.findByIdAndRemove(req.params.id,(err,doc)=>{
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

module.exports = {index,view,store,update,remove,viewpagebyurl};
