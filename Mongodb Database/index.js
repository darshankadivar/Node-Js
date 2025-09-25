const express = require("express");
const port = 1008
const path = require("path")
const fs = require("fs")

const app = express()
const db = require("./config/db")
const Schema = require("./models/firstSchema")
const multer = require("./middelwares/multer")


app.set("view engine","ejs");
app.use(express.urlencoded({extended: true}));
app.use("/",express.static(path.join(__dirname,"public")));
app.use("/uploads",express.static(path.join(__dirname,"uploads")));

app.get("/",async(req,res)=>{
    await Schema.find().then((data)=>{
        res.render("index",{data})
    })
})

app.post("/addData",multer,async(req,res)=>{
    req.body.image = req.file.path
    await Schema.create(req.body).then(()=>{
        res.redirect("/")
    })
})

app.get("/deleteData",async(req,res)=>{
    let singleData = await Schema.findById(req.query.id)
    fs.unlinkSync(singleData.image)
    await Schema.findByIdAndDelete(req.query.id).then(()=>{
        res.redirect("/")
    })
})

app.get("/editData",async(req,res)=>{
    let singleData = await Schema.findById(req.query.id)
    res.render("edit",{singleData})
})

app.post("/updateData",multer,async(req,res)=>{
   let singleData = await Schema.findById(req.body.id)
   let img = ""

   req.file ? img = req.file.path : img = singleData.image

   req.file && fs.unlinkSync(singleData.image)

   req.body.image = img
   
   await Schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
    res.redirect("/")
   })
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server started on port " + port)
})