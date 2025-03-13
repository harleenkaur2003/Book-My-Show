const express= require('express');
const router= express.Router();
const Ticket=require("./schema");
const cors= require("cors")
const app= express()



router.use(express.json())
router.use(cors());


router.post("/booking",async(req,res)=>{
    const {movie,slot,seats}= req.body

     try{
        const myData= new Ticket({movie,slot,seats})

        const saved= await myData.save()

        res.status(200).json({data:myData,message:"Booking Successful!"})
     }
     catch(err){
        res.status(500).json({
            data:null,
            message:"something went wrong! please try again"
        })
     }
})
router.get("/booking",async(req,res)=>{
    try{
         const myData= await Ticket.find().sort({_id:-1}).limit(1)
           if(myData.length===0){
            res.status(200).json({data:null,message:"No previous booking found"})
           }
           else{
            res.status(200).json({data:myData[0]})
           }
         
    }
    catch(err){
        res.status(500).json({
            data:null,
            message:"Something went wrong!"
        })
    }
})

module.exports= router;