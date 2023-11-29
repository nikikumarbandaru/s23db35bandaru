const mongoose = require("mongoose")
const elephantSchema = mongoose.Schema({
elephant_Habitat:
{
    type: String,
    required: true,
    minlength: 1,
    maxlength: 14,
},
elephant_Weight: Number,
elephant_Lifespan: String,
elephant_TuskLength: Number
})
module.exports = mongoose.model("Elephant", elephantSchema)

