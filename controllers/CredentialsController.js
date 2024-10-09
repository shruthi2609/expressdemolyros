const CredentialsModel=require("../models/UserCredentials")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const signUp=async (req,res)=>{
const data=req.body
const hashedPassword=await bcrypt.hash(data.password,8)
const user=new CredentialsModel({
    username:data.username,
    password:hashedPassword
})
const result=await user.save()
res.send({
    status:"created user",
    data:result
})
}
const signIn=async (req,res)=>{
    const data=req.body
    const findUser=await CredentialsModel.findOne({username:data.username},{password:1})
    console.log(findUser)
    const isUser=await bcrypt.compare(data.password,findUser.password)
    if(isUser){
        const token=await jwt.sign(data.username,"jamesbond")
        console.log(token)
        res.send({
            status:"successfully loggedIn",
            token:token
        })
    }
    else{
        res.status(401).send({
            status:"credentials not matching"
        })
    }
}
const protectedRoute=async (req,res)=>{
    const data=req.params
    const result=await CredentialsModel.deleteOne({username:data.username})
    res.send("dummy")
}
module.exports={
    signUp,signIn,protectedRoute
}