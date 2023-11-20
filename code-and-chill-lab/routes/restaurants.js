const express = require('express');
const router = express.Router();
const restaurantsCtrl = require('../controllers/restaurants')

// router.get('/', restaurantsCtrl.index)

router.get('/new', restaurantsCtrl.new)

router.post('/', restaurantsCtrl.create)

module.exports = router;
