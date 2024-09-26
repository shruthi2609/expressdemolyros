const express=require("express")
const app=express()
const morgan =require("morgan")
const {simpleMW,logger}=require("./utils/middlewares")
app.use(morgan('dev'))
// app.use(logger)
// app.use(simpleMW)


app.get("/demo",simpleMW,logger,(req,res)=>{

    res.send("dummy")
})
app.get("/test",(req,res)=>{
   
    res.send("test")
})

app.listen(3001,()=>console.log("server started"))