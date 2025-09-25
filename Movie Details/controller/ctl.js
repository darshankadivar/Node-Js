const fs = require("fs");
const Schema = require("../models/firstSchema");


module.exports.firstPage = async(req,res)=>{
    await Schema.find().then((data)=>{
        res.render("home",{data})
    })
}

module.exports.addBtn = (req,res)=>{
    res.render("addmovie")
}

module.exports.addFunction = async(req,res)=>{
    req.body.image = req.file.path
    await Schema.create(req.body).then(()=>{
        res.redirect("/")
    })
}

module.exports.deleteFunction = async(req,res)=>{
    let singleData = await Schema.findById(req.query.id)
    fs.unlinkSync(singleData.image)
    await Schema.findByIdAndDelete(req.query.id).then(()=>{
        res.redirect("/")
    })
}

module.exports.editFunction = async(req,res)=>{
    await Schema.findById(req.query.id).then((singleData)=>{
        res.render("editmovie",{singleData})
    })
}

module.exports.updateFunction = async(req,res)=>{
    let singleData = await Schema.findById(req.body.id)
    let img = ""

    req.file ? img = req.file.path : img = singleData.image

    req.file && fs.unlinkSync(singleData.image)

    req.body.image = img

    await Schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/")
    })
}