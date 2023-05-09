/*const {Person}=require("./person")

require("./modulos/http")

const person=new Person("Miguel Guedes")

//console.log(person.saymyname() )      */

//const filesystem=require("fs")      // solicitar um modulo interno do Node.js

// filesystem.copyFileSync("file.txt","file2.txt")

const names = require('marvel-dc-name-generator');      // activar modulo externo depois de instalar no terminal o npm

var superheroi= names.generate();
    console.log(superheroi)
