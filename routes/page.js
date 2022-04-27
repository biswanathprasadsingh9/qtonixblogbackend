const express = require('express');
const router = express.Router();

const PageController = require('../controllers/PageController');


router.get('/',PageController.index);
router.get('/viewpage/:pageurl',PageController.viewpagebyurl);
router.get('/:id',PageController.view);
router.post('/',PageController.store);
router.put('/:id',PageController.update);
router.patch('/:id',PageController.remove);


module.exports = router;
