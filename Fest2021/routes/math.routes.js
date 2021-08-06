const express = require("express");
const router = express.Router();
const {getOlympiad} = require("../controllers/olympiad.controller")
const {getContester}=require("../controllers/olympiad.controller")
const {deleteUser} = require("../controllers/olympiad.controller")
const {canRegister}=require("../controllers/olympiad.controller")
router.post('/completeRegistration', getOlympiad)
router.get('/viewParticipator',getContester)
router.get('/yes/:id',deleteUser);
router.get('/register',canRegister);

module.exports =router