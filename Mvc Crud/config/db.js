const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/MvcPractise");

const db = mongoose.connection;

db.once("open",(err)=>{
    err ? console.log(err) : console.log("Db connected successfully !")
})

module.exports = db;