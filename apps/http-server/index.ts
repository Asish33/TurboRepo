import express from "express"

const app = express()

app.get("/chat",(req,res)=>{
    res.send("Welcome to chat room")
})

app.listen(3002)