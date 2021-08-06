const olymPiadSchema = require('../models/olympiad.model')


const canRegister=(req,res) => {
    res.render('math_olympiad/registration_oly.ejs')
}

const getOlympiad = (req, res) => {
    const email = req.body.email;
    const institute=req.body.institute;

    const gender = req.body.gender;
    req.body.name = "jisan"
    req.body.paid=false;
    req.body.selected=false
    req.body.tshirt="L"

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
