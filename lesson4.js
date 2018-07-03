const express = require("express");
const bodyParser = require("body-parser"); //it is the middleware which reads the body of the request
const app = express();
const PORT =process.env.PORT || 8888; //for running port on different port use (export PORT=3000 and open the localhost:3000 it will work )
const jwt= require("jsonwebtoken"); //jason web token library

app.use(bodyParser.json()) //we use middleware in express using use method

const users =[
     {id:1,username:"admin",password:"admin"},
     {id:2,username:"guest",password:"guest"}
];

app.post("/login",(req ,res)=>{
	if(!req.body.username || !req.body.password){
		res
		.status(400)
		.send("You need a username and password");
		return; //here we uses  return to stop the execution
	}
	const user = users.find((u)=> {
		return u.username === req.body.username && u.password=== req.body.password;
	});
	if(!user){
		res
		.status(401)
		.send("User not found");
		return;//here we uses  return to stop the execution
	}
//If we have the valid user we have to send the JSON Webtokens in response to request
//Now we create the sign token 
	const token =  jwt.sign({   
       sub:user.id,           //passing the payload we want to attach in JWT
	   username:user.username //passing the string as a secret key
	}, "mysupersecretkey",{expiresIn: "3 hours"});

	res
	.status(200)
	.send({access_token:token});       
});

app.get("*",(req,res) =>{
	res.sendStatus(404);
});

app.listen(PORT,()=>{
	console.log(`Server is Running on Port ${PORT}`);
})