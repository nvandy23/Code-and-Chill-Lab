const express = require('express');
const router = express.Router();
const restaurantsCtrl = require('../controllers/restaurants')

// GET /restaurants
router.get('/', restaurantsCtrl.index)

// GET /restaurants/new
router.get('/new', restaurantsCtrl.new)

// POST /restaurants
router.post('/', restaurantsCtrl.create)

// GET /restaurants/:id
router.get('/:id', restaurantsCtrl.show)

//
router.delete('/:id',restaurantsCtrl.delete)

module.exports = router;
