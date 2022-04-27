const express = require('express');
const router = express.Router();

const path = require('path');
const multer = require('multer');

const BlogCategoryController = require('../controllers/BlogCategoryController');
const { uuid } = require('uuidv4');

const storage = multer.diskStorage({
  destination:'./uploads/blogcategoryimages',
  filename:(req,file,cb)=>{
    return cb(null, `${uuid()}${path.extname(file.originalname)}`)

  }
})

const upload = multer({
  storage:storage
})

router.get('/',BlogCategoryController.index);
router.get('/:id',BlogCategoryController.view);
router.get('/view/:categoryname',BlogCategoryController.viewcategoryname);

router.post('/',upload.single('image'),BlogCategoryController.store);
router.post('/update',upload.single('image'),BlogCategoryController.update);
router.patch('/:id',BlogCategoryController.deletebc);



module.exports = router;
