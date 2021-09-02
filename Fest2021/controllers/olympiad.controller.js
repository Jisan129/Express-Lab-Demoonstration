const olymPiadSchema = require('../models/olympiad.model')
const {sendGreetingMail}=require('./email.controller')
const {generateKey}=require('./uniqueNumber')
const nodemailer = require("nodemailer");
const env=require('dotenv').config()

/** Sync */

let state=false


const canRegister=(req,res) => {
    res.render('math_olympiad/registration_oly.ejs')
}

function checkKey(key) {
    state=false;
    olymPiadSchema.findOne({uniqueKeys:key}).then(function () {
        state=true
    })
}



const getOlympiad = (req, res) => {
    let key=generateKey()
    const email = req.body.email;
    req.body.paid=false;
    req.body.selected=false
    req.body.uniqueKeys=key
    req.body.tshirt="L"
    checkKey(key)
    for (let i = 0; i < 10; i++) {
        if(state===true){
            key=generateKey()
        }
        else {
            break;
        }

    }
    sendGreetingMail(email,key,req.body.name,"Math Olympiad")



    new olymPiadSchema(req.body).save().catch((err) => {
        console.error(err)
    }).then((value) => {
        res.redirect('/math/register')
    })


}
const getContester = (req, res) => {
    olymPiadSchema.find().then((users) => {
        res.render("math_olympiad/checkUser.ejs", {users})
    })

}
const deleteUser = (req, res)=>{
    const a=req.params.id;
    console.log(a)
    olymPiadSchema.findByIdAndRemove(req.params.id, (err) => {
    }).catch(err => {
        return res.json({success: false})
    }).then(() => {
        res.redirect('/math/viewParticipator')
    })

}

module.exports = {
    getContester,
    getOlympiad,
    deleteUser,
    canRegister
}
