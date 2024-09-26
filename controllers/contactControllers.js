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
 module.exports={
    queryGetUser,paramsGetUser
 }
