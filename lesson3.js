const express = require("express");
const bodyParser = require("body-parser"); //it is the middleware which reads the body of the request
const app = express();
const PORT =process.env.PORT || 8888; //for running port on different port use (export PORT=3000 and open the localhost:3000 it will work )


app.use(bodyParser.json()) //we use middleware in express using use method

app.post("/login",(req ,res)=>{
	const user = req.body.username;
    res
    .status(200)
    .send(`You Logged in with ${user}`);
})

app.get("*",(req,res) =>{
	res.sendStatus(404);
});

app.listen(PORT,()=>{
	console.log(`Server is Running on Port ${PORT}`);
})