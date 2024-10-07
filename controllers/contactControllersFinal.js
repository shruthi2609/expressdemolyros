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

 module.exports={
    contactDetails
 }
 