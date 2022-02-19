const bcrypt = require('bcrypt')
const User = require('../models/user.model')
const createError = require('http-errors')
const jwt = require('../lib/jwt.lib')


async function create (userData) {

    const userFound = await User.FindOne({ email: userData.email })
    if (userFound) {
        throw new createError(412, 'User already exists')
    }

    const hash = bcrypt.hash(userData.password, 10)
    userData.password = hash
    return User.create(userData)
}

async function login(email, password) {
    //paso 1: verificar si el usuario existe
    const userFound = await User.findOne({ email })
    if (!userFound) {
        throw new createError(401, 'invalid data')
    }

    // paso 2: verificar que el password sea correcto
    const isValidPassword = await bcrypt.compare(password, userFound.password)
    if (!isValidPassword) {
        throw new createError(401, 'invalid data')
    }
    
    //paso 3: expedir token
    return jwt.sign({ id: userFound._id })
} 

function deleteById (id) {
    return User.findByIdAndDelete(id)
}

function getAll(){
    return User.find()
}

function getByID(id){
    return User.findById(id)
}

module.exports = {
    create,
    deleteById,
    getAll,
    getByID,
    login
}