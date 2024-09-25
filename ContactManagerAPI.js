const express=require("express")
const data=require("./data/user")
const app=express()
app.use(express.json())
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
      res.status(200).json({
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
app.get("/v1/contactdetails",contactDetails)
app.get("/v1/user/:username/:city?",user)
app.post("/v1/user",(req,res)=>{
   console.log(req.body)
    res.send("from post req")
})

app.listen(3001,()=>console.log("server has started"))