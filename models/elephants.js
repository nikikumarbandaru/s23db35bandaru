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
elephant_TuskLength:
{
    type: Number,
    required: true,
    min: 1,
    max: 10,
}
})
module.exports = mongoose.model("Elephant", elephantSchema)

