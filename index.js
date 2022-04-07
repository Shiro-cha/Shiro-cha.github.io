const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const verification = require("./verification");

let app = express();

//init static file 

app.use(express.static(path.join(__dirname,"public")));

//init urlencoded

app.use(bodyparser.urlencoded());
app.use(bodyparser.json());

console.log(verification);
app.post("/validation",function(req,res){
    let data = req.body;
	let dataToSend = {errornom:"",erroremail:"",errorphone:"",errormessage:"",success:true,successString:"Votre message a été bien envoyé. Merci de m'avoir contacter :) "};
    let name = data.name;
    let email = data.email;
    let phone = data.phone;
    let message = data.message;
	
	if(!name){
		dataToSend.errornom="Renseigner votre nom est obligatoire";
		dataToSend.success=false;
	}
	if(!email || !verification.verify_email(email)){
		console.log(verification.verify_email(email))
		dataToSend.erroremail="L'email n'est pas valide";
		dataToSend.success = false;
	}
	if(!phone || !verification.verify_phone(phone)){
		dataToSend.errorphone = "Le numéro de télephone n'est pas valide";
		dataToSend.success = false;
	}
	if(!message){
		dataToSend.errormessage="Le message doit avoir du contenu";
		dataToSend.success = false;
	}
	
   
	
	if(dataToSend.success){
		
		let transporter = nodemailer.createTransport({
			service:"gmail",
			auth:{
				user:"noum.rzdr@gmail.com",
				pass:"ioigodness"
			}
		});
		let mailoptions = {
			from:"shiro.yukami@gmail.com",
		 	to:email,
		 	subject:"Email de votre site",
		 html:`<p><b>Nom<b>: ${name}</p><p><b>email<b>: ${email}</p><p><b>Telephone<b>: ${phone}</p><p><b>Nom<b>: ${name}</p><br/><br/><p><i>${message}</></p>`
		}
		
		transporter.sendMail(mailoptions,function(err,info){
			if(err){
				console.log("erroeeeeeeee");
				dataToSend.successString = "Une erreur s'est produit :(. Reessayer plutard";
				
			}else{
				console.log("email send :"+info.response);
				dataToSend.successString ="Votre message a été bien envoyé. Merci de m'avoir contacter :) ";
			}
		});
		
	
		res.send(JSON.stringify(dataToSend));
	}else{
		res.send(JSON.stringify(dataToSend));
	}
	

});

app.listen(process.env.PORT||8080,function(err){

    if(err) throw err;
    console.log(`Server start at port ${process.env.PORT||8080}`);

});
