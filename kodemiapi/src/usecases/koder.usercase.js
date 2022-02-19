
const Koder = require('../models/koder.model')

function getAll() {
    return Koder.find()
}

function getByID (id){
    return Koder.findById(id)
}

function create (koderData) {
    const newKoder = new Koder(koderData)

    const errors = newKoder.validateSync()

    if(errors){
        console.log('errors: ', errors)
        throw new createError(400, 'Validation Failed')
    }

    return newKoder.save()
}

function deleteById (id) {
    return Koder.findByIdAndDelete(id)

}

function updateById (id, newKoderData){
    return Koder.findByIdAndUpdate(id, newKoderData)
}


module.exports = {
    getAll,
    getByID,
    create,
    deleteById,
    updateById
}


