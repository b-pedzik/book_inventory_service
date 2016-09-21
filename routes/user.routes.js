const express = require('express');
const router = express.Router();
const UserActions = require('../lib/UserActions');

router.post('/login', UserActions.loginUser);

module.exports = router;
