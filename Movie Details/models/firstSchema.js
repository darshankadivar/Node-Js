const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    "title": {
        type: String,
        required: true
    },
    "category": {
        type: String,
        required: true
    },
    "releaseyear": {
        type: Number,
        required: true
    },
    "rating": {
        type: Number,
        required: true
    },
    "description": {
        type: String,
        required: true
    },
    "image": {
        type: String,
        required: true
    }
})

const firstSchema = mongoose.model("MovieTime", Schema);

module.exports = firstSchema;