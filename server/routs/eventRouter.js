const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');


router.post('/ecreate', eventController.createEvent, (req, res) => {
	return res.status(200).send(JSON.stringify(res.locals.data));
});

router.delete('/:id',eventController.deleteEvent, (req, res) => {
	return res.status(200).send(JSON.stringify(res.locals.data));
});

router.get('/getEventList', eventController.getListofEvents, (req, res) => {
	return res.status(200).send(JSON.stringify(res.locals.data));
});

router.post('/:id', eventController.updateEvent, (req, res) => {
	return res.status(200).send(JSON.stringify(res.locals.data));
});

module.exports = router;
