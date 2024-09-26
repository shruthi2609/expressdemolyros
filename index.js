const express=require("express")
const data=require("./data/user")
const app=express()
const { queryGetUser,paramsGetUser}=require("./controllers/contactControllers")
// app.get("/home",(req,res)=>{
//     // res.writeHead(201,{"content-type":"text/plain"})
//     // res.write("hello from server")
//     // res.end("end")
//     // res.status(201)
//     // res.statusCode=201
//     // res.end("hello from server")
//     // res.set("content-type","text/plain")
//     res.set({
//         "content-type":"text/plain",
//         "token":"nxjdhuyd"
//     })
//     res.status(201).send("hello from server")
//     console.log("/home is hit")
// })
// app.get("v1/todo",(req,res)=>{
//     res.status(200).send("all todo")
// })
// app.post("v1/todo",(req,res)=>{
//     res.status(200).send("created")
// })
app.get("v1/users",queryGetUser)
app.get("/users/contacts/:username?",paramsGetUser)



app.listen(3001,()=>console.log("server is started at port no :3001"))