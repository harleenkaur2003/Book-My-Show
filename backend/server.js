const express= require("express")
const app= express()

const cors= require("cors")
const connectDb= require('./dbConnection')
const Ticket=require('./schema')

app.use(cors())

app.use(express.json())

connectDb()

app.use("api",require("./routes"))

app.listen(8080,()=>{
    console.log("app is listening")
})

