const express = require('express');
const router = express.Router();
const volunController = require('../controllers/volunController');
const authController = require('../controllers/authController');

router.post('/create', volunController.createVolun, authController.addCookie, (req, res) => {
	return res.status(200).send(JSON.stringify(res.locals.data));
});

router.delete('/:u_id',volunController.deleteVolun, (req, res) => {
	return res.status(200).send(JSON.stringify(res.locals.data));
});

router.get('/get/:filterElement?/:filterId?/:returnElements?', volunController.getVoluns, (req, res) => {
	return res.status(200).send(JSON.stringify(res.locals.data));
});

// router.post('/:id', volunController.updateVolun, (req, res) => {
// 	return res.status(200).send(JSON.stringify(res.locals.data));
// });

module.exports = router;
