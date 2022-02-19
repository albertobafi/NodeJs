
const express = require('express')
const createError = require('http-errors')
const koders = require('../usecases/koder.usercase')

const auth = require('../middlewares/auth.middleware')

const router = express.Router()

router.use(auth)

// GET /koders
router.get('/', async (request, response) => {
    
        const allKoders = await koders.getAll()
    
        response.json({
            ok:true,
            koders: allKoders
        })
    
})

// GET /koders/:id
router.get('/:id', auth, async (request, response) => {
    
        const koderFound = await koders.getByID(request.params.id)
        if(!koderFound){
            // const error = new Error('Koder not found')
            // error.status = 404
            throw new createError(404, 'koder not found')
        }
        response.json({
            ok:true,
            koder: koderFound
        })
    
})

router.delete('/:id', async (request, response)=>{
        const koderDeleted = await koders.deleteById(request.params.id)
        response.json({
            ok: true,
            koder: koderDeleted
        })
})

//crear koder
router.post('/', async (request, response) => {
    
        const koderCreated = await koders.create(request.body)
        response.json({
            ok:true,
            message: 'Koder created'
        })        
    
})
//actualizar
router.patch('/koder/:id', async (request, response) =>{
    
        const koderUpdate = await koders.updateById(request.params.id, request.body)
        response.json({
            ok: true,
            koder: koderUpdate
        })
    
})

module.exports = router