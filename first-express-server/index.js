const express = require('express')

const server = express()



server.get('/hola',(request,response)=>{
response.write('hola mundo')
response.end()
})
server.post('/hola',(request,response)=>{
response.write('aqui puedes crear un recurso')
response.end()
})
server.delete('/hola',(request,response)=>{
response.write('Aqui puedes borrar un recurso')
response.end()
})
server.get('/adios',(request,response)=>{
    response.write('adios :c')
    response.end()
    })

// server.put()
// server.delete()
// server.patch()
// server.post()

server.listen(8080,()=>{
    console.log('Server listening on port 8080')
})