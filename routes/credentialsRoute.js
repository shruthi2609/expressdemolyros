const express=require("express")
const jwt=require("jsonwebtoken")
const { signUp, signIn, protectedRoute } = require("../controllers/CredentialsController")
const router=express.Router()
function authorize(req,res,next){
    const auth=req.headers.authorization
    const token=auth.replace("Bearer ","")
    const valid=jwt.verify(token,"jamesbond")
   if(valid){
    next()
   }
  else{
    res.send({
        status:"failed",
        message:"you are not authorized"
    })
  } 

    }
router.post("/v1/signup",signUp)
router.post("/v1/login",signIn)
router.delete("/v1/user/:username",authorize,protectedRoute)
module.exports=router