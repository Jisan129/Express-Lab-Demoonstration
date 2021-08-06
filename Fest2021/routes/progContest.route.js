const express = require("express");
const router = express.Router();
const {ensureAuthenticated}=require('../middlewares/auth.middleware')
const {createTeam, getSelected} = require("../controllers/porgContest.controllers")
const {showUser}=require("../controllers/porgContest.controllers")
const {deleteUser} = require("../controllers/porgContest.controllers");
const {submitTeam}=require("../controllers/porgContest.controllers")
const {editUser}=require("../controllers/porgContest.controllers")
const {postEditUser} = require("../controllers/porgContest.controllers")
const {getPayment}=require("../controllers/porgContest.controllers")
router.get('/register',ensureAuthenticated,submitTeam);
router.post('/register',ensureAuthenticated ,createTeam)
router.get('/showUser',ensureAuthenticated,showUser)
router.get('/progContest/showUser',ensureAuthenticated,showUser)
router.get('/delete/:id',ensureAuthenticated,deleteUser);
router.get('/edit-participant/:id',ensureAuthenticated,editUser);
router.post('/edit-participant',ensureAuthenticated,postEditUser);
router.get('/paymentDone/:id',ensureAuthenticated,getPayment);
router.get('/select/:id',ensureAuthenticated,getSelected);




module.exports=router