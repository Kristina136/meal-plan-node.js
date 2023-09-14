const mongoose = require("mongoose");
const mealSchema = new mongoose.Schema({
    title: String,
    ingredients: String,
    dayOfWeek : String,
    typeOfMeal : String
})

module.exports = mongoose.model("Meal", mealSchema)