const express = require('express');
const router = express.Router();
const subController = require('../controllers/subController');


router.post('/ecreate', subController.createSub, (req, res) => {
	return res.status(200).send(JSON.stringify(res.locals.data));
});

router.delete('/:id',subController.deleteSub, (req, res) => {
	return res.status(200).send(JSON.stringify(res.locals.data));
});

// router.get('/getSubList', subController.getSubs, (req, res) => {
// 	return res.status(200).send(JSON.stringify(res.locals.data));
// });

// router.post('/:id', subController.updatesub, (req, res) => {
// 	return res.status(200).send(JSON.stringify(res.locals.data));
// });

module.exports = router;