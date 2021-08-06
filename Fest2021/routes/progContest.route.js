const express = require("express");
const router = express.Router();
const {createTeam} = require("../controllers/porgContest.controllers")
const {showUser}=require("../controllers/porgContest.controllers")
const {deleteUser} = require("../controllers/porgContest.controllers");
const {submitTeam}=require("../controllers/porgContest.controllers")
const {editUser}=require("../controllers/porgContest.controllers")
const {postEditUser} = require("../controllers/porgContest.controllers")
router.get('/register',submitTeam);
router.post('/register', createTeam)
router.get('/showUser',showUser)
router.get('/progContest/showUser',showUser)
router.get('/delete/:id',deleteUser);
router.get('/edit-participant/:id',editUser);
router.post('/edit-participant',postEditUser);



module.exports=router