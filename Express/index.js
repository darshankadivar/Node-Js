const express = require("express");
const port = 1005

const app = express()

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    // res.write("<h1>Hello Node</h1>")
    // res.end()
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`Server started on port ${port}`)
})