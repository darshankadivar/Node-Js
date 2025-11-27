const express = require("express")
const route = express.Router()
const recipeCtl = require("../controllers/recipeController")
const auth = require("../middelwares/Auth")
const roleAuth = require("../middelwares/roleAuth")

route.get("/allrecipe", recipeCtl.allRecipes)

route.get("/myrecipe", auth.checkAuth, recipeCtl.myRecipes)

route.post("/addrecipe", auth.checkAuth, recipeCtl.createRecipe)

route.get("/single/:id", auth.checkAuth, recipeCtl.getSingleRecipe)

route.put("/updaterecipe/:id", auth.checkAuth, recipeCtl.updateRecipe)

route.delete("/deleterecipe/:id", auth.checkAuth, recipeCtl.updateRecipe)

module.exports = route