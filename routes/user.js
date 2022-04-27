const express = require('express');
const router = express.Router();

const path = require('path');
const multer = require('multer');

const UserController = require('../controllers/UserController');
const { uuid } = require('uuidv4');


const storage = multer.diskStorage({
    destination: './uploads/userimages',
    filename:(req, file, cb)=>{
        return cb(null, `${uuid()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage:storage
})

router.get('/logindetails',UserController.logindetails);
router.get('/logindetails/:id',UserController.logindetailsview);


//WEBSITE
router.post('/userregister',UserController.userregister);
router.post('/socialloginregister',UserController.socialloginregister);
router.put('/userupdate/:id',UserController.userupdate);
router.put('/userimageupdate/:id',upload.single('image'),UserController.userimageupdate);
router.post('/send-email-verification-code',UserController.emailverificationcodesend);

router.post('/verify-email-code',UserController.verifyemailcode);
//WEBSITE



router.get('/',UserController.index);
router.post('/',upload.single('image'),UserController.store);
router.put('/:id',upload.single('image'),UserController.update);
router.patch('/:id',UserController.deleteuser);

router.post('/login',UserController.login);
router.get('/forgotpassword/:email',UserController.forgotpassword);
router.get('/:id',UserController.view);




module.exports = router;
