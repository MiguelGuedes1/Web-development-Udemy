const names_heroi = require('marvel-dc-name-generator')    // activar modulo externo depois de instalar no terminal o npm
const supervillains = require('supervillains');

var superheroi= names_heroi.generate();
var vilao= supervillains.random()

    console.log(`A luta vai ser entre o ${superheroi} e o ${vilao}`)

/*const {Person}=require("./person")

require("./modulos/http")

const person=new Person("Miguel Guedes")

//console.log(person.saymyname() )      */

//const filesystem=require("fs")      // solicitar um modulo interno do Node.js

// filesystem.copyFileSync("file.txt","file2.txt")

