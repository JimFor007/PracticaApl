var express = require('express');
var router = express.Router();
const eventController= require('../controllers/event.controller');

/* GET users listing. */
router.get('/', eventController.getAllEvents);
router.get('/:id', eventController.getEventById);
router.get('/byAdmin/:id', eventController.getEventsByAdmin);
router.post('/:id',eventController.createEvent);
router.put('/:id',eventController.updateEvent);

module.exports = router;