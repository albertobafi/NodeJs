var colors = require('colors')
const params = require('yargs-parser')(process.argv.slice(2))
const fs = require('fs')

// const nombre = params.name

// console.log(`Hola ${nombre}`.rainbow)

/**
 * usar
 * fs.readFile
 * Para leer un archivo e imprimirlo en consola
 */

fs.readFile('hola.txt','utf-8', (err, data) => {
    if (err){
        console.error(err)
    }
    console.log(data);
    })