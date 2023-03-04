const express = require("express")
const {UserModel} = require("../models/user.model")
const UserRouter = express.Router()

UserRouter.get("/",async(req,res)=>{
    const {page} = req.query
    try {
        const data = await UserModel.find().sort({score:-1}).limit(7).skip((page-1)*7)
       res.send(data)
        
    } catch (error) {
        res.send({
            "msg":error.message
        })
    }
})
 

UserRouter.post("/register",async(req,res)=>{
    const payload = req.body;
    // console.log(req)
    try {
         const existing = await UserModel.find(payload)
         console.log(existing);
        if(existing.length > 0){
            res.send({
                "msg":"The Player already exists",
                "data":existing,
                
            })
        }
        else{
            const data = new UserModel(req.body)
            await data.save()
            const getData = await UserModel.find(payload)
            res.send({
                "msg":"Player has been registered" ,
                "data": getData //if the user is already present then in the leaderboard we have to update the scores of the game else if new user then we need to post a request of a new user there and then update
            })
        }
        
               
    } catch (error) {
        res.send({
            "msg":error.message
        })
    }
})


UserRouter.post("/login",async(req,res)=>{
    const payload = req.body;
    // console.log(req)
    try {
         const existing = await UserModel.find(payload)
         console.log(existing);
        if(existing.length > 0){
            res.send({
                "msg":"Player Found",
                "data":existing,
                
            })
        }
        else{
            
            res.send({
                "msg":"Player Not Found, Please register" ,             
            })
        }
        
               
    } catch (error) {
        res.send({
            "msg":error.message
        })
    }
})



module.exports = {UserRouter}