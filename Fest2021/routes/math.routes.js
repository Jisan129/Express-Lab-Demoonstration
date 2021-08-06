const express = require("express");
const router = express.Router();
const {ensureAuthenticated}=require('../middlewares/auth.middleware')

const {getOlympiad} = require("../controllers/olympiad.controller")
const {getContester}=require("../controllers/olympiad.controller")
const {deleteUser} = require("../controllers/olympiad.controller")
const {canRegister}=require("../controllers/olympiad.controller")


router.post('/completeRegistration',ensureAuthenticated,getOlympiad)
router.get('/viewParticipator',ensureAuthenticated,getContester)
router.get('/yes/:id',ensureAuthenticated,deleteUser);
router.get('/register',ensureAuthenticated,canRegister);

module.exports = router