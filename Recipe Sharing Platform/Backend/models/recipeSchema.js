const mongoose = require("mongoose")

const schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        require: true
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: String
    }
})

const recipeSchema = mongoose.model("Recipe", schema)

module.exports = recipeSchema