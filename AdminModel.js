
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    adminFullName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})
module.exports = mongoose.model('AdminNamePass', adminSchema);