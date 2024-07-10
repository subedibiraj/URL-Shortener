const express = require('express');
const {handlePostShortId, handleGetShortId} = require('../controller/url');
const router = express.Router();



router.post('/', handlePostShortId);
router.get('/:shortId', handleGetShortId);

module.exports = router;