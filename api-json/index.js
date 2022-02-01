const express = require("express");
const fs = require("fs");
const app = express();
const fspromise = require("fs/promises");

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
  const data = await fspromise.readFile('kodemia.json','utf-8')
  const dataParsed = JSON.parse(data)
  response.json(dataParsed.koders)
})

app.get('/koders/:id',async(request,response)=>{
  const id = request.params.id
  const data = await fspromise.readFile('kodemia.json','utf-8')
  const db = JSON.parse(data)
  const koderfound = db.koders.find((koder)=>{
    return koder.id.toLowerCase() == id.toLowerCase()
  })
  
  response.json(koderfound)
})

app.get('/koders/sex/:sex',async(request,response)=>{
  const sex = request.params.sex
  const data = await fspromise.readFile('kodemia.json','utf-8')
  const db = JSON.parse(data)
  const koderfound = db.koders.filter((result)=>{
    return result.sex.toLowerCase() == sex.toLowerCase()
  })
  
  response.json(koderfound)
})

app.listen(8080,()=>{
  console.log('listening server')
})