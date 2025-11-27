const userSchema = require("../models/userSchema")
const bcrypt = require("bcryptjs")
const moment = require("moment")
const jwt = require("jsonwebtoken")

module.exports.register = async(req,res) => {
    const {name, email, password} = req.body

    if (!name || !email || !password) {
        return res.status(400).json({msg: "All fields required"})
    }

    const user = await userSchema.findOne({email: email})

    if (user) {
        return res.status(200).json({msg: "User already registered"})
    }

    req.body.password = await bcrypt.hash(req.body.password,10)
    req.body.createdAt = moment().format('MMMM Do YYYY, h:mm:ss a')

    await userSchema.create(req.body).then((data)=>{
        res.status(200).json({msg: "USer registerd successfully", data: data})
    })
}

module.exports.login = async(req,res) => {
    const {email, password} = req.body

    if (!email || !password) {
        return res.status(400).json({msg: "both fields required"})
    }

    const user = await userSchema.findOne({email: email})

    if (!user) {
        return res.status(403).json({msg: "User not found"})   
    }

    if (await bcrypt.compare(req.body.password, user.password)) {
        let token = jwt.sign({user, role: user.role}, "zxc", {expiresIn: "1h"})

        return res.status(200).json({msg: "User logged in successfully", token: token})
    } else {
        return res.status(401).json({msg: "User password is wrong"})
    }
}

module.exports.profile = async(req,res) => {
    await userSchema.findById(req.user.user._id).then((data)=>{
        res.status(200).json({msg: "Your Profile Data", data: data})
    })
}

module.exports.logout = (req,res) => {
    res.status(200).json({msg: "user logout"})
}