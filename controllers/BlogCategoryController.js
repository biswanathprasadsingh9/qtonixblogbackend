const {response} = require('express');
const BlogCategory = require('../models/BlogCategory');
const sharp = require('sharp');
const { uuid } = require('uuidv4');
const fs = require('fs');


//SHOW ALL BLOG CATEGORIES
const index = (req,res) => {
  BlogCategory.find().sort({createdAt:-1})
  .then(response=>{
    res.json({
      response
    })
  })
  .catch({
    response:'false'
  })
}

//VIEW
const view = (req,res) => {
  BlogCategory.findOne({_id:req.params.id},(err,doc)=>{
    if(!err){
      res.json({
        response:'true',
        data:doc
      })
    }else{
      res.json({
        response:'false'
      })
    }
  })
}

const viewcategoryname = (req,res) => {

  BlogCategory.findOne({name:req.params.categoryname.replace(/\b\w/g, l => l.toUpperCase())},(err,doc)=>{
    if(!err){
      res.json({
        response:'true',
        data:doc,
      })
    }else{
      res.json({
        response:'false'
      })
    }
  })
}

//STORE BLOG
const store = (req,res) => {

    sharp(req.file.path).rotate().resize(400, 270).toFile('uploads/blogcategoryimages/' + 'thumbnails-' + req.file.filename, (err, resizeImage) => {
      if (err) {
        console.log(err);
      } else {
        console.log(resizeImage);
      }
    })

    sharp(req.file.path).rotate().resize(120, 120).toFile('uploads/blogcategoryimages/' + 'imagesmall-' + req.file.filename, (err, resizeImage) => {
      if (err) {
        console.log(err);
      } else {
        console.log(resizeImage);
      }
    })

    var urlLower = req.body.name.toLowerCase();
    var url = urlLower.replace(/ /g,'-');

    var blogcat = new BlogCategory();
    blogcat.name= req.body.name;
    blogcat.metatitle= req.body.metatitle;
    blogcat.metadesc= req.body.metadesc;
    blogcat.url= '/blogs/'+url;
    blogcat.description= req.body.description;
    blogcat.image= req.file.path;
    blogcat.imagethumb= 'uploads/blogcategoryimages/' + 'thumbnails-' + req.file.filename;
    blogcat.imagesmall= 'uploads/blogcategoryimages/' + 'imagesmall-' + req.file.filename;
    blogcat.save((err,doc)=>{
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


//UPDATE
const update = (req,res) => {

  if(req.file){
    sharp(req.file.path).rotate().resize(400, 270).toFile('uploads/blogcategoryimages/' + 'thumbnails-' + req.file.filename, (err, resizeImage) => {
      if (err) {
        console.log(err);
      } else {
        console.log(resizeImage);
      }
    })

    sharp(req.file.path).rotate().resize(120, 120).toFile('uploads/blogcategoryimages/' + 'imagesmall-' + req.file.filename, (err, resizeImage) => {
      if (err) {
        console.log(err);
      } else {
        console.log(resizeImage);
      }
    })

  }


  var id = req.body.id;

  var urlLower = req.body.name.toLowerCase();
  var url = urlLower.replace(/ /g,'-');


  let updateData = {
    name:req.body.name,
    url:'/blogs/'+url,
    description:req.body.description,
    metatitle: req.body.metatitle,
    metadesc: req.body.metadesc
  }


  if(req.file){
    updateData.image= req.file.path;
    updateData.imagethumb= 'uploads/blogcategoryimages/' + 'thumbnails-' + req.file.filename;
    updateData.imagesmall= 'uploads/blogcategoryimages/' + 'imagesmall-' + req.file.filename;
  }

  BlogCategory.findByIdAndUpdate(id,{$set:updateData})
  .then(response=>{
    res.json({
      response:'true'
    })
  })

}


//DELETE
const deletebc = (req,res) => {
  BlogCategory.findOne({_id:req.params.id},(err,doc)=>{
    if(!err){
        //REMOVE IMAMGES
        fs.unlink(doc.image, (err) => {
            if (err) {
              console.log("failed to delete local image:"+err);
            } else {
              console.log('successfully deleted local image');
            }
        });
        fs.unlink(doc.imagethumb, (err) => {
            if (err) {
              console.log("failed to delete local image:"+err);
            } else {
              console.log('successfully deleted local image');
            }
        });
        fs.unlink(doc.imagesmall, (err) => {
            if (err) {
              console.log("failed to delete local image:"+err);
            } else {
              console.log('successfully deleted local image');
            }
        });
        //DELETE DATA
        BlogCategory.findByIdAndRemove(req.params.id, (err,doc) => {
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
    }else{
      res.json({
        response:'false'
      })
    }
  })
}

module.exports = {
  index,view,store,update,deletebc,viewcategoryname
}
