const express=require("express")
const app=express()
const bcrypt=require("bcrypt")
const cookieparser=require("cookie-parser")
app.use(express.json())
app.use(cookieparser())

const CredentialsModel=require("./models/UserCredentials")
const quizModel=require("./models/QuizModel")
const Authorize = require("./utils/cookieAuthorizer")
app.post("/login",async (req,res)=>{
const data=req.body
console.log(data)
try{
const user=await CredentialsModel.findOne({username:data.username},{password:1,_id:0})
if(user){
    const result=await bcrypt.compare(data.password,user.password)
    if(result){
        res.cookie("userinfo",data.username,{maxAge:6000000000000})
        res.send({
            status:"success"
        })
    }
    else
    {
        res.send({
            status:"wrong password"
        })
    }
}
else{
    res.send({
        status:"user not found,please signup"
    })
}
}
catch(e){
res.send({
    status:"something unexpected happened",
    error:e
})
}
})
app.get("/dashboard/:username",async (req,res)=>{
    console.log(quizModel)
    const result=await quizModel.find({})
    console.log(result)
    res.cookie("userinfo",req.params.username,{maxAge:600000000})
    res.send({
        status:"success",
        data:result
    })
})
app.get("/update",Authorize,async (req,res)=>{
    //update operation
    res.cookie("updateId","237298372832hshdjhsjd",{maxAge:6000000})
    res.send({
        status:"succesfully updated"
    })
})
app.listen(3001,()=>console.log("server started"))