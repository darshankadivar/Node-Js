const fs = require("fs");
const  Schema  = require("../model/firstSchema")

module.exports.firstPage = async(req,res)=>{
    await Schema.find().then((data)=>{
        res.render("index",{data})
    })
}

module.exports.Addfunction = async(req,res) => {
    req.body.image = req.file.path
    await Schema.create(req.body).then(()=>{
        res.redirect("/")
    })
}

module.exports.deletefunction = async(req,res) => {
    let singleData = await Schema.findById(req.query.id)
    fs.unlinkSync(singleData.image)
    await Schema.findByIdAndDelete(req.query.id).then(()=>{
        res.redirect("/")
    })
}

module.exports.editfunction = async(req,res) => {
    await Schema.findById(req.query.id).then((singleData)=>{
        res.render("edit",{singleData})
    })
}


module.exports.updatefunction = async(req,res) => {
    let singleData = await Schema.findById(req.body.id)
    let img = ""

    req.file ? img = req.file.path : img = singleData.image

    req.file && fs.unlinkSync(singleData.image)

    req.body.image = img

    await Schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/")
    })
}