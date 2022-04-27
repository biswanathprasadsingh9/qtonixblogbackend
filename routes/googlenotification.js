const express = require('express');
const router = express.Router();

const GoogleNotification = require('../controllers/GoogleNotificationController');

router.get('/',GoogleNotification.index);
router.post('/',GoogleNotification.store);
router.patch('/:id',GoogleNotification.deleteid);

module.exports = router;
