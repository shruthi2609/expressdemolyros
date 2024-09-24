const express=require("express")
const app=express()
app.get("/home",(req,res)=>{
    // res.writeHead(201,{"content-type":"text/plain"})
    // res.write("hello from server")
    // res.end("end")
    // res.status(201)
    // res.statusCode=201
    // res.end("hello from server")
    // res.set("content-type","text/plain")
    res.set({
        "content-type":"text/plain",
        "token":"nxjdhuyd"
    })
    res.status(201).send("hello from server")
    console.log("/home is hit")
})

app.listen(3001,()=>console.log("server is started at port no :3001"))