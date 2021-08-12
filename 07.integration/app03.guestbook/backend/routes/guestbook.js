const express = require('express');
const controller = require('../controllers/guestbook');

const router = express.Router();
router.route('/').get(controller.readAllMessages);
//router.route('/card/:cardNo/task').post(controller.createTask);


module.exports = router;