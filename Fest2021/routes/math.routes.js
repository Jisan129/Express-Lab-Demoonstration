const express = require("express");
const router = express.Router();
const getOlympiad = require("../controllers/olympiad.controller")



router.post('/completeRegistration', getOlympiad)
module.exports =router