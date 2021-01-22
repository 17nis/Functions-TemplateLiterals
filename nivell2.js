// EXERCICI 1
console.log("---Exercici 1---");

let nom = "Genís";
let cognom = "Frigola Camps";
console.log(`Hola ${nom} ${cognom}`)



// EXERCICI 2
console.log("---Exercici 2---");

let templateLiteral = `${saludar(nom)}`

function saludar(nom){
    console.log("Hola, "+nom);
}