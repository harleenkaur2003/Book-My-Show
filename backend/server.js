const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require('./dbConnection')


app.use(cors({ origin: "http://localhost:3000", credentials: true }));
//Middleware for parsing Json
app.use(express.json());

app.use(express.urlencoded({ extended: false }))
// creating an api and seperating it.

connectDB();
app.use("/api", require("./routes"));

app.listen(8080,()=>{
    console.log("App listening to port 8080")
});