const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
        age: {
        type: Number,
        required: true
    },
          image: {
        type: String,
        required: true
    }

})

const firstSchema = mongoose.model("MvcCrud",Schema);

module.exports = firstSchema;