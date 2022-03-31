const express = require("express");
const app = express();
app.use(express.json());

const connect = require("./src/config/db")
const authRoute = require("./src/controllers/auth")

app.use("/api/auth", authRoute);

// const {register , login} = require("./controllers/auth.controller")
// app.post("/register", register);

// app.post("/login", login);


app.listen(8080, async (req,res) => {
    try{
        await connect();
        console.log("Backend server 8080 is running!");
    }
    catch(err){
       console.log(err.message);
    }
})