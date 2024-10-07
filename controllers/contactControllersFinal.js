const data=require("../data/user")
const contactsModel=require("../models/contactsModel")

const contactDetails=async (req,res)=>{
    const result=await contactsModel.find({})
    console.log(result)
    res.send(JSON.stringify({
        status:"success",
        data:result
    }))
 }

 const getUser=async (req,res)=>{
    const ipCname=req.query.cname
    const result=await contactsModel.find({cname:ipCname})
    res.send(JSON.stringify({
        status:"success",
        data:result
    }))
 }

 const createUser=async (req,res)=>{
    const data=req.body
    const newData=new contactsModel(data)
    const result=await newData.save()
    console.log(result)
    if(result._id){
        res.send({
            status:"success",
            data:result
        })
    }
 }

 
 module.exports={
    contactDetails,getUser,createUser
 }
 