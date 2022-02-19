
const express = require('express')
const createError = require('http-errors')

const users = require('../usecases/user.usercase')

const router = express.Router()

router.post('/login', async (request, response) =>{
    try {
        const { email, password } = request.body

        if(!email) throw new createError(400, 'Email is required')
        if(!password) throw new createError(400, 'Password is required')

        const token = await users.login(email, password)
        response.json({
            ok: true,
            token
        })

    } catch (error) {
        response.status(error.status || 500)
        response.json({
            error: error.message || 'unknown'
        })
    }
})

module.exports = router