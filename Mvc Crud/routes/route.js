const express = require("express");
const route = express.Router();
const control = require("../controller/ctl");
const multer = require("../middelwares/multer");

route.get("/",control.firstPage);

route.post("/addData",multer,control.Addfunction)

route.get("/deleteData",control.deletefunction)

route.get("/editData",control.editfunction)

route.post("/updateData",multer,control.updatefunction)


module.exports = route;