const express = require('express');
const {handleGetShortId} = require('../controller/url');
const router = express.Router();



router.post('/', handleGetShortId);

module.exports = router;