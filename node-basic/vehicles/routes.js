const express = require('express');
const router = express.Router();
const VehiclesController = require('./controller')

router.get('/',VehiclesController.listVehicles)

module.exports = router;