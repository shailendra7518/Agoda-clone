const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const PORT=process.env.PORT || 8080
const connect = require("./src/config/db")
const authRoute = require("./src/controllers/auth")

app.use("/auth", authRoute);


app.listen(PORT, async (req,res) => {
    try{
        await connect();
        console.log("Backend server 8080 is running!");
    }
    catch(err){
       console.log(err.message);
    }
})

// https://agoda-auth.herokuapp.com/auth/login
// https://agoda-auth.herokuapp.com/auth/register