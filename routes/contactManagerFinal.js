const express=require("express")
const router=express.Router()
const {contactDetails}=require("../controllers/contactControllersFinal")
router.get("/v1/contactdetails",contactDetails)
// router.get("/v1/user/:username/:city?",user)
// router.post("/v1/user",getUser)
// router.put("/v1/user",putUser)
// router.patch("/v1/user",patchUser)
// router.delete("/v1/user/:id",deleteUser)
module.exports=router