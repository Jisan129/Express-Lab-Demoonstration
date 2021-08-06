const  progSchema =require('../models/programming.model')

const createTeam = (req, res) => {
    req.body.total=100
    new progSchema(req.body).save().catch((err) => {
        console.error(err)
        }
    ).then((value) =>{
        res.redirect('/show')
    })
}
const showUser=(req, res) => {
    progSchema.find().then((participants) => {
        res.render('programming_contest/list.ejs',{participants})
    })
}
const deleteUser = (req, res) => {

    progSchema.findByIdAndRemove(req.params.id, (err) => {
    }).catch(err => {
        return res.json({success: false})
    }).then(() => {
        res.redirect('/progContest/showUser')
    })
}
const submitTeam = (req, res) => {
  res.render('programming_contest/register.ejs')
}
const editUser = (req, res) => {
    progSchema.findOne({_id: req.params.id}).then((info) => {

        res.render('programming_contest/edit.ejs',{  error: req.flash('error'),
            participant: info,})
    })

}
const postEditUser = (req, res) => {
    const id = req.body._id;
    delete req.body._id;
    progSchema.findOneAndUpdate(id,req.body,{new:true,useFindAndModify:true}).catch(err=>{
        return res.json({success:false})
    }).then((info) => {
        res.render('programming_contest/register.ejs')
    })
}
const getPayment =(req,res)=>{
    const id = req.params.id

    progSchema.findOne({ _id: id })
        .then((participant) => {
            participant.paid = 100
            participant
                .save()
                .then(() => {
                    let error = 'Payment completed succesfully'
                    req.flash('error', error)
                    res.redirect('/progContest/showUser')
                })
                .catch(() => {
                    let error = 'Data could not be updated'
                    req.flash('error', error)
                    res.redirect('/progContest/showUser')
                })
        })
        .catch(() => {
            let error = 'Data could not be updated'
            req.flash('error', error)
            res.redirect('/progContest/showUser')
        })

}
const getSelected = (req, res) => {
    const a=req.params.id
    progSchema.findOne({_id:a}).then((participant) => {
        participant.selected = true
        participant.save()
            .then(() => {
                let error = 'Payment completed succesfully'
                req.flash('error', error)
                res.redirect('/progContest/showUser')
            })
            .catch(() => {
                let error = 'Data could not be updated'
                req.flash('error', error)
                res.redirect('/progContest/showUser')
            })
    })
}
module.exports={createTeam,showUser,deleteUser,submitTeam,editUser,postEditUser,getPayment,getSelected}












