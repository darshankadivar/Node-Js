const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    recipes: {
        type: mongoose.Types.ObjectId,
        ref: "Recipe"
    },
    createdAt: {
        type: String
    }
  
})

const userSchema = mongoose.model("User", schema)

module.exports = userSchema