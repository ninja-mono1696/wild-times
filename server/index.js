const express = require("express")
const cors = require("cors")
const connection = require("./configs/db")
const {UserRouter} = require("./routes/user.route")
const {leaderboardRoute} = require("./routes/leaderboard.route")
require("dotenv").config()

const app = express()
app.use(express.json());
app.use(cors())


app.get("/",(req,res)=>{
    res.send("Homepage")
})

app.use("/users",UserRouter);
app.use(leaderboardRoute);


app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("Connected to db");
    } catch (error) {
        console.log(error);
    }
    console.log(`The server is running on port ${process.env.port}`);
})