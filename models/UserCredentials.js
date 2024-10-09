const mongoose=require("mongoose")
const validator=require("validator")
const url="mongodb+srv://shruthi:test123@cluster0.rpq7s.mongodb.net/dummyDbOne?retryWrites=true&w=majority&appName=Cluster0"
const connect=mongoose.connect(url).then((res)=>console.log("connected successfully")).catch((err)=>console.log(err))
const valid=require("validator")
const credentialsSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"enter username its a req field"]
    },
    password:{
        type:String,
        validate:{
        validator:function(value){
            return valid.isAscii(value)
        },
        message:"password validation failed , password should be alphanumeric"
    }
    }
})
const CredentialsModel=new mongoose.model("credentials",credentialsSchema)
module.exports=CredentialsModel