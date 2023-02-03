/* EJERCICIOS

// BLOCK 001
//
// 1º - Crea un <p></p> dentro de un tag de tipo <div id="insert-p"></div>
// Solution
// let newEl = document.createComment("p");
// let newInyectionElement = document
//   .querySelector("#insert-p")
//   .appendChild(newEl);



// 2º - Crea un <div id="nested"></div> desde código
// Solution
// let div = document.createElement("div");
// variation01 - using method
//div.setAttribute("id", "nested");

// variation02 - using "id" prop
//div.id = "nested"

// check solution
//console.log(div);

// 3º - Crea contenido de texto del elemento <p></p> creado para introducir el siguiente texto: "Programming is my great"

newEl.innerText ="Programming is great";
console.log(newEl);

//4º - Crea una función que cambie el contenido del texto de un <p></p> en función a una variable string.

function cambiaContenido (contenido){
    newEl.innerText = contenido;
}
cambiaContenido("Cris ha hecho el contenido");
console.log(newEl);

//
//
// Block 002

// 1º - Crea un elemento de color verde y un botón para cambiar el color de verde a rojo.

// 2º - Crea un elemento <div></div> y asignale una clase "green-box" que haga que sea una caja de 100px de alto y ancho de color verde.

// 3º - Crea una <div class="remove-class"></div> y elimínale la clase mediante js. La clase remove-class debe hacer que el elemento mida 100vw de ancho y 100px de alto y tener un background azul.

// 4º 1 - Crea un botón que, al ser pulsado, introduzca en el dom un <p>Texto insertado</p>

// 5º - Crea un botón que, al ser pulsado, introduzca una tabla de tres columnas y tres filas.
