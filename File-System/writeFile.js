const fs = require('fs')

// //es importante el orden
// function atTheEnd(error){
//     if(error){
//         return console.log('hubo un error al crear el archivo',error)
//     }
//     console.log('El archivo fue escrito exitosamente')
// }
// fs.writeFile('hola.txt','hola a todos desde el nuevo archivo','utf-8',atTheEnd)

//practica con append
function resultAppend(err){
    if(err){
        console.log('tuvimos el error:',err)
        return
    }
    console.log('la informacion ha sido añadida con exito')
}



fs.appendFile('hola.txt','\nEste es texto que se esta añadiendo','utf-8',resultAppend)


// if (NaN){
//     console.log('Es Thruthy')
// }

/*
1.- crear un archivo hola.txt
2.-Usar la funcion appendfilepara agergar una segunda linea 
3.- despues de 5 segundos eliminar el archivo (fs.unlink)
*/