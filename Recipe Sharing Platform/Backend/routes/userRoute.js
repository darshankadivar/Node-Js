const express = require("express")
const route = express.Router()
const userCtl = require("../controllers/userController")
const auth = require("../middelwares/Auth")

route.post("/register", userCtl.register)

route.post("/login", userCtl.login)

route.get("/viewprofile",  auth.checkAuth ,userCtl.profile)

route.post("/logout", userCtl.logout)


module.exports = route;