const express = require('express');
const router = express.Router();
const orgController = require('../controllers/orgController');
const authController = require('../controllers/authController');


router.post('/ogenerate', orgController.createOrg, authController.addCookie, (req, res) => {
	return res.status(200).send(JSON.stringify(res.locals.data));
});

router.delete('/:id',orgController.deleteOrg, (req, res) => {
	return res.status(200).send(JSON.stringify(res.locals.data));
});

router.get('/getOrgs', orgController.getOrgs, (req, res) => {
	return res.status(200).send(JSON.stringify(res.locals.data));
});

// router.post('/:id', orgController.updateOrg, (req, res) => {
// 	return res.status(200).send(JSON.stringify(res.locals.data));
// });

module.exports = router;
