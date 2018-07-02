const express = require("express");

const app = express();
const PORT =process.env.PORT || 8888; //for running port on different port use (export PORT=3000 and open the localhost:3000 it will work )


app.get("/status",(req,res)=>{

const localTime=(new Date()).toLocaleTimeString();

res
.status(200) 
.send(`Server time is ${localTime}.`);
});

app.get("*",(req,res) =>{
	res.sendStatus(404);
});

app.listen(PORT,()=>{
	console.log(`Server is Running on Port ${PORT}`);
})