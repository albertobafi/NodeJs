const fs = require('fs')

// const deleteFile = (err)=>{
//     if(err){
//         console.log('Ocurrio un error: ',error)
//         return
//     }
//     console.log('Se elimino el file') 
// }

// const atTheEnd=(error)=>{
//     if(error){
//         console.log('Ocurrio un error: ',error)
//         return
//     }
//     console.log('Se añadio el texto al file') 
//     }

// function proceso(variable,funcion){
//     variable.writeFile('holaNuevo.txt','Primer Texto','utf-8',funcion)
//     variable.appendFile('holaNuevo.txt','\nNuevo Texto','utf-8',funcion)
//     setTimeout(()=>{
//         variable.unlink('holaNuevo.txt',deleteFile)
//     },5000)
// }

// proceso(fs,atTheEnd)

//solucion charles 

fs.writeFile('voyAMorir.txt','hola no me queda mucho tiempo','utf-8',(error)=>{
    if(error){
        console.error('no se pudo crear el archivo')
        return
    }
    //paso 2
    fs.appendFile('voyAMorir.txt','Tengo algo importante que decirte....','utf-8',(error)=>{
        if(error){
            console.error('no se pudo añadir la linea')
        return
        }
        //paso 3
        setTimeout(()=>{
            fs.unlink('voyAMorir.txt',(error)=>{
                if(error){
                    console.error('no se pudo eliminar el archivo')
                return
                }
            })
        },5000)
    })
})