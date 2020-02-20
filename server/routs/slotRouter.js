const express = require('express');
const router = express.Router();
const slotController = require('../controllers/slotController');

router.delete('/:id',slotController.deleteSlot, (req, res) => {
	return res.status(200).send(JSON.stringify(res.locals.data));
});

// router.get('/getSlotList', slotController.getSlots, (req, res) => {
// 	return res.status(200).send(JSON.stringify(res.locals.data));
// });

// router.post('/:id', slotController.updateSlot, (req, res) => {
// 	return res.status(200).send(JSON.stringify(res.locals.data));
// });

module.exports = router;
