// EXERCICI 1
console.log("---Exercici 1---");

let i = 1;
let matriuFuncions = [imprimir(i)];

function imprimir(i){
    if(i<=10){
        console.log(i);
        i++;
        return imprimir(i)}
}


// EXERCICI 2
console.log("---Exercici 2---");
let nom = "genís";

const x =(() =>{
    console.log(nom);
})();