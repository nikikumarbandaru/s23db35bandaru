const mongoose = require("mongoose")
const elephantSchema = mongoose.Schema({
elephant_Habitat: String,
elephant_Weight: Number,
elephant_Lifespan: String,
elephant_TuskLength: Number
})
module.exports = mongoose.model("Elephant", elephantSchema)

