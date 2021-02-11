// EXERCICI 1
console.log("---Exercici 1---");

let i, j;
let matriuFuncions = [imprimir()];

function imprimir(i){
    for(i = 0; i < 10; i++){
        for(j = 0; j < 10; j++){
            console.log(j);
        }
    }
}


// EXERCICI 2
console.log("---Exercici 2---");

const x =((nom) =>{
    console.log(nom);
})('genís');