//construir un muro 
//aplanar un muro 
//Pintar

const muro = {
    construido: false,
    aplanado: false,
    pintado: false
  }
  
  // function construir (unMuro, unaFuncion) {
  //   setTimeout(() => {
  //     unMuro.construido = true
  //     unaFuncion(null, unMuro)
  //   }, 2000)

  // }
  
  // function aplanar (unMuroConstruido,unaFuncion) {
  //   setTimeout(() => {
  //     unMuroConstruido.aplanado = true
  //     unaFuncion(null, unMuroConstruido)
  //   }, 2000)
  // }
  
  // function pintar (unMuroAplanado,unaFuncion) {
  //   setTimeout(() => {
  //     unMuroAplanado.pintado = true
  //     unaFuncion(null, unMuroAplanado)
  //   }, 2000)
  // }
  
  // //callback hell
  // construir({ ...muro }, (error, muroConstruido) => {
  //   aplanar(muroConstruido,(error,muroAplanado)=>{
  //       pintar(muroAplanado,(error,muroPintado)=>{
  //         console.log('Muro listo:',muroPintado)
  //       })
  //   })
  // })

//Promesas
/*new Promise((resolve,reject)=>{
resolve -> una funcion que vamos a ejecutar cuando la promesa debe pasar de pendiente a resuelta
reject-> una funcion que vamos a ejecutar cuando la promesa debe pasar de pendiente a rechazada
})*/ 
/*la promesa creada(objetio)tendra dos metodos: then y catch
El then se ejecuta cuando la promesa se resuelve
el catch se ejecuta cuando la promesa de rechaza */

// //construir
// function construir(unMuro){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       unMuro.construido = true
//       if(!unMuro.construido){
//         reject(new Error('no se pudo construir'))
//         return
//       }
//         resolve(unMuro)
      
//     },2000)
//   })
// }

// //pintar
// function pintar(unMuro){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       unMuro.pintado = true
//       if(!unMuro.pintado){
//         reject(new Error('no se pudo pintar'))
//         return
//       }
//         resolve(unMuro)
      
//     },2000)
//   })
// }
// //aplanar
// function aplanar(unMuro){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       unMuro.aplanado= true
//       if(!unMuro.aplanado){
//         reject(new Error('no se pudo aplanar'))
//         return
//       }
//         resolve(unMuro)
      
//     },2000)
//   })
// }


//Async await
//async ->palabra reservada para marcar una funcion asincrona(toda aquella que usa await internamente)
//await -> palabra reservada que utilizaremos para esperar la resolucion de una promesa

// async function principal(){
//   const muroConstruido = await construir(muro)
//   const muroAplanado = await aplanar(muroConstruido)
//   const muroPintado = await pintar(muroAplanado)
//   console.log('Muro Pintado:',muroPintado)
// }

// principal()
// .then(()=>{
//   console.log('FIN')
// })
// .catch((error)=>{
//   console.log('ERROR',error)
// })


//TAREA**********************************
const fs = require('fs/promises')


//  fs.writeFile('NuevoArchivo.txt','Informacion dentro del archivo','utf-8')
//   .then(()=>{
//       console.log('archivo creado')
//       fs.appendFile('NuevoArchivo.txt','\nNueva linea','utf-8')
//       .then(()=>{
//         console.log('Nueva linea añadida')
//         setTimeout(()=>{
//           fs.unlink('NuevoArchivo.txt')
//           .then(()=>{
//             console.log('Se elimino el archivo')
//           })
//         },5000)
//       })
//     })
//     .catch ((err)=>{
//     console.error('Tenemos un error: ',err);
//     }) 
  

    async function main() {
      await fs.writeFile('NuevoArchivo.txt','Informacion dentro del archivo','utf-8')
      await fs.appendFile('NuevoArchivo.txt','\nNueva linea','utf-8')
    }
     
    main()
    .then(()=>{
      console.log('Fue creado el archivo')
      setTimeout(()=>{
        fs.unlink('NuevoArchivo.txt')
        console.log('Fue eliminado el archivo')
      },5000)
    })