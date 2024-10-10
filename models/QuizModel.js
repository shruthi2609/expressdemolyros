const mongoose=require("mongoose")
const validator=require("validator")
const url="mongodb+srv://shruthi:test123@cluster0.rpq7s.mongodb.net/dummyDbOne?retryWrites=true&w=majority&appName=Cluster0"
const connect=mongoose.connect(url).then((res)=>console.log("connected successfully")).catch((err)=>console.log(err))
const quizSchema=new mongoose.Schema({
email:{
type:String,
validate:{
    validator:function(value){
        return validator.isEmail(value)
    },
    message:"email validation failed , given proper email format"
}
},
password:{
    type:String,
    min:[7,"minlength should be 7"],
    max:[12,"maxlength should be 12"],
    validate:{
        validator:function(value){
            return validator.isAlphanumeric(value)
        },
        message:"password validation failed , password should be alphanumeric"
    }

}
,
quizId:{
    type:Number,
    unique:[true,"quizID already exists"],
    min:[1,"id should be greater or equal to 1"],
    max:[10,"id should be less than or equal 10"]
},
quizTag:{
    type:String,
    required:[true,"quizTag is a required field"],
    minlength:[5,"Min Characters allowed is 5"],
    maxlength:[12,"Max characters allowed is 12"]
},
quiz:{
    type:Array
},
noofQns:{
    type:Number
},
score:{
    type:Number,
    validate:{
        validator:function(value){
            return value<this.noofQns
        },
        message:"score is greater than no of qns"
    },
    default:0
    
},
difficulty:{
    type:String,
    required:[true,"set the dificulty level"],
    enum:{
        values:["easy","medium","hard"],
        message:"difficulty is either easy,medium,hard"
    }
}

})
const quizModel=new mongoose.model("QuizCollection",quizSchema)
module.exports=quizModel

// // setTimeout(()=>quizModel.updateOne({quizId:2},{$set:{score:14}}).then((res)=>console.log(res)).catch((err)=>console.log(err)),3000)
// const data=new quizModel({
//     email:"admin@gmailcom",
//     quizId:5,
//     quizTag:"React",
//     noofQns:10,
//     score:9,
//     quiz:[
//         {
//             question:"what is react",
//             choice1:"variable",
//             choice2:"its a js framework",
//             choice3:"function",
//             ans:"choice2",
            
//         },
//         {
//             question:"what is react",
//             choice1:"variable",
//             choice2:"its a js framework",
//             choice3:"function",
//             ans:"choice2",
            
//         },{
//             question:"what is react",
//             choice1:"variable",
//             choice2:"its a js framework",
//             choice3:"function",
//             ans:"choice2",
            
//         },{
//             question:"what is react",
//             choice1:"variable",
//             choice2:"its a js framework",
//             choice3:"function",
//             ans:"choice2",
            
//         }
//     ],
//     difficulty:"medium"
// })
// setTimeout(()=>data.save().then((Res)=>console.log("created")).catch((err)=>console.log(err)),2000)