const express = require('express');
const router = express.Router();
const DestinationController = require('./controller')
const DestinationAuth = require('./auth')
const { verifyToken, TOKEN_SECRET } = require('../middlewares/validate-jwt');


router.post('/',verifyToken,DestinationController.addDestination)
router.get('/',DestinationController.listDestination)
router.patch('/',DestinationController.modifyDestination)
router.delete('/',verifyToken,DestinationController.deleteDestination)
router.post('/register', DestinationAuth.addUser)
router.post('/login', DestinationAuth.logInUser)

module.exports = router;