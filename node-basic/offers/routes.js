const express = require('express');
const router = express.Router();
const OffertsController = require('./controller')

router.get('/',OffertsController.listOfferts)

module.exports = router;