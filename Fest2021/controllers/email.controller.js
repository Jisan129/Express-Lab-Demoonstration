const nodemailer = require("nodemailer");
const env=require('dotenv').config()


function sendGreetingMail(mail,key,name,event) {


    let transporter = nodemailer.createTransport({
        service:"gmail",
        port: process.env.PORT,
        auth: {
            user:"jisananam1228@gmail.com",
            pass:process.env.PASS,
        }
    })
    let message = {
        from: "jisananam1228@gmail.com",
        to: mail,
        subject: "Greetings From ICT FEST",
        text: `Hello ${name}.Greetings From ICT Fest.You have registered into ${event}.Your Code is  ${key}.`
    }

    transporter.sendMail(message, function(err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info);
        }})

}

module.exports={sendGreetingMail}

