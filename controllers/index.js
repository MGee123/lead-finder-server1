const express = require('express')
 , router = express.Router();

 router.use('/leads', require('./leads'));

 module.exports = router; 
 