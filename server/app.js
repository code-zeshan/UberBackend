import express from "express"
import config from "config"
import "./utils/dbConnect.js"
const app = express();

const PORT = config.get("PORT")

app.get("/", (req,res)=>{
    res.send("Hello World!")
})

app.listen(PORT,()=>{
    console.log("The server is active!");
})