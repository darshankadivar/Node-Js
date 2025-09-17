//Schema is a blueprint in which formate data stored in mongodb.

const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    "name": {
        type: String,
        required: true
    },
        "age": {
        type: Number,
        required: true
    }
})

const firstSchema = mongoose.model("CrudBasic",Schema);

module.exports = firstSchema;