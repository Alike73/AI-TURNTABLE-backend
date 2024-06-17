
const mongoose = require('mongoose');


const musicCategorySchema = new mongoose.Schema({

    musicCategory: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('MusicCategory', musicCategorySchema)