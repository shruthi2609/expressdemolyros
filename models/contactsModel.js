const mongoose=require("mongoose")
const url="mongodb+srv://shruthi:test123@cluster0.rpq7s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connect=mongoose.connect(url).then((res)=>console.log("connected successfully")).catch((err)=>console.log(err))

const contactsModel=mongoose.model("contacts",{
    cname:{
        type:String,
        required:true
    },
    cno:{
        type:Number,
        required:true,
        unique:true
    },
    cemail:{
        type:String,
        required:true,
        unique:true
    },
    caddress:{
        type:String,
    },
    ctech:{
        type:Object
    },
    cexp:{
        type:String
    }
})
module.exports=contactsModel
//inserting document
// async function insertData(){
//     const data=new contactsModel({
//         cname:"john",
//         cno:19882812,
//         cemail:"john@gmail.com"
//     })
//     let res=await data.save()
//    if(res){
//     console.log("inserted successfully")
//    }
// }
// insertData()
// const data=new contactsModel({
//     cname:"mary",
//     cno:9882123,
//     cemail:"mary@gmail.com"
// })
// data.save().then((res)=>console.log("inserted successfully")).catch((err)=>console.log(err))


//find methods:
// contactsModel.find({cname:"henry"},{cno:1,cemail:1,_id:0}).then((res)=>console.log(res)).catch((err)=>console.log(err))
// contactsModel.find({_id:ObjectId("670386562203b1c4efaecbe4")}).then((res)=>console.log(res)).catch((err)=>console.log(err)) => it wont work
// contactsModel.findById("670386562203b1c4efaecbe4").then((res)=>console.log(res)).catch((err)=>console.log(err))
// contactsModel.findOne({},{cno:1,cemail:1,_id:0}).then((res)=>console.log(res)).catch((err)=>console.log(err))
// contactsModel.find({},{cno:1,cemail:1,_id:0}).then((res)=>console.log(res)).catch((err)=>console.log(err))

//update
// contactsModel.updateOne({cname:"johnie"},{$set:{cemail:"johnie@gmail.com"}}).then((res)=>console.log("updated successfully")).catch((err)=>console.log(err))

// //delete
// contactsModel.deleteOne({cname:"johnie"}).then((res)=>console.log("deleted successfully")).catch((err)=>console.log(err))

// contactsModel.findByIdAndUpdate("670387b24e7d29f933c5e875",{$set:{cname:"henrie",cemail:"henrie@gmail.com"}}).then((res)=>console.log("updated successfully")).catch((err)=>console.log(err))
// contactsModel.findByIdAndUpdate("670387b24e7d29f933c5e875",{cname:"henry",cemail:"henry@gmail.com"}).then((res)=>console.log("updated successfully")).catch((err)=>console.log(err))

// contactsModel.updateMany({},{$set:{caddress:"IND"}}).then((res)=>console.log("updated successfully")).catch((err)=>console.log(err))
// // contactsModel.findByIdAndDelete("670387b24e7d29f933c5e875").then((res)=>console.log("updated successfully")).catch((err)=>console.log(err))
// contactsModel.updateMany({},{$set:{cexp:"2 years"}}).then((res)=>console.log(res)).catch((err)=>console.log(err))












