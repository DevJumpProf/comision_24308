/* destructuring ARRAYS */
      // indice     0        1           2         
let seleccion = ["Messi", "De Paul", "Banini"]

/* acceder */
console.log(seleccion[2]);

/* copiar un dato del array sin destructuring */
/* let estefania = seleccion[2]
console.log(estefania); */

/* copiar datos del array con destructuring */
    //0     1       2   
let [leo,rodrigo,estefania] = seleccion
console.log(estefania);

/* destructuring objetos */
let auto =   {
    marca: "Ssanyoung",
    modelo:"Musso",
    anio:1996
}

/* copiar un dato sin destructuring */
/* let miModelo = auto.modelo;
console.log(miModelo); */
console.log(auto.marca);

/* copiar un dato con destructuring */

let {marca:miModelo,modelo,anio} = auto 
console.log(anio);
console.log(`el modelo de mi camioneta es ${miModelo}`);

//SPREAD OPERATOR ...
/* 
array */
let rocky = ["Rocky","Rocky II ","RockyIII"]
let creed = ["Creed", "CreedII"]

let peliculasBOX = [...creed,...rocky,"Rocky IV"]
console.log(peliculasBOX);

//SPREAD OPERATOR ...
/* 
objeto */

let generoAventura = {
    nombreGenero: "Aventura",
    popularidad:10
}

let volverAlFuturo = {
    titulo: "volver al Futuro",
    ranking: 1,
    ...generoAventura
}

let volver2 = {
    ...volverAlFuturo
}
console.log(volverAlFuturo);
