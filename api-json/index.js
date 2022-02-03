const { response, request } = require("express");
const express = require("express");
const app = express();
app.use(express.json())// sin esta linea no puedo leer body
const fs = require("fs/promises");
const { parse } = require("path");

// //funcion para terminar en caso de error 
// const atTheEnd = (err) => {
//   if (err) {
//     console.log("Hubo un error");
//     return;
//   }
// };

// //declaracion de variables y constantes 
// const document = "hola.txt"
// let textFromReadFile = ""

// //funcion para creacion del archivo 
// async function creationFile() {
//   await fs.writeFile(document, "hola desde el archivo nuevo", "utf-8", atTheEnd)
// }
// //funcion para leer el archivo
// async function readText() {
//     await fs.readFile(document, "utf-8",(err,response)=>{
//         if (err){
//             atTheEnd
//         }
//         textFromReadFile = response
//     })
//   }

// creationFile().then(() => {
//   readText().then(() => {
//     app.get("/",(request,response) => {
//       response.send(textFromReadFile)
//     })
//   })
// })


// Hacer un endpoint que al llamarlo nos regrese el contenido de un archivo text.txt
// GET /file

//solucion charles 
// app.get('/',(request,response)=>{
//   fs.readFile('hola.txt',(err,data)=>{
//     if (err){
//       console.log('no se pudo leeer',err)
//       return
//     }
//     response.send(data)
//   })
// })
// app.listen(8080,()=>{
//   console.log('listening server')
// })

// app.get('/',(request,response)=>{
//   fspromise.readFile('hola.txt','utf-8')
//   .then((data)=>{
//     response.send(data)
//   })
//   .catch((err)=>{
//     console.log('no se pudo leer :c',err)
//   })
// })

// app.listen(8080,()=>{
//   console.log('listening server')
// })

//utilizando con async

// app.get('/',async (request,response)=>{
//   const data = await fspromise.readFile('hola.txt','utf-8')
//   response.send(data)
// })

// app.listen(8080,()=>{
//   console.log('listening server')
// })

//consultas a un archivo json
app.get('/koders',async (request,response)=>{
  const data = await fs.readFile('kodemia.json','utf-8')
  const db = JSON.parse(data)
  let kodersFound = db.koders

  if(request.query.max_age){
    kodersFound = kodersFound.filter((koder)=>{
      return koder.age <= parseInt(request.query.max_age)
    })
  }

  response.json(kodersFound)
})

app.get('/koders/:id',async(request,response)=>{
  const id = parseInt(request.params.id)
  const data = await fs.readFile('kodemia.json','utf-8')
  const db = JSON.parse(data)

  const koderfound = db.koders.find((koder)=>{
    return koder.id === id
  })
  
  response.json(koderfound)
})

//Crear un koder
app.post('/koders', async (request, response)=>{

  const data = await fs.readFile('kodemia.json', 'utf8')
  const db = JSON.parse(data)

  const newKoderId = db.koders.length + 1
  const newKoderData = {
    id: newKoderId,
    ... request.body
  }

  db.koders.push(newKoderData)

  const dbAsString = JSON.stringify(db, '\n', 2)
  await fs.writeFile('kodemia.json', dbAsString , 'utf8')

  response.json(db.koders)
})

//borrar a alguno de los koders
// /koders/1
app.delete('/koders/:id', async (request, response) => {
  const id = parseInt(request.params.id)
  const data = await fs.readFile('kodemia.json', 'utf8')
  const db = JSON.parse(data)

  const newKodersArray = db.koders.filter((koder) => id != koder.id)
  db.koders = newKodersArray

  const dbAsString = JSON.stringify(db, '\n', 2)
  await fs.writeFile('kodemia.json', dbAsString, 'utf8')

  response.json(db.koders)

})

app.patch('/koders/:id', async (request, response) => {
  const id = parseInt(request.params.id)

  if (isNaN(id)){
    response
    .status(400)
    .json({
      message: 'Id must be a number'
    })
    return
  }

  const data = await fs.readFile('kodemia.json', 'utf8')
  const db = JSON.parse(data)

  const koderFoundIndex = db.koders.findIndex((koder) => id === koder.id)
  
  if (koderFoundIndex < 0 ){
    response.status(404)
    response.json({
      message: 'koder not found'
    })
    return
  }

  db.koders[koderFoundIndex] = {
    ...db.koders[koderFoundIndex],
    ...request.body
  }

  const dbAsString = JSON.stringify(db, '\n', 2)
  await fs.writeFile('kodemia.json', dbAsString, 'utf8')

  response.json(db.koders[koderFoundIndex])

})
//------------------------practica------------
//get
app.get('/mentors', async (request, response) => {
  const data = await fs.readFile('kodemia.json', 'utf8')
  const db = JSON.parse(data)
  let mentorsFound = db.mentors
  
  response.json(mentorsFound)
})
//get por id
app.get('/mentors/:id', async (request, response) => {
  const id = parseInt(request.params.id)
  const data = await fs.readFile('kodemia.json', 'utf8')
  const db = JSON.parse(data)

  const mentorFound = db.mentors.find((mentor) =>{
    return mentor.id === id
  })

  response.json(mentorFound)
})

//Crear un  mentor
app.post('/mentors', async (request, response) => {
  const data = await fs.readFile('kodemia.json', 'utf8')
  const db = JSON.parse(data)

  const newMentorId = db.mentors.length + 1
  const newMentorData = {
    id: newMentorId,
    ... request.body
  }

  db.mentors.push(newMentorData)

  const dbAsString = JSON.stringify(db, '\n', 2)
  await fs.writeFile('kodemia.json', dbAsString, 'utf8')

  response.json(db.mentors)
})

//borrar mentor
app.delete('/mentors/:id', async (request, response) =>{
  const id = parseInt(request.params.id)
  const data = await fs.readFile('kodemia.json', 'utf8')
  const db = JSON.parse(data)

  const newMentorsArray = db.mentors.filter((mentor) => id != mentor.id)
  db.mentors = newMentorsArray

  const dbAsString = JSON.stringify(db, '\n', 2)
  await fs.writeFile('kodemia.json', dbAsString, 'utf8')

  response.json(db.mentors)
})

app.listen(8080,()=>{
  console.log('listening server')
})

//GET http://kodemia.mx/clases?
//GET http://localhost:8080/koders?hobbie=caminar

