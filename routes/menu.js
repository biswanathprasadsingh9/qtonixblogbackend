const express = require('express');
const router = express.Router();

const MenuController = require('../controllers/MenuController');

router.get('/',MenuController.index);
router.get('/:id',MenuController.view);
router.post('/',MenuController.store);
router.put('/:id',MenuController.update);



module.exports = router;
