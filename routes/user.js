const express = require('express');
const router = express.Router();
const {handleCreateNewUser, handleUserLogin} = require('../controller/user');


router.post('/',handleCreateNewUser);
router.post('/login',handleUserLogin);


module.exports = router;