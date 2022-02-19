
const mongoose = require('mongoose')

const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlenght: 20,
        required: true
    },
    age: {
        type: Number,
        min: 1,
        max: 150,
        required: true
    },
    nationality: {
        type: String,
        required: false //podria no ponerse y no seria requerido
    },
    generationNumber: {
        type: Number,
        min: 1 
    },
    hobbies: {
        type: [String]
    },
    sex: {
        type: String,
        enum: [ 'm', 'f' ]
    },
    city: {
        type: String
    }
})

module.exports = mongoose.model('koder', koderSchema)