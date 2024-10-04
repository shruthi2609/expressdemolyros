const MongoClient=require("mongodb").MongoClient
const url="mongodb://localhost:27017"
const client=new MongoClient(url)
const express=require("express")
const app=express()
app.use(express.json())
let database
let testCollection
function main()
{
client.connect().then((res)=>console.log("cpnnected to DB")).catch((err)=>console.log("error"))
database=client.db("fromexpress")
testCollection=database.collection("testexpresscollection")
}
main()
app.post("/createData",(req,res)=>{
const data=testCollection.insertOne(req.body)
console.log(data)
res.send("dummy")
})
app.get("/user/:username/:updateduname",async (req,res)=>{
const uname=req.params.username
const updateduname=req.params.updateduname
// const data=await testCollection.find({username:uname}).toArray()
// res.send(data)
const data=await testCollection.updateOne({username:uname},{$set:{username:updateduname}})
if(data.acknowledged){
    res.send(data)
}
else{
    res.send("error")
}
})

app.listen(3001,()=>console.log("server started"))




