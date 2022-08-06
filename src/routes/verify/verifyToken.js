const express = require('express');
const { createHandler } = require("../../utils");
const { verifyHandler: handler } = require('../../handlers');

const router = express.Router();

router.get('/verify/token', createHandler(handler));

module.exports = router;
