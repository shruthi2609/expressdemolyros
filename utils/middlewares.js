 const authorize=(req,res,next)=>{
    console.log("authorize")
    console.log(req.body)
    const data=req.body
    if(!data.username||!data.password){
        res.status(401).send("bad request")
    }
    else{
       next()
    }
}
const simpleMW=(req,res,next)=>{
    console.log("middleware is hit")
   next()
}
const logger=(req,res,next)=>{
    console.log(`${req.url} is hit with ${req.method}`)
    next()
}
module.exports={
    authorize,simpleMW,logger
}
