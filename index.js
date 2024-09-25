const express=require("express")
const data=require("./data/user")
const app=express()
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
app.get("v1/users",(req,res)=>{
   console.log("A route")
   const query=req.query
   console.log(query)
   if(query.username){
    const result=data.filter((item)=>item.username===query.username)
    res.status(200).send(JSON.stringify(result))
   }
   else{
    res.status(200).send(JSON.stringify(data))
   } 
})
app.get("/users/contacts/:username?",(req,res)=>{
   console.log("b route",req.params,req.query)
   // console.log("test",req.params,req.query)
  const params=req.params
  if(params.username){
   const result=data.filter((item)=>item.username===params.username)
   if(result.length>0)
   {
      res.status(200).send(JSON.stringify(result))
   }
   else{
      res.status(404).send("user not found")
   }
  }
  else{
   res.status(200).send("no params found")
  }

})



app.listen(3001,()=>console.log("server is started at port no :3001"))