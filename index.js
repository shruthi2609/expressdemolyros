const express=require("express")
const data=require("./data/user")
const app=express()
app.use(express.json())
const credentialsRoute=require("./routes/credentialsRoute")
app.use(credentialsRoute)


app.listen(3001,()=>console.log("server is started at port no :3001"))