const data=require("../data/user")
const queryGetUser=(req,res)=>{
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
 }
 const paramsGetUser=(req,res)=>{
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
 
 }
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
const putUser=(req,res)=>{
   const newdata=req.body
   data[newdata.id-1]=newdata
   console.log(data)
}
const patchUser=(req,res)=>{
   const newdata=req.body
   res.send("dummy")
}
const deleteUser=(req,res)=>{
   console.log("delete")
const params=req.params
let result=data.filter((item)=>item.id!=params.id)
data=result
console.log(data)
res.status(200).json({
   status:"successfully deleted"
})
}
 module.exports={
    queryGetUser,paramsGetUser,user,contactDetails,getUser,putUser,patchUser,deleteUser
 }
