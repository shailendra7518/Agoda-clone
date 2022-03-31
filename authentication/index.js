const express = require("express");
const app = express();
app.use(express.json());

const connect = require("./src/config/db")




app.listen(8080, async (req,res) => {
    try{
        await connect();
        console.log("Backend server 8080 is running!");
    }
    catch(err){
       console.log(err.message);
    }
})