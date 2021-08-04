const express = require("express");
const router = express.Router();
const getOlympiad = require("../controllers/olympiad.controller")



router.get('/no', getOlympiad)

module.exports =router