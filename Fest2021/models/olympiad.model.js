const mongoose = require("mongoose");
const olymPiadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    institution: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },

    paid: {
        type: String,
        required: true,
    },
    selected: {
        type:Boolean,
        required:true,
    },
    tshirt: {
        type:String,
        required:true,
    }
})

const mathOlympiad=mongoose.model("MathOlympiad",olymPiadSchema)
module.exports=mathOlympiad