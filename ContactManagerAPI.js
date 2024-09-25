const express=require("express")
let data=require("./data/user")
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
const contactDetails=(req,res)=>{
    console.log("end point")
    res.status(200).json({
        status:"success",
        data:{
            contacts:data,
            length:data.length
        }
    })
}
const user=(req,res)=>{
    console.log("query data",req.query)
    console.log("params",req.params)
    const params=req.params
    let result
    if(params.city){
       result=data.filter((item)=>item.username===params.username&&item.address.city===params.city)
    }
    else{
        result=data.filter((item)=>item.username===params.username)
    }
   
   if(result.length>0)
   {
    //   res.status(200).json({
    //     status:"success",
    //     data:{
    //         contacts:result,
    //         length:result.length
    //     }
    // })
    res.status(200).send({
        status:"success",
       data:{
          contacts:result,
           length:result.length
       }
    })
   }
   else{
      res.status(404).send("user not found")
   }

}
const getUser=(req,res)=>{
    console.log(req.body)
     res.send("from post req")
 }
//routes - GET 
app.get("/v1/contactdetails",contactDetails)
app.get("/v1/user/:username/:city?",user)
//routes - POST
app.post("/v1/user",getUser)
//routes PUT
app.put("/v1/user",(req,res)=>{
    const newdata=req.body
    data[newdata.id-1]=newdata
    console.log(data)
})
//routes PATCH
app.patch("/v1/user",(req,res)=>{
    const newdata=req.body
    res.send("dummy")
})
//route DELETE
app.delete("/v1/user/:id",(req,res)=>{
    console.log("delete")
const params=req.params
let result=data.filter((item)=>item.id!=params.id)
data=result
console.log(data)
res.status(200).json({
    status:"successfully deleted"
})
})

app.listen(3001,()=>console.log("server has started"))