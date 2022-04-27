const express = require('express');
const router = express.Router();

const path = require('path');
const multer = require('multer');
const { uuid } = require('uuidv4');

const BlogController = require('../controllers/BlogController');


const storage = multer.diskStorage({
    destination: './uploads/blogimages',
    filename:(req, file, cb)=>{
      return cb(null, `${uuid()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage:storage
})


router.get('/',BlogController.index);

router.get('/homepage',BlogController.homepage);

router.get('/latest/:no',BlogController.latestblog);

router.get('/category/:categoryname',BlogController.viewcategorylist);

router.get('/:id',BlogController.view);
router.get('/viewbyurl/:url',BlogController.viewbyurl);
router.get('/blogcategory-relatedarticle/:categoryname/:no',BlogController.relatedarticle);



router.post('/',upload.single('image'),BlogController.store);
router.put('/:id',upload.single('image'),BlogController.update);
router.patch('/:id',BlogController.deleteblog);


module.exports = router;
