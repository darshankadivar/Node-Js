const express = require("express");
const route = express.Router();
const multer = require("../middelwares/multer");
const control = require("../controller/ctl")

route.get("/",control.firstPage);

route.get("/addmovie",control.addBtn);

route.post("/addmovie",multer,control.addFunction);

route.get("/deleteData",control.deleteFunction);

route.get("/editData",control.editFunction);

route.post("/updateData",multer,control.updateFunction);

module.exports = route;