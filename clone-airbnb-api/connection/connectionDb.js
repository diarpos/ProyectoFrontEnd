const mongoose = require('mongoose')

const url = 'mongodb+srv://db_airbnbapp:clavedb123@cluster0.0hsl1.mongodb.net/db_airbnbapp?authSource=admin&replicaSet=atlas-lv4ham-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true'
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => console.error('Error connecting with database'))
db.once('open', () => console.log('Connection with mongo success'))

module.exports = db