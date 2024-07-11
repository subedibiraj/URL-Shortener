const express = require('express');
const {handlePostShortId, handleGetShortId, handleGetAnalytics} = require('../controller/url');
const router = express.Router();



router.post('/', handlePostShortId);
router.get('/:shortId', handleGetShortId);
router.get('/analytics/:shortId', handleGetAnalytics);

module.exports = router;