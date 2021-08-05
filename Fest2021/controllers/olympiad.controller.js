const olymPiadSchema = require('../models/olympiad.model')

const getOlympiad = (req, res) => {
    const email = req.body.email;
    const institute=req.body.institute;
    const phone = req.body.phone;
    const gender = req.body.gender;
    req.body.name = "jisan"
    req.body.paid=false;
    req.body.selected=false
    req.body.tshirt="L"

    new olymPiadSchema(req.body).save().catch((err) => {
        console.error(err)
    }).then((value) => {
        res.json({success: true})
    })


}
module.exports = getOlympiad
