//1. all users data , i have to do a patch request - i need to update the scores and level /upadte/:id 
//if the score is more than 50 i need to increase the level and patch  

const express = require("express")
const {UserModel} = require("../models/user.model")

const leaderboardRoute = express.Router()

leaderboardRoute.patch("/update/:id",async(req,res)=>{
    let id = req.params.id;
    let {score} = req.body;
    
    try {
        const getScore=await UserModel.findOne({_id:id})
        score = getScore.score+score; 
        let level = Math.floor(score/50)
        level = level<=0 ? 1 : level;
         
        //  console.log(level);
         
        //  console.log(getScore.score,score)
            //update the score    
                  
             await UserModel.findByIdAndUpdate({_id:id},{score,level})
            const getdata = await UserModel.find({_id:id})
            
            res.status(200).send({
                "msg":"score has been updated",
                "data":getdata
            })
        
        // else if(score>getScore.score && level>getScore.level){

        //      await UserModel.findByIdAndUpdate({_id:id},{score,level})
        //     const data = await UserModel.find({_id:id})
        //     res.status(200).send({
        //         "msg":"score has been updated",
        //         "data": data
        //     })
        // }
         
    } catch (error) {
        res.status(400).send({
            "msg":error.message
        })
    }
})


module.exports = {leaderboardRoute}