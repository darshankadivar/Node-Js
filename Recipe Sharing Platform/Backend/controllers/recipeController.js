// const recipeSchema = require("../models/recipeSchema")
const Recipe = require("../models/recipeSchema")
const moment = require("moment")
const userSchema = require("../models/userSchema")

// module.exports.createRecipe = async(req,res) => {
//     const {title, ingredients} = req.body

//     if (!title || !ingredients) {
//         return res.status(400).json({ msg: 'Title and ingredients required' })
//     }

//     const recipe = new Recipe({
//         title,
//         ingredients,
//         createdBy: req.user.id
//     })

//     await recipe.save()

//     res.json({msg: "Recipe Added", recipe})
// }

module.exports.createRecipe = async(req,res) => {
    const {title, ingredients} = req.body

    if (!title || !ingredients) { 
        return res.status(400).json({ msg: 'Title and ingredients required' })
    }

    req.body.createdBy = req.user.user._id;
    req.body.createdAt = moment().format('MMMM Do YYYY, h:mm:ss a')
   
    await Recipe.create(req.body).then((data)=>{
         res.status(200).json({ msg: 'Recipe added successfully', data: data })
    })
}

module.exports.allRecipes = async(req,res) => {
    const recipes = await Recipe.find().populate("createdBy")
    res.json(recipes)
}

module.exports.myRecipes = async(req,res) => {
    const recipes = await Recipe.find({createdBy: req.user.user._id}).populate("createdBy")
    res.json(recipes)
}

module.exports.getSingleRecipe = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
};


module.exports.updateRecipe = async(req,res) => {
    const recipe = await Recipe.findById(req.params.id)

    if (!recipe) {
        return res.json({ message: "Not found" });
    }

    if (recipe.createdBy !== req.user.id && req.user.role === "admin") {
        return res.json({ message: "No permission" });
    }

    recipe.title = req.body.title,
    recipe.ingredients = req.body.ingredients
    await recipe.save()

    res.json({msg: "Recipe updated", recipe})
}

module.exports.deleteRecipe = async(req,res) => {
    const recipe = await Recipe.findById(req.params.id)

    if (!recipe) {
        return res.json({ message: "Not found" });
    }

    if (recipe.createdBy !== req.user.id && req.user.role === "admin") {
        return res.json({ message: "No permission" });
    }

    await recipe.deleteOne()

    res.json({msg: "Recipe deleted"})
}