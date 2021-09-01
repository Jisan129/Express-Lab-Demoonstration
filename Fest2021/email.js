/*
const nodemailer=require('nodemailer');
const {google}=require('googleapis')

const clientId = '769389443621-e3s46ning7hjudlkg6bgb1v2itr7r394.apps.googleusercontent.com'
const clientSecret = 'p8ZMrhydAl8cpcThbW3-G1sx'
const redirect_url='https://developers.google.com/oauthplayground';
const refresh_token = '1//04ixjpWQwdJAPCgYIARAAGAQSNwF-L9IrAmyFXznR0yR6TVJl_lpUc_XxydqFq3cUthtLribgv80GnpJdMx3Qn7xT04NYxH9Itds'

const oAuht2client=new google.auth.OAuth2(clientId,clientSecret,redirect_url)
oAuht2client.setCredentials({refresh_token:refresh_token})



async function sendMail() {
    try{
        const accessToken = await oAuht2client.getAccessToken()


        let transport=nodemailer.createTransport({
            service: "gmail",
            auth: {
                type:'OAuth2',
                user: "jisananam1228@gmail.com",
                clientId:clientId,
                clientSecret:clientSecret,
                refreshToken:refresh_token,
                accessToken:accessToken,
            }
        })
        const message ={
            from:'jisananam1228@gmail.com',
            to:'recoveranam@gmail.com',
            subject:"subject",
            text:"Hello peter",
        }



        let result2=await transport.sendMail(message, function(err, info) {
            if (err) {
                console.log(err)
            } else {
                console.log(info);
            }
        })
        console.log(result2)
        return result2;

    }
    catch (err){
        console.log(err)
    }

}



sendMail().then((result2) => {console.log("Ok",result2)}).catch((err) => {console.log(err)})






*/

const env=require('dotenv').config()
console.log(process.env.DB_HOST)
const nodemailer=require("nodemailer")
let transporter = nodemailer.createTransport({
    service:"gmail",
    port: process.env.PORT,
    auth: {
        user:process.env.USER,
        pass: process.env.PASS,
    }
})
let message = {
    from: "jisananam1228@gmail.com",
    to: "recoveranam@gmail.com",
    subject: "Subject",
    text: "Hello SMTP Email"
}

transporter.sendMail(message, function(err, info) {
    if (err) {
        console.log(err)
    } else {
        console.log(info);
    }})
