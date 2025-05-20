const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require('./dbConnection')


const allowedOrigins = [
  "http://localhost:3000",
  "https://book-my-show-frontend-ef8d.onrender.com"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

//Middleware for parsing Json
app.use(express.json());

app.use(express.urlencoded({ extended: false }))
// creating an api and seperating it.

connectDB();
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.use("/api", require("./routes"));

app.listen(8080,()=>{
    console.log("App listening to port 8080")
});
