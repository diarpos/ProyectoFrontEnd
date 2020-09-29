const mongoose = require('mongoose')
const { Schema } = mongoose

const ExperienceSchema = new Schema({
    image: String,
    title: String,
    description: String,
    place: String,
    score: Number,
    users: Number
})

const ExperiencesModel = mongoose.model('experiences', ExperienceSchema)

module.exports = ExperiencesModel



