var express = require('express');
var router = express.Router();
const eventController= require('../controllers/event.controller');

/* GET users listing. */
router.post('/',eventController.createEvent);

module.exports = router;