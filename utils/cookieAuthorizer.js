function Authorize(req,res,next){
    if(req.cookies.userinfo){
        next()
    }
    else{
        res.status(401).send({
            status:"not successful",
            message:"user session expired please login again"
        })
    }
  
}
module.exports=Authorize